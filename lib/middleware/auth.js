const token = require('../tokenService')
const secret = process.env.secret || require('../config.json').secret

module.exports = async (req, res, next) => {
	const authHeader = req.get('authorization')

	if (!authHeader) {
		next(new Error('unauthorized'))
	}

	const _token = authHeader.split(' ')[1]
	try {
		const decoded = await token.verify(_token, secret)
		req.token = decoded
		next()
	} catch (e) {
		next(e)
	}
}
