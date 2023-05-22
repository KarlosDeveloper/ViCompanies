const mongoose = require('mongoose')

const { Schema, model } = mongoose
const userSchema = new Schema(
	{
		email: { type: String, required: true, unique: true },
		password: { type: String, required: true },
		nick: String,
		image: String,
		money: Number,
		level: Number,
		stars: Number,
	},
	{
		timestamps: true,
	}
)

const UserModel = model('User', userSchema)

module.exports = UserModel
