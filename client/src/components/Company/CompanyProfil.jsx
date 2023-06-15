import React from 'react'
import LeftBlock from './LeftBlock'
import Profil from './Profil'

const Company = () => {
	return (
		<div className="relative w-full min-h-screen pt-5 pb-5">
			<div className="flex justify-center md:justify-start max-w-[1200px] h-full mx-auto py-10 px-4 md:px-5 text-white">
				<div className="w-full md:w-[50%] lg:w-[40%] xl:w-[30%]">
					<Profil />
					<LeftBlock />
				</div>
			</div>
			<div className="absolute top-0 left-0 w-full h-full bg-black opacity-60 -z-10"></div>
			<img src="../company.webp" alt="" className="absolute top-0 left-0 w-full h-full -z-20" />
		</div>
	)
}

export default Company
