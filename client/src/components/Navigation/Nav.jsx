import React from 'react'
import HamburgerMenu from './HamburgerMenu'
import UserStats from './UserStats'

const Nav = () => {
	return (
		<div className="w-full h-14 flex items-center justify-around bg-zinc-800 z-10">
			<div>
				<HamburgerMenu />
			</div>
			<div className="h-full">
				<UserStats />
			</div>
		</div>
	)
}

export default Nav
