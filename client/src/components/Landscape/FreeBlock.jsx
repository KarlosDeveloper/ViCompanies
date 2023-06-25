import React from 'react'

const FreeBlock = ({ top, left }) => {
	return (
		<div className={`absolute ${top} ${left} w-[220px] h-[100px]`}>
			<img
				src="https://d1fxy698ilbz6u.cloudfront.net/static/images/landscape/decorations/bases/concrete-0100.png"
				alt=""
			/>
			<img
				src="https://d1fxy698ilbz6u.cloudfront.net/static/images/landscape/decorations/residential21.png"
				alt=""
				className="absolute -bottom-[60px] left-[0]"
			/>
		</div>
	)
}

export default FreeBlock
