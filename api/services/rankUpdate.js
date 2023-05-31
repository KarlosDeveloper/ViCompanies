const Company = require('../models/Company')

const rank = async (req, res) => {
	const Rank = await Company.find()
	const countRank = Rank.length
	const allCompanyValue = []

	for (let i = 0; i < countRank; i++) {
		let oneCompanyValue = Rank[i].companiesValue
		let oneCompanyId = Rank[i].id
		allCompanyValue.push({ oneCompanyId, oneCompanyValue })
	}
	allCompanyValue
	console.log(allCompanyValue)

	// for (let i = 0; i < coutRank; i++) {
	// 	let id = allCompanyValue[i].oneCompanyId
	// 	let numberRank = i + 1
	// 	let company = await Company.findOne({ _id: id })

	// 	company.updateOne({
	// 		rank: numberRank,
	// 	})
	// 	console.log(company)
	// }
}
module.exports = rank
