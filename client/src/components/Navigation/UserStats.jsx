import React from 'react'
import Bar from './Bar'
import { Link } from 'react-router-dom'

const UserStats = () => {
	return (
		<div className="w-full h-full flex items-center gap-2">
			<div className="w-44 grid gap-1">
				<Bar color={'bg-[#7AA615]'} text={'$2 000 000'} />
				<div className="grid grid-cols-2 gap-1">
					<Bar color={'bg-[#89B2D0]'} text={'195'} />
					<Bar color={'bg-[#B159CE]'} text={'Lv. 34'} />
				</div>
			</div>
			<Link className="h-full flex items-center">
				<img src="./default-blue.png" alt="" className="h-[85%] rounded-sm" />
			</Link>
		</div>
	)
}

export default UserStats
