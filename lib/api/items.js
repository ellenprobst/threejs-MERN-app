const express = require('express')
const Router = express.Router
const router = Router()
const { Item } = require('../models/Item')

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

module.exports = router
