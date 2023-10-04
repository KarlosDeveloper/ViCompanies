const Company = require('../models/Company')
const jwt = require('jsonwebtoken')

require('dotenv').config()

const putNote = async (req, res) => {
	const { token, type, note } = req.body
	try {
		jwt.verify(token, process.env.JWT_SECRET, {}, async (err, user) => {
			const id = user.id
			if (id != undefined) {
				if (type == 1) {
					const CompanyDoc = await Company.findOneAndUpdate({ boss: id }, { privateNote: note })
				}
				if (type == 2) {
					const CompanyDoc = await Company.findOneAndUpdate({ boss: id }, { publicNote: note })
				}
			}
		})
	} catch {
		return res.json({ error: 'Bład' })
	}
}

module.exports = putNote
