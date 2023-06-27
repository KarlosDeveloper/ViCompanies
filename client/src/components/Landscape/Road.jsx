import React from 'react'

const Road = ({ top, left, type }) => {
	return (
		<div className={`absolute ${top} ${left} w-[200px]`}>
			{type == 1 && (
				<>
					<img
						src="https://d1fxy698ilbz6u.cloudfront.net/static/images/landscape/decorations/roads/road-01.png"
						alt=""
					/>
				</>
			)}
			{type == 2 && (
				<>
					<img
						src="https://d1fxy698ilbz6u.cloudfront.net/static/images/landscape/decorations/roads/road-left-00.png"
						alt=""
					/>
				</>
			)}
		</div>
	)
}

export default Road
