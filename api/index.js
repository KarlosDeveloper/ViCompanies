const express = require('express')
const cors = require('cors')

// Auth
const register = require('./auth/register')
const login = require('./auth/login')
// Company Profil
const putNote = require('./services/putNote')
// Other
const getUser = require('./services/getUser')
const getAdmin = require('./services/getAdmin')
const rankUpdate = require('./services/rankUpdate')

const app = express()
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use((req, res, next) => {
	// res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173')
	res.setHeader('Access-Control-Allow-Origin', 'https://vicompanies.netlify.app')
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE')
	res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization')
	res.setHeader('cache-control', 'no-cache')
	next()
})
app.use(
	cors({
		credentials: true,
		// origin: 'http://localhost:5173',
		origin: 'https://vicompanies.netlify.app',
	})
)

app.post('/register', register)
app.post('/login', login)
app.put('/putNote', putNote)
app.post('/getUser', getUser)
app.post('/getAdmin', getAdmin)

// rankUpdate()

app.listen(4000, () => {
	console.log('Server running')
})
