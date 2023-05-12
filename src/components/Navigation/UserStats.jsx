import React from 'react'
import Bar from './Bar'
import { Link } from 'react-router-dom'

const UserStats = () => {
	return (
		<div className="w-full h-full flex items-center gap-2">
			<div className="grid gap-1">
				<Bar width={100} color={'7AA615'} text={'$2 000 000'} />
				<div className="flex gap-1">
					<Bar width={24} color={'89B2D0'} text={'195'} />
					<Bar width={24} color={'B159CE'} text={'Lv. 34'} />
				</div>
			</div>
			<Link className="h-full flex items-center">
				<img src="./default-blue.png" alt="" className="h-[85%] rounded-sm" />
			</Link>
		</div>
	)
}

export default UserStats
