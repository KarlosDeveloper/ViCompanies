import react, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../../UserContext'
import { AiFillCopy, AiFillCheckCircle, AiFillEdit } from 'react-icons/ai'

const Profil = () => {
	const userCTX = useContext(UserContext)
	const { user } = userCTX
	const { image, name, companyLevel } = user

	const [copy, setCopy] = useState(false)

	return (
		<div className="w-full h-26 flex my-5">
			<div className="w-[30%] flex mr-2">
				<img src={image} alt="" className="w-full rounded-sm" />
			</div>
			<div className="w-3/4 flex flex-col justify-center">
				<p className="text-xl md:text-3xl font-semibold uppercase">{name}</p>
				<p className="text-lg md:text-xl font-medium text-gray-400">{companyLevel}</p>
				<div className="text-xs md:text-sm font-medium  text-blue-400 cursor-pointer uppercase">
					<div className="flex items-center hover:underline hover:text-blue-500 duration-300">
						{copy ? <AiFillCheckCircle className="mr-1" /> : <AiFillCopy className="mr-1" />}
						{copy ? (
							<a>skopiowano</a>
						) : (
							<a
								onClick={() => {
									navigator.clipboard.writeText(name)
									setCopy(true)
								}}>
								skopiuj do schowka
							</a>
						)}
					</div>
					<div className="hover:underline hover:text-blue-500 duration-300">
						<Link to={'options'} className="flex items-center">
							<AiFillEdit className="mr-1" />
							<p>Edytuj profil</p>
						</Link>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Profil
