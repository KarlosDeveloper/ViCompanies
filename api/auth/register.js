const bcrypt = require('bcryptjs')
const User = require('../models/User')

require('dotenv').config()
require('../mongoose')

// Register
const register = async (req, res) => {
	const { email, password, nick } = req.body
	try {
		if (email != '' && password != '') {
			const UserDoc = await User.create({
				email,
				password: bcrypt.hashSync(password, process.env.BCRYPT_SALT),
				nick,
				image: '',
				money: 10000,
				level: 1,
			})

			if (UserDoc) {
				return res.json({ status: 'OK', message: 'Konto zostało utworzone' })
			}
		} else {
			return res.json({ status: 'error', error: 'Pola muszą być uzupełnione' })
		}
	} catch (error) {
		return res.json({ status: 'error', error: 'Posiadasz już konto' })
	}
}

module.exports = register
