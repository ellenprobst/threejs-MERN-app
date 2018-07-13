const express = require('express')
const mongoose = require('mongoose')
const { Item, Input } = require('../models/Item')
const Router = express.Router
const router = Router()
const PORT = 8080
const uri = 'mongodb://localhost:27017/backgrounds'

mongoose.connect(uri)

// GET /items?user_id=dsfj13efew

router.get('/', async (req, res, next) => {
	try {
		const { user_id } = req.query
		const docs = await Item.find({ user: user_id })
		res.status(200).send(docs)
	} catch (e) {
		next(e)
	}
})

router.get('/all', async (req, res, next) => {
	try {
		const docs = await Item.find()
		res.status(200).send(docs)
	} catch (e) {
		next(e)
	}
})

router.post('/', async (req, res) => {
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

	try {
		const doc = await item.save()
		res.status(201).json({ item: doc })
	} catch (e) {
		next(e)
	}
})

router.get('/:item_id', async (req, res, next) => {
	try {
		const { item_id } = req.params
		const docs = await Item.findById(item_id)
		res.status(200).send(docs)
	} catch (e) {
		next(e)
	}
})

// router.patch('/:item_id', async (req, res, next) => {
// 	const { item_id } = req.params
// 	try {
// 		const doc = await Item.findByIdAndUpdate(item_id, { completed: true })
// 		res.status(200).send({ doc })
// 	} catch (e) {
// 		next(e)
// 	}
// })

router.delete('/:item_id', async (req, res, next) => {
	try {
		const item_id = req.params.item_id
		const doc = await Item.findByIdAndRemove(item_id)
		res.status(200).send({ doc })
	} catch (e) {
		next(e)
	}
})

module.exports = router
