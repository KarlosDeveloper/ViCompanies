import React, { useState } from 'react'
import { Link } from 'react-router-dom'
const Bar = ({ color, text, visible }) => {
	return (
		<Link>
			<div className={`w-full h-5 flex justify-center rounded-lg font-medium text-sm text-white ${color}`}>
				{visible && <img src="https://d1fxy698ilbz6u.cloudfront.net/static/images/sim-boosts2.png" alt="" />}
				{text}
			</div>
		</Link>
	)
}

export default Bar
