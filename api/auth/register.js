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
					image: 'https://d1fxy698ilbz6u.cloudfront.net/logo/55cd7d09519bd6cf5436697c62fc4a54d84e09e5.png',
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
						password: UserDoc.password,
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
