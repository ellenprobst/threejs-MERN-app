const token = require('../tokenService')
const config = require('../config.json')

module.exports = async (req, res, next) => {
	const authHeader = req.get('authorization')

	if (!authHeader) {
		next(new Error('unauthorized'))
	}

	const _token = authHeader.split(' ')[1]
	try {
		const decoded = await token.verify(_token, config.secret)
		req.token = decoded
		next()
	} catch (e) {
		next(e)
	}
}
