const express = require('express')
const Item = require('../models/Item')
const Router = express.Router
const router = Router()

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

router.post('/', async (req, res, next) => {
	const item = new Item(req.body)

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
		const id = req.params.item_id
		console.log(id)
		const doc = await Item.findByIdAndRemove(id)
		res.status(200).send({ doc })
	} catch (e) {
		next(e)
	}
})

module.exports = router
