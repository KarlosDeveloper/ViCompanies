import React, { useState } from 'react'

const Block = ({ title, option1, option2, option3, option4, option5, title1, title2, title3, title4, title5 }) => {
	return (
		<>
			<div className="w-full h-auto flex flex-col items-center bg-stone-900">
				<div className="flex flex-col justify-center items-center p-3 text-xs md:text-sm">
					<h2 className=" mb-5 text-sm md:text-base font-semibold">{title}</h2>
					<div className="flex">
						<div className="text-left">
							<h3>{title1}</h3>
							<h3>{title2}</h3>
							<h3>{title3}</h3>
							<h3>{title4}</h3>
							<h3>{title5}</h3>
						</div>
						<div className="w-[3px] mx-2 bg-stone-400 rounded-sm"></div>
						<div>
							<h3>{option1}</h3>
							<h3>{option2}</h3>
							<h3>{option3}</h3>
							<h3>{option4}</h3>
							<h3>{option5}</h3>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default Block
