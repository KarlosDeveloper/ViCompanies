import React from 'react'
import NavList from './NavList'

const Menu = ({ visible }) => {
	return (
		<div
			className={`absolute left-0 w-full ${
				visible ? 'h-[300px]' : 'h-0'
			} flex justify-around items-center bg-zinc-800 duration-300 overflow-hidden`}>
			<div className={`${visible ? 'visible' : 'hidden'}`}>
				<NavList />
			</div>
			<div></div>
		</div>
	)
}

export default Menu
