import React, { useState } from 'react'
import Menu from './NavMenu'
import Hamburger from 'hamburger-react'

const HamburgerMenu = () => {
	const [isOpenMenu, setOpenMenu] = useState(false)
	return (
		<>
			<Hamburger onToggle={() => setOpenMenu(prev => !prev)} color="#b3b3b3" distance="lg" size={30} />
			<Menu visible={isOpenMenu} />
		</>
	)
}

export default HamburgerMenu
