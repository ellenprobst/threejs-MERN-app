import React, { Component } from 'react'

import Form from '../Form'
import Canvas from '../Canvas'

import './create.css'

class Create extends Component {
	state = {
		title: '',
		size: 3,
		colour: 3,
		geometry: '',
		isAnimated: false,
		isWireframe: false,
		hasChildren: false
	}

	updateState = (key, value) => {
		this.setState({ [key]: value })
	}
	render() {
		const { size } = this.state
		return (
			<div className="">
				<h1>Create</h1>
				<Canvas width={size} height={size} depth={size} />
				<Form updateState={this.updateState} />
			</div>
		)
	}
}

export default Create
