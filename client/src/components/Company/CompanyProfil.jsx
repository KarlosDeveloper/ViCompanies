import React from 'react'
import LeftBlock from './LeftBlock'
import Profil from './Profil'

const Company = () => {
	return (
		<div className="relative w-full min-h-[89.7vh] md:min-h-[91.6vh]">
			<div className="max-w-[1200px] h-full mx-auto py-10 px-10 text-white">
				<div className="w-full md:w-[50%] lg:w-[40%] xl:w-[30%]">
					<Profil />
					<LeftBlock />
				</div>
			</div>
			<div className="absolute top-0 left-0 w-full h-full bg-black opacity-60 -z-10"></div>
			<img src="../company.jpg" alt="" className="absolute top-0 left-0 w-full h-full -z-20" />
		</div>
	)
}

export default Company
