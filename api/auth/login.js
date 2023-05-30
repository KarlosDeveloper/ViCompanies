const bcrypt = require('bcryptjs')
const User = require('../models/User')
const jwt = require('jsonwebtoken')

require('dotenv').config()
require('../database')
const salt = 10

const login = async (req, res) => {
	const { email, password } = req.body
	try {
		if (email != '' && password != '') {
			const UserDoc = await User.findOne({ email })

			if (!UserDoc) {
				return res.json({ error: 'Nie znaleźiono użytkownika' })
			}

			if (bcrypt.compareSync(password, UserDoc.password)) {
				const token = jwt.sign(
					{
						id: UserDoc._id,
						email: UserDoc.email,
					},
					process.env.JWT_SECRET
				)
				return res.json({ status: 'OK', message: 'Pomyślnie zalogowano', token, UserDoc })
			} else {
				return res.json({ status: 'error', error: 'Hasło lub email jest niepoprawne' })
			}
		} else {
			return res.json({ status: 'error', error: 'Pola muszą być uzupełnione' })
		}
	} catch {
		return res.json({ status: 'error', error: 'Spróbuj poźniej' })
	}
}

module.exports = login
