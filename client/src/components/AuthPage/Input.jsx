import React from 'react'
import './AuthPage.css'

const Input = ({ type, placeholder, text, value, onChange }) => {
	return (
		<div className="flex flex-col gap-1">
			<label>{text}</label>
			<input type={type} placeholder={placeholder} className="inputs" value={value} onChange={onChange} />
		</div>
	)
}

export default Input
