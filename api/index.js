const express = require('express')
const cors = require('cors')
const jwt = require('jsonwebtoken')

const register = require('./auth/register')

const app = express()
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use((req, res, next) => {
	res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173')
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE')
	res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization')
	res.setHeader('cache-control', 'no-cache')
	next()
})
app.use(
	cors({
		credentials: true,
		origin: 'http://localhost:5173',
	})
)

app.post('/register', register)

app.listen(4000, () => {
	console.log('Server running')
})
