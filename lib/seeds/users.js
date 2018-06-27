const User = require('../models/User')

const users = []

const ellen = new User({
	name: 'ellen',
	password: 'myPassword'
})

users.push(ellen)

const someone = new User({
	name: 'someone',
	password: 'anotherPassword'
})

users.push(someone)

module.exports = users
