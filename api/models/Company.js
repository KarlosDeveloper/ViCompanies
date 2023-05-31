const mongoose = require('mongoose')

const { Schema, model } = mongoose
const companySchema = new Schema(
	{
		name: { type: String, required: true, unique: true },
		image: String,
		money: Number,
		level: Number,
		stars: Number,
		privateNote: String,
		publicNote: String,
		companyLevel: String,
		country: String,
		rating: String,
		rank: Number,
		companiesValue: Number,
		buildingsValue: Number,
		boss: { type: Schema.Types.ObjectId, ref: 'Users' },
	},
	{
		timestamps: true,
	}
)

const CompanyModel = model('Company', companySchema)

module.exports = CompanyModel
