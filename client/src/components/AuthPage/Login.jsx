import React, { useState } from 'react'
import Input from './Input'
import Button from './Button'

const Login = () => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	return (
		<div className="w-auto h-auto flex flex-col justify-center items-center">
			<form method="POST" className="flex flex-col items-center gap-5 text-white">
				<div className="flex justify-center text-3xl mb-10">
					<h2 className="uppercase">Logowanie</h2>
				</div>
				<Input
					type={'email'}
					placeholder={'vicompanies@vicompanies.pl'}
					text={'Email'}
					value={email}
					onChange={e => setEmail(e.target.value)}
				/>
				<Input type={'password'} text={'Hasło'} value={password} onChange={e => setPassword(e.target.value)} />
				<Button text={'Zaloguj'} />
			</form>
		</div>
	)
}

export default Login
