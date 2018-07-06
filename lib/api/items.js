const express = require('express')
const mongoose = require('mongoose')
const { Item, Input } = require('../models/Item')
const Router = express.Router
const router = Router()
const PORT = 8080
const uri = 'mongodb://localhost:27017/backgrounds'

mongoose.connect(uri)

router.get('/', async (req, res, next) => {
	try {
		const docs = await Item.find()
		res.status(200).send(docs)
	} catch (e) {
		next(e)
	}
})

router.get('/:item_id', async (req, res, next) => {
	try {
		const item_id = req.params.item_id
		const docs = await Item.findById(item_id)
		res.status(200).send(docs)
	} catch (e) {
		next(e)
	}
})

router.post('/', (req, res) => {
	const data = req.body
	const item = new Item({ title: data.title, image: data.image, user: data.user })

	const input = new Input({
		size: data.size,
		geometry: data.geometry,
		colour: data.color,
		isAnimated: data.isAnimated,
		hasChildren: data.hasChildren,
		isWireframe: data.isWireframe
	})

	item.inputs.push(input)
	item
		.save()
		.then(doc => {
			res.status(201).json({ item: doc })
		})
		.catch(err => {
			res.status(500).json({ message: err.message })
		})
})

module.exports = router
