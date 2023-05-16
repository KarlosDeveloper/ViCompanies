const bcrypt = require('bcryptjs')
const User = require('../models/User')
const jwt = require('jsonwebtoken')

require('dotenv').config()
require('../database')

const salt = 10

// Register
const register = async (req, res) => {
	const { email, password } = req.body
	try {
		if (email != '' && password != '') {
			const UserDoc = await User.create({
				email,
				password: bcrypt.hashSync(password, salt),
				nick: 'Nowy użytkownik',
				image: '',
				money: 10000,
				level: 1,
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
	} catch (error) {
		return res.json({ status: 'error', error: 'Spróbuj pozniej' })
	}
}

module.exports = register
