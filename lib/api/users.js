const fs = require('fs')
console.log(fs.readdirSync('.'))

const express = require('express')
const Router = express.Router
const router = Router()
const User = require('../models/User')
const auth = require('../middleware/auth')
const { findUserById } = require('../middleware/user')

router.get('/', async (req, res, next) => {
	try {
		const docs = await User.find()
		res.status(200).send(docs)
	} catch (e) {
		next(e)
	}
})

router.get('/current', auth, findUserById, async (req, res, next) => {
	try {
		res.status(200).send({ user: req.user })
	} catch (e) {
		next(e)
	}
})

module.exports = router
