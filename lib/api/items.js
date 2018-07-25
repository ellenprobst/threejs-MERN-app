const express = require('express')
const Item = require('../models/Item')
const Router = express.Router
const router = Router()

const auth = require('../middleware/auth')

// Get items by user id
router.get('/', auth, async (req, res, next) => {
	try {
		const { id } = req.token.user
		const docs = await Item.find({ user: id })
		res.status(200).send(docs)
	} catch (e) {
		next(e)
	}
})

// Get all items in db
router.get('/all', async (req, res, next) => {
	try {
		const docs = await Item.find()
		res.status(200).send(docs)
	} catch (e) {
		next(e)
	}
})

// Post item
router.post('/', auth, async (req, res, next) => {
	const { id } = req.token.user
	const inputs = req.body
	inputs.user = id
	const item = new Item(inputs)
	try {
		const doc = await item.save()
		res.status(201).json({ item: doc })
	} catch (e) {
		next(e)
	}
})

// Get item by item id
router.get('/:item_id', auth, async (req, res, next) => {
	try {
		const { item_id } = req.params
		const docs = await Item.findById(item_id)
		res.status(200).send(docs)
	} catch (e) {
		next(e)
	}
})

router.patch('/:item_id', auth, async (req, res, next) => {
	const { item_id } = req.params
	const inputs = req.body

	try {
		const doc = await Item.findByIdAndUpdate(item_id, inputs)
		res.status(200).send({ doc })
	} catch (e) {
		next(e)
	}
})

router.delete('/:item_id', auth, async (req, res, next) => {
	try {
		const id = req.params.item_id
		const doc = await Item.findByIdAndRemove(id)
		res.status(200).send({ doc })
	} catch (e) {
		next(e)
	}
})

module.exports = router
