import React, { useEffect } from 'react'
import { HomePage, Nav } from '../components'
const Home = () => {
	useEffect(() => {
		window.localStorage.clear()
	}, [])
	return (
		<div className="w-full h-screen overflow-hidden">
			<HomePage />
		</div>
	)
}

export default Home
