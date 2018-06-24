const User = require('../models/user')
const Item = require('../models/item')

const users = require('./users')
const items = require('./items')

const mongoose = require('mongoose')
const uri = 'mongodb://localhost:27017/backgrounds'

const truncateDatabase = async () => {
	return Promise.all([User.deleteMany(), Item.deleteMany()])
}

const makeSeeds = async () => {
	await mongoose.connect(uri)
	await truncateDatabase()
	await Promise.all(users.map(user => user.save()))
	await Promise.all(items.map(item => item.save()))
	mongoose.connection.close()
}

makeSeeds()
