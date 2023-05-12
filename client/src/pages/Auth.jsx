import React, { useState } from 'react'

const Auth = () => {
	const [email, setEmail] = useState('')
	const [nick, setNick] = useState('')
	const [password, setPassword] = useState('')

	const register = async e => {
		e.preventDefault()

		const res = await fetch('http://localhost:4000/register', {
			method: 'POST',
			body: JSON.stringify({ email, password, nick }),
			headers: { 'Content-Type': 'application/json' },
		})
		res.json().then(data => {
			if (data.status == 'OK') {
				console.log(data.message)
			} else {
				console.log(data.error)
			}
		})
	}
	return (
		<div className="w-full h-screen flex justify-center items-center bg-[#3d3d3d]">
			<form method="post" className="flex flex-col gap-5">
				<input type="text" value={email} onChange={e => setEmail(e.target.value)} />
				<input type="text" value={nick} onChange={e => setNick(e.target.value)} />
				<input type="password" value={password} onChange={e => setPassword(e.target.value)} />
				<button onClick={register}>Wyslij</button>
			</form>
		</div>
	)
}

export default Auth
