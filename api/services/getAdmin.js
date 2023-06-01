const User = require('../models/User')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

require('dotenv').config()

const getUser = async (req, res) => {
	const { token } = req.body
	try {
		jwt.verify(token, process.env.JWT_SECRET, {}, async (err, user) => {
			const password = user.password

			if (password != undefined) {
				if (process.env.BCRYPT_HASH == password) {
					return res.json({ status: 'OK' })
				} else {
					return res.json({ error: 403 })
				}
			}
		})
	} catch (error) {
		return res.json({ error })
	}
}

module.exports = getUser
