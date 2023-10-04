import React, { useEffect, useState } from 'react'
import { Navigate, Link, redirect } from 'react-router-dom'

const AdminPanel = () => {
	const [redirect, setRedirect] = useState(false)
	const token = window.localStorage.getItem('token')
	if (!token) {
		setRedirect(true)
	} else {
		useEffect(() => {
			fetch(`${import.meta.env.VITE_DATABASE_URL}/getAdmin`, {
				method: 'POST',
				body: JSON.stringify({ token }),
				headers: { 'Content-Type': 'application/json' },
			}).then(res => {
				res.json().then(data => {
					if (data.error === 403) {
						setRedirect(true)
					}
				})
			})
		}, [])
	}
	if (redirect) {
		return <Navigate to={'/'} />
	}
	return (
		<div>
			<Link to={'/'}>Powrót</Link>
		</div>
	)
}

export default AdminPanel
