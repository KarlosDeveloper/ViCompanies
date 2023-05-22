const User = require('../models/User')
const jwt = require('jsonwebtoken')

require('dotenv').config()

const getUser = async (req, res) => {
	const { token } = req.body
	try {
		jwt.verify(token, process.env.JWT_SECRET, {}, async (err, user) => {
			const email = user.email
			if (email != undefined) {
				const UserDoc = await User.findOne({ email })
				return res.json({ UserDoc })
			}
		})
	} catch {
		return res.json({ error: 'Bład' })
	}
}

module.exports = getUser
