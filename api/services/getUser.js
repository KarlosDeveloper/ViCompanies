const Company = require('../models/Company')
const jwt = require('jsonwebtoken')

require('dotenv').config()

const getUser = async (req, res) => {
	const { token } = req.body
	try {
		jwt.verify(token, process.env.JWT_SECRET, {}, async (err, user) => {
			const id = user.id
			if (id != undefined) {
				const CompanyDoc = await Company.findOne({ boss: id })
				return res.json({ CompanyDoc })
			}
		})
	} catch {
		return res.json({ error: 'Bład' })
	}
}

module.exports = getUser
