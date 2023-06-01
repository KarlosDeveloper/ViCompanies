import React, { useState } from 'react'
import { BsFillPencilFill } from 'react-icons/bs'
import Modal from './Modal'

const Note = ({ title, note }) => {
	const [isOpen, setIsOpen] = useState(false)
	return (
		<>
			{isOpen == true && <Modal type={title} state={isOpen} />}
			<div className="w-full h-auto flex flex-col items-center bg-stone-900 -z-20">
				<div className="w-full p-3 h-full">
					<h2 className="text-sm font-semibold">{title}</h2>
				</div>
				<div
					className={`relative w-full ${
						note == '' && 'flex justify-center items-center hover:text-blue-400'
					} min-h-[45px] max-h-[150px] p-3 bg-stone-800 hover:bg-stone-700 cursor-pointer duration-300`}
					onClick={() => setIsOpen(prev => !prev)}>
					{note != '' ? (
						<>
							<div className="absolute top-0 left-0 w-full h-full"></div>
							<textarea
								className="block w-full max-h-[120px] text-xs bg-transparent resize-none cursor-pointer"
								defaultValue={note}
							/>
						</>
					) : (
						<>
							<BsFillPencilFill className="mr-1 text-xs" />
							<button className="text-xs">Zamień</button>
						</>
					)}
				</div>
			</div>
		</>
	)
}

export default Note
