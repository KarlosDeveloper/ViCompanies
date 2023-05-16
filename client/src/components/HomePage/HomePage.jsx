import React from 'react'
import { Link } from 'react-router-dom'
import './HomePage.css'

const HomePage = () => {
	return (
		<div className="relative w-full h-screen flex justify-around items-center">
			<div className="w-1/2 xl:w-1/4 text-white">
				<h1 className="text-6xl font-semibold text-shadow shadow-black">Rozwiń swój biznes</h1>
				<p className="mt-5 text-lg">Zbuduj własną firmę od podstaw. Zainteresowany?</p>

				<div className="w-full flex gap-5 mb-5 mt-8">
					<Link to={'/auth'} className="w-full">
						<button className="btn bg-green-600 hover:bg-green-400">Zacznij grę</button>
					</Link>
					<Link to={''} className="w-full">
						<button className="btn bg-white hover:bg-slate-300 text-black"> Dowiedz się więcej</button>
					</Link>
				</div>
				<p className=" font-light">
					ViCompanies to platforma, która oferuje darmową grę biznesową. Zdobądź wartościowe umiejętności biznesowe za
					darmo! Nasz zaawansowany model symulacji ekonomicznej zapewnia najlepsze wrażenia z gry.
				</p>
			</div>
			<div></div>
			<div className="absolute top-0 left-0 w-full h-full bg-black opacity-40 -z-10"></div>
			<img src="./Background.jpg" alt="" className="absolute h-full object-cover top-0 left-0 w-full -z-20" />
		</div>
	)
}

export default HomePage
