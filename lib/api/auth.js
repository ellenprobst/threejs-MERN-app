const express = require('express')
const Router = express.Router
const router = Router()
const tokenService = require('../tokenService')

const auth = require('../middleware/auth')
const { findUserById } = require('../middleware/user')

const User = require('../models/User')

router.post('/signup', async (req, res, next) => {
	const { email, password } = req.body

	const user = new User({ email, password })
	console.log(user)
	try {
		const doc = await user.save()
		res.status(200).send(doc)
	} catch (e) {
		next(e)
	}
})

router.post('/login', async (req, res, next) => {
	const { email, password } = req.body
	console.log(email)
	try {
		const user = await User.findOne({ email })
		if (user) {
			const match = await user.comparePassword(password)

			if (match) {
				const token = tokenService.create(user)
				res.status(200).json({ message: 'success', payload: token })
			} else {
				res.status(400).json({ message: 'unauthorized', payload: match })
			}
		} else {
			throw new Error('not found')
		}
	} catch (e) {
		next(e)
	}
})

module.exports = router
