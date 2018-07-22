const User = require('../models/User')

const findUserById = async (req, res, next) => {
	const { id } = req.token.user
	console.log(req.token)
	try {
		const doc = await User.findById(id)
		if (!doc) {
			next(new Error('not found'))
		}
		req.user = doc
		next()
	} catch (e) {
		next(new Error(e))
	}
}

const findUserByEmail = async (req, res, next) => {}
module.exports = { findUserById, findUserByEmail }
