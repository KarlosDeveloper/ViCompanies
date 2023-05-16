import React from 'react'

const Button = ({ text, onClick }) => {
	return (
		<>
			<button onClick={onClick} className="btn w-3/4 p-2 bg-green-600 hover:bg-green-400">
				{text}
			</button>
		</>
	)
}

export default Button
