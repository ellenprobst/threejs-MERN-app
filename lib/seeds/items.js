const Item = require('../models/item')
const users = require('./users')

const items = []

const itemOne = new Item({
	size: 3,
	geometry: 'sphere',
	colour: 'green',
	title: 'myTitle',
	isAnimated: true,
	hasChildren: false,
	isWireframe: false,
	user: users[0]
})

items.push(itemOne)

const itemTwo = new Item({
	size: 2,
	geometry: 'cube',
	colour: 'yellow',
	title: 'anotherTitle',
	isAnimated: true,
	hasChildren: true,
	isWireframe: true,
	user: users[1]
})

items.push(itemTwo)

module.exports = items
