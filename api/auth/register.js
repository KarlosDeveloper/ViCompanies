const bcrypt = require('bcryptjs')
const User = require('../models/User')
const Company = require('../models/Company')
const jwt = require('jsonwebtoken')

require('dotenv').config()
require('../database')

const salt = 10

const register = async (req, res) => {
	const { email, password } = req.body
	try {
		if (email != '' && password != '') {
			const Name = await User.find()
			const number = Name.length + 1
			const UserDoc = await User.create({
				email,
				password: bcrypt.hashSync(password, salt),
			})

			if (UserDoc) {
				const Rank = await Company.find()
				await Company.create({
					name: `Nowa Firma${number}`,
					image:
						'https://media.discordapp.net/attachments/769132843086381056/1110301241436815550/default-blue.png?width=256&height=256',
					money: 10000,
					level: 1,
					stars: 0,
					privateNote: '',
					publicNote: '',
					companyLevel: 'Kontrahent',
					country: 'n/a',
					rating: 'D',
					rank: Rank.length + 1,
					companiesValue: 0,
					buildingsValue: 0,
					boss: UserDoc._id,
				})
				const token = jwt.sign(
					{
						id: UserDoc._id,
						email: UserDoc.email,
					},
					process.env.JWT_SECRET
				)
				return res.json({ status: 'OK', message: 'Konto zostało utworzone', token })
			}
		} else {
			return res.json({ status: 'error', error: 'Pola muszą być uzupełnione' })
		}
	} catch {
		return res.json({ status: 'error', error: 'Spróbuj pozniej' })
	}
}

module.exports = register
