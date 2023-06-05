import react, { useContext, useState } from 'react'
import { UserContext } from '../../UserContext'
import Block from './Block'
import Profil from './Profil'
import Note from './Note'

const LeftBlock = () => {
	const userCTX = useContext(UserContext)
	const { user } = userCTX
	const { privateNote, publicNote, rank, rating, createdAt, companiesValue, buildingsValue, country } = user

	const date = new Date(createdAt)
	const formattedDateTime = date.toLocaleString('pl-PL', {
		day: '2-digit',
		month: '2-digit',
		year: 'numeric',
	})

	return (
		<div className="w-full h-full rounded-md overflow-hidden">
			<Note title={`Prywatne notatki`} note={privateNote} />
			<Block
				title={'Informacje'}
				privateNote={privateNote}
				title1={'Ranking'}
				title2={'Ocena'}
				title3={'Kraj lub region'}
				title4={'Data założenia'}
				title5={'Tagi wyszukiwania'}
				option1={`#${rank}`}
				option2={rating}
				option3={country}
				option4={formattedDateTime}
				option5={'tag'}
			/>
			<Note title={`Opis firmy`} note={publicNote} />
			<Block
				title={'Wycena'}
				privateNote={privateNote}
				title1={'Wartość przedsiębiorstwa'}
				title2={'Wartość budynków'}
				option1={`$${companiesValue}`}
				option2={`$${buildingsValue}`}
			/>
		</div>
	)
}

export default LeftBlock
