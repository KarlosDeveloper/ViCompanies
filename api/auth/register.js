const bcrypt = require('bcryptjs')
const User = require('../models/User')
const jwt = require('jsonwebtoken')

require('dotenv').config()
require('../database')

const salt = 10

const register = async (req, res) => {
	const { email, password } = req.body
	try {
		if (email != '' && password != '') {
			const UserDoc = await User.create({
				email,
				password: bcrypt.hashSync(password, salt),
				nick: 'Nowy użytkownik',
				image:
					'https://media.discordapp.net/attachments/769132843086381056/1110301241436815550/default-blue.png?width=256&height=256',
				money: 10000,
				level: 1,
				stars: 0,
			})

			if (UserDoc) {
				const token = jwt.sign(
					{
						id: UserDoc._id,
						email: UserDoc.email,
						nick: UserDoc.nick,
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
