import React from 'react'
import LeftBlock from './LeftBlock'

const Company = () => {
	return (
		<div className="relative w-full min-h-[89.7vh]">
			<div className="max-w-[1200px] h-full mx-auto py-10 text-white">
				<LeftBlock />
			</div>
			<div className="absolute top-0 left-0 w-full h-full bg-black opacity-60 -z-10"></div>
			<img src="../company.jpg" alt="" className="absolute top-0 left-0 w-full h-full -z-20" />
		</div>
	)
}

export default Company
