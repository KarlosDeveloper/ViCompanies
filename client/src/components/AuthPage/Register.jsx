import React, { useState } from 'react'
import Input from './Input'
import Button from './Button'

import { toast } from 'react-toastify'
import { DATABASE_URL } from '../../../env'
import { Navigate } from 'react-router-dom'

const Register = () => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [rePassword, setRePassword] = useState('')
	const [redirect, setRedirect] = useState(false)

	const registerUser = async e => {
		e.preventDefault()

		if (password === rePassword) {
			const res = await fetch(`${DATABASE_URL}/register`, {
				method: 'POST',
				body: JSON.stringify({ email, password }),
				headers: { 'Content-Type': 'application/json' },
			})
			res.json().then(data => {
				if (data.status == 'OK') {
					toast(data.message, {
						type: 'success',
					})
					window.localStorage.setItem('token', data.token)
					setRedirect(true)
				} else {
					toast(data.error, {
						type: 'error',
					})
				}
			})
		} else {
			toast('Hasła nie zgadzają sie', {
				type: 'error',
			})
		}
	}
	if (redirect) {
		return <Navigate to={'/landscape'} />
	}
	return (
		<div className="w-auto h-auto flex flex-col justify-center items-center">
			<form method="POST" className="flex flex-col items-center gap-5 text-white">
				<div className="flex justify-center text-3xl mb-10">
					<h2 className="uppercase">Rejestracja</h2>
				</div>
				<Input
					type={'email'}
					placeholder={'vicompanies@vicompanies.pl'}
					text={'Email'}
					value={email}
					onChange={e => setEmail(e.target.value)}
				/>
				<Input type={'password'} text={'Hasło'} value={password} onChange={e => setPassword(e.target.value)} />
				<Input
					type={'password'}
					text={'Powtórz Hasło'}
					value={rePassword}
					onChange={e => setRePassword(e.target.value)}
				/>
				<Button text={'Zarejestruj'} onClick={registerUser} />
			</form>
		</div>
	)
}

export default Register
