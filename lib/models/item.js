const mongoose = require('mongoose')
mongoose.models = {}
mongoose.modelSchemas = {}
const Schema = mongoose.Schema

const inputSchema = new Schema({
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

// /items --> title + image
// /items/:item_id all the other stuff as well
// embed all properties and query by property

const itemSchema = new Schema({
	title: {
		type: String,
		required: true
	},
	image: {
		type: String,
		required: true
	},
	user: {
		type: Schema.Types.ObjectId,
		ref: 'User',
		required: true
	},
	inputs: [inputSchema]
})

module.exports = {
	Input: mongoose.model('Input', inputSchema),
	Item: mongoose.model('Item', itemSchema)
}
