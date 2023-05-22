import { useContext } from 'react'
import { UserContext } from '../../UserContext'
import Bar from './Bar'
import { Link } from 'react-router-dom'

const splitNumber = number => {
	var numberString = number.toString()
	var numberArray = numberString.split('')

	numberArray.reverse()

	var splitArray = []

	for (var i = 0; i < numberArray.length; i += 3) {
		var chunk = numberArray.slice(i, i + 3)
		var chunkString = chunk.reverse().join('')
		splitArray.push(chunkString)
	}

	splitArray.reverse()

	var result = splitArray.join(' ')

	return result
}

const UserStats = () => {
	const userCTX = useContext(UserContext)
	const { user } = userCTX
	const { money, level, stars, _id, image } = user
	const test = splitNumber(money)
	return (
		<div className="w-full h-full flex items-center gap-2">
			<div className="w-52 grid gap-1">
				<Bar color={'bg-[#7AA615]'} text={test} />
				<div className="grid grid-cols-2 gap-1">
					<Bar color={'bg-[#89B2D0]'} text={stars} />
					<Bar color={'bg-[#B159CE]'} text={level} />
				</div>
			</div>
			<Link to={`company/:${_id}`} className="h-full flex items-center">
				<img src={image} alt="" className="h-[85%] rounded-sm" />
			</Link>
		</div>
	)
}

export default UserStats
