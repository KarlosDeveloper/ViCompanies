import React, { useState, useEffect, useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { Menu, Nav, CompanyProfil } from '../components/index'
import { DATABASE_URL } from '../../env'
import { UserContext } from '../UserContext'

const Company = () => {
	const userCTX = useContext(UserContext)
	const { setUser } = userCTX
	const token = window.localStorage.getItem('token')
	if (!token) {
		return <Navigate to={'/'} />
	} else {
		useEffect(() => {
			fetch(`${DATABASE_URL}/getUser`, {
				method: 'POST',
				body: JSON.stringify({ token }),
				headers: { 'Content-Type': 'application/json' },
			}).then(res => {
				res.json().then(data => {
					setUser(data.CompanyDoc)
				})
			})
		}, [])
	}
	return (
		<div className="relative min-h-screen w-full flex flex-col">
			<Nav />
			<CompanyProfil />
			<Menu />
		</div>
	)
}

export default Company
