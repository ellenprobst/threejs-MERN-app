const mongoose = require('mongoose')
const Schema = mongoose.Schema

const itemSchema = new Schema({
	size: {
		type: Number,
		required: true
	},
	geometry: {
		type: String,
		required: true
	},
	colour: {
		type: String,
		required: true
	},
	title: {
		type: String,
		required: true
	},
	isAnimated: {
		type: Boolean,
		required: true
	},
	hasChildren: {
		type: Boolean,
		required: true
	},
	isWireframe: {
		type: Boolean,
		required: true
	},
	user: {
		type: Schema.Types.ObjectId,
		ref: 'User',
		required: true
	}
})

module.exports = mongoose.model('Item', itemSchema)
