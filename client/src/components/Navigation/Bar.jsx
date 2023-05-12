import React from 'react'
import { Link } from 'react-router-dom'
const Bar = ({ width, color, text }) => {
	return (
		<Link>
			<div className={`w-full h-5 flex justify-center rounded-lg font-medium text-sm text-white ${color}`}>{text}</div>
		</Link>
	)
}

export default Bar
