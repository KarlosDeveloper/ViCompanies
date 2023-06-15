import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Login, Register } from '../components'
import { AiOutlineCloseCircle } from 'react-icons/ai'

const Auth = () => {
	const [variant, setVariant] = useState('login')
	return (
		<div className="relative w-full h-screen flex items-center justify-center">
			<Link to={'/'}>
				<AiOutlineCloseCircle className="absolute top-[3%] right-[5%] md:right-[3%] lg:right-[2%] text-white text-4xl md:text-5xl" />
			</Link>
			<div className="w-[400px] h-auto py-12 rounded-xl bg-black bg-opacity-70">
				{variant == 'register' ? <Register /> : <Login />}
				<p
					onClick={() => setVariant(variant == 'register' ? 'login' : 'register')}
					className="text-white mt-6 ml-6 underline cursor-pointer">
					{variant == 'register' ? 'Posiadasz już konto?' : 'Nie masz jeszcze konta?'}
				</p>
			</div>
			<div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 -z-10"></div>
			<img src="auth.webp" alt="" className="absolute top-0 left-0 w-full h-full -z-20" />
		</div>
	)
}

export default Auth
