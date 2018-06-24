const User = require('../models/user')

const users = []

const ellen = new User({
	name: 'ellen',
	password: 'myPassword'
})

users.push(ellen)

const jess = new User({
	name: 'jess',
	password: 'anotherPassword'
})

users.push(jess)

module.exports = users
