import React from 'react'
import './HomePage.css'

const HomePage = () => {
	return (
		<div className="relative w-full h-screen flex justify-around items-center">
			<div className="w-1/4 text-white">
				<h1 className="text-6xl font-semibold">Rozwiń swój biznes</h1>
				<p className="mt-5 text-lg">Zbuduj własną firmę od podstaw. Zainteresowany?</p>

				<div className="w-full flex gap-5 mb-5 mt-8">
					<button className="btn bg-green-600 hover:bg-green-400">Zacznij grę</button>
					<button className="btn bg-white hover:bg-slate-300 text-black">Zaloguj się</button>
				</div>
				<p className=" font-light">
					ViCompanies to platforma, która oferuje darmową grę biznesową. Zdobądź wartościowe umiejętności biznesowe za
					darmo! Nasz zaawansowany model symulacji ekonomicznej zapewnia najlepsze wrażenia z gry.
				</p>
			</div>
			<div></div>
			<div className="absolute top-0 left-0 w-full h-full bg-black opacity-60 -z-10"></div>
			<img src="./Background.jpg" alt="" className="absolute top-0 left-0 w-full -z-20" />
		</div>
	)
}

export default HomePage
