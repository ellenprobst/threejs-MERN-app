const express = require('express')
const app = express()
const PORT = 8080

app.get('/healthcheck', (req, res) => {
	res.status(200).json({ message: 'succes' })
})

app.listen(PORT, () => {
	console.log(`listening on port ${PORT}`)
})
