const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const path = require('path')
const app = express()
const config = require('config')

const PORT = process.env.PORT || config.PORT
const MONGODB_URI = process.env.MONGODB_URI || config.MONGODB_URI

app.use(bodyParser.json())

app.use('/users', require('./api/users'))
app.use('/items', require('./api/items'))
app.use('/auth', require('./api/auth'))

app.get('/healthcheck', (req, res) => {
	res.status(200).json({ message: 'succes' })
})

app.use((err, req, res, next) => {
	res.status(500).json({ err: err.toString() })
})

app.use('/', express.static(path.join(__dirname, '../build')))
app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, '../build/index.html'))
})

console.log(MONGODB_URI)
app.listen(PORT, async () => {
	await mongoose.connect(MONGODB_URI)
	console.log(`listening on port ${PORT}`)
})
