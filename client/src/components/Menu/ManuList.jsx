import React from 'react'
import { Link } from 'react-router-dom'
import { FaMap, FaExchangeAlt } from 'react-icons/fa'
import { AiFillAppstore } from 'react-icons/ai'
import { GoSearch } from 'react-icons/go'
import { RiMessageFill } from 'react-icons/ri'

import './Menu.css'
const ManuList = () => {
	return (
		<div>
			<ul className="flex">
				<li className="menu-li">
					<Link to={'/landscape'}>
						<FaMap />
					</Link>
				</li>
				<li className="menu-li">
					<Link to={''}>
						<AiFillAppstore />
					</Link>
				</li>
				<li className="menu-li">
					<Link to={''}>
						<GoSearch />
					</Link>
				</li>
				<li className="menu-li">
					<Link to={''}>
						<RiMessageFill />
					</Link>
				</li>
				<li className="menu-li">
					<Link to={''}>
						<FaExchangeAlt />
					</Link>
				</li>
			</ul>
		</div>
	)
}

export default ManuList
