import react, { useContext, useState } from 'react'
import { UserContext } from '../../UserContext'
import { RxCross2 } from 'react-icons/rx'

const Modal = ({ type, state }) => {
	const userCTX = useContext(UserContext)
	const { user } = userCTX
	const { privateNote, publicNote } = user
	const [isOpen, setIsOpen] = useState(state)
	return (
		<>
			{isOpen && (
				<div className="w-full h-full">
					<div className="absolute w-full h-full top-0 left-0 bg-black opacity-50"></div>
					<div className="absolute top-10 left-[35%] w-[30%] min-h-[300px] max-h-[500px] flex flex-col rounded-md bg-zinc-900 border-2 border-stone-800">
						<div className="relative w-full h-7 items-center flex justify-center bg-zinc-800">
							<p>{type}</p>
							<RxCross2
								className="absolute top-[5px] right-2 text-lg cursor-pointer"
								onClick={() => setIsOpen(false)}
							/>
						</div>
						<div className="h-full p-5">
							<textarea
								className="w-full min-h-[220px] max-h-[400px] px-5 py-2 text-sm rounded bg-transparent border border-stone-800 focus:outline-none outline-none focus:border-stone-600"
								value={type == 'Prywatne notatki' ? privateNote : publicNote}
							/>
						</div>
						<div className="w-full flex justify-center pb-5">
							<button className="px-3 py-2 rounded bg-green-600 hover:green-400">Zmień</button>
						</div>
					</div>
				</div>
			)}
		</>
	)
}

export default Modal
