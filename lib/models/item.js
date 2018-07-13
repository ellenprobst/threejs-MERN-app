const mongoose = require('mongoose')
const Schema = mongoose.Schema

// /items --> title + image
// /items/:item_id all the other stuff as well
// embed all properties and query by property

const itemSchema = new Schema({
	user: {
		type: Schema.Types.ObjectId,
		ref: 'User',
		required: true
	},
	title: {
		type: String,
		required: true
	},
	image: {
		type: String,
		required: true
	},
	size: {
		type: Number,
		required: true
	},
	geometry: {
		type: String,
		required: true
	},
	color: {
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
	}
})

module.exports = mongoose.model('Item', itemSchema)
