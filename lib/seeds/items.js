const { Item, Input } = require('../models/Item')
const users = require('./users')

const items = []

const itemOne = new Item({
	title: 'myTitle',
	image: 'http://www.image.com',
	user: users[0]
})

const inputOne = new Input({
	size: 3,
	geometry: 'sphere',
	colour: 'green',
	isAnimated: true,
	hasChildren: false,
	isWireframe: false
})

itemOne.inputs.push(inputOne)

items.push(itemOne)

const itemTwo = new Item({
	title: 'another great Title',
	image: 'http://www.another-image.com',
	user: users[1]
})

const inputTwo = new Input({
	size: 5,
	geometry: 'cube',
	colour: 'yellow',
	isAnimated: true,
	hasChildren: true,
	isWireframe: true
})

itemTwo.inputs.push(inputTwo)
items.push(itemTwo)

module.exports = items
