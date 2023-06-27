import React from 'react'

const Block = ({ top, left, type }) => {
	return (
		<div className={`absolute ${top} ${left} w-[200px] h-[100px]`}>
			{type == 1 && (
				<img
					src="https://d1fxy698ilbz6u.cloudfront.net/static/images/landscape/decorations/bases/concrete-0100.png"
					alt=""
				/>
			)}
			{type == 2 && (
				<img
					src="https://d1fxy698ilbz6u.cloudfront.net/static/images/landscape/decorations/bases/concrete-1000.png"
					alt=""
				/>
			)}
			{type == 3 && (
				<img
					src="https://d1fxy698ilbz6u.cloudfront.net/static/images/landscape/decorations/bases/concrete-1001.png"
					alt=""
				/>
			)}
			{type == 4 && (
				<img
					src="https://d1fxy698ilbz6u.cloudfront.net/static/images/landscape/decorations/bases/concrete-0011.png"
					alt=""
				/>
			)}
			{type == 5 && (
				<img
					src="https://d1fxy698ilbz6u.cloudfront.net/static/images/landscape/decorations/bases/concrete-0110.png"
					alt=""
				/>
			)}

			{/* <img
				src="https://d1fxy698ilbz6u.cloudfront.net/static/images/landscape/powerplant-lvl2.png"
				alt=""
				className="absolute -bottom-[60px] left-[0]"
			/> */}
		</div>
	)
}

export default Block
