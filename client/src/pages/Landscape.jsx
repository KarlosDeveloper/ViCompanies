import React, { useState, useEffect, useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { Menu, Nav } from '../components/index'
import { DATABASE_URL } from '../../env'
import { UserContext } from '../UserContext'

const Home = () => {
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
		<div className="h-screen flex flex-col justify-between bg-[#3d3d3d]">
			<Nav />
			<Menu />
		</div>
	)
}

export default Home
