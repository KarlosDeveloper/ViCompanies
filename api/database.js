const mongoose = require('mongoose')

// Connect from Database
module.exports = mongoose.connect(
	`mongodb+srv://${process.env.BASE_USERNAME}:${process.env.BASE_PASSWORD}@cluster0.zewz2yj.mongodb.net/`
)
