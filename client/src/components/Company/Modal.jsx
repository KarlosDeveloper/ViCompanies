import react, { useContext, useState } from 'react'
import { UserContext } from '../../UserContext'
import { RxCross2 } from 'react-icons/rx'

const Modal = ({ type, state }) => {
	const token = window.localStorage.getItem('token')
	const userCTX = useContext(UserContext)
	const { user } = userCTX
	const { privateNote, publicNote } = user
	const [isOpen, setIsOpen] = useState(state)
	const [privNote, setPrivNote] = useState(privateNote || 'Wpisz treść')
	const [pubNote, setPubNote] = useState(publicNote || 'Wpisz treść')
	const [note, setNote] = useState('')

	const put = async types => {
		// 1 - Private note
		// 2- Public note
		const type = types == 'Prywatne notatki' ? 1 : 2

		setIsOpen(false)
		if (note != '') {
			window.location.reload(false)
			const res = await fetch(`${import.meta.env.VITE_DATABASE_URL}/putNote`, {
				method: 'PUT',
				body: JSON.stringify({ type, token, note }),
				headers: { 'Content-Type': 'application/json' },
			})
		}
	}
	return (
		<>
			{isOpen && (
				<div>
					<div className="absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-3/4  w-[95%]  md:w-[30%] min-h-[300px] max-h-[500px] flex flex-col rounded-md bg-zinc-900 border-2 border-stone-800 z-10">
						<div className="relative w-full h-7 items-center flex justify-center bg-zinc-800">
							<p>{type}</p>
							<RxCross2
								className="absolute top-[5px] right-2 text-lg cursor-pointer"
								onClick={() => setIsOpen(false)}
							/>
						</div>
						<div className="h-full p-5">
							<textarea
								className="w-full min-h-[220px] max-h-[400px] px-5 py-2 text-sm rounded bg-transparent border border-stone-800 focus:outline-none outline-none focus:border-stone-600 overflow-hidden"
								defaultValue={type == 'Prywatne notatki' ? privNote : pubNote}
								onChange={e => setNote(e.target.value)}
							/>
						</div>
						<div className="w-full flex justify-center pb-5">
							<button className="px-3 py-2 rounded bg-green-600 hover:green-400" onClick={() => put(type)}>
								Zmień
							</button>
						</div>
					</div>
				</div>
			)}
		</>
	)
}

export default Modal
