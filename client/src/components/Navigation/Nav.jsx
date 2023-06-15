import React from 'react'
import HamburgerMenu from './HamburgerMenu'
import UserStats from './UserStats'

const Nav = () => {
	return (
		<div className="fixed top-0 left-0 w-full h-14 flex items-center justify-around bg-zinc-800 z-20">
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
