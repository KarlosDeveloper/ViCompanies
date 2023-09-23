import React, { useState } from 'react'
import { BsFillPencilFill } from 'react-icons/bs'
import Modal from './Modal'

const Note = ({ title, note }) => {
	const [isOpen, setIsOpen] = useState(false)
	const modal = () => {
		setInterval(function () {
			setIsOpen(true)
		}, 0)
		setIsOpen(false)
	}
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
					} h-[70px] bg-stone-800 hover:bg-stone-700 cursor-pointer duration-300`}
					onClick={modal}>
					{note != '' ? (
						<>
							<textarea
								className="w-full h-full px-3 py-2 text-xs bg-transparent cursor-pointer resize-none"
								defaultValue={note}
								onResize={false}
							/>
							<div className="absolute top-0 left-0 w-full h-full"></div>
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
