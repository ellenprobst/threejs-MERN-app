const jwt = require('jsonwebtoken')
const secret = process.env.secret || require('./config.json').secret

const create = user => {
	const { _id } = user

	const payload = {
		user: {
			id: _id
		}
	}

	return jwt.sign(payload, secret)
}

const verify = token => jwt.verify(token, secret)

module.exports = { create, verify }
