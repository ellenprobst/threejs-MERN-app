const express = require('express')
const mongoose = require('mongoose')
const uri = 'mongodb://localhost:27017/backgrounds'
const app = express()
const PORT = 8080

app.use('/users', require('./api/users'))
app.use('/items', require('./api/items'))

app.get('/healthcheck', (req, res) => {
	res.status(200).json({ message: 'succes' })
})

app.use((err, req, res, next) => {
	res.status(500).json({ err: err.toString() })
})

app.listen(PORT, async () => {
	await mongoose.connect(uri)
	console.log(`listening on port ${PORT}`)
})
