import React from 'react'
import { Link } from 'react-router-dom'
import './Navigation.css'

const NavList = () => {
	return (
		<ul>
			<li className="mb-8">
				<Link to={''}>Biblioteka</Link>
			</li>
			<li className="my-8">
				<Link to={''}>Encyklopedia</Link>
			</li>
			<li className="my-8">
				<Link to={''}>program referencyjny</Link>
			</li>
			<li className="my-8">
				<Link to={''}>Notatki</Link>
			</li>
			<li>
				<Link to={'/'}>Wyloguj</Link>
			</li>
		</ul>
	)
}

export default NavList
