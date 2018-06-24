import React, { Component } from 'react'
import PropTypes from 'prop-types'
// import { withStyles } from '@material-ui/core/styles'
// import Typography from '@material-ui/core/Typography'

// import TextField from '@material-ui/core/TextField'
// import Slider from '@material-ui/lab/Slider'
// import Switch from '@material-ui/core/Switch'
// import Button from '@material-ui/core/Button'

import './form.css'

const styles = {
	container: {
		width: 150
	}
}

class Form extends Component {
	state = {
		title: '',
		size: 3,
		colour: 3,
		geometry: '',
		isAnimated: false,
		isWireframe: false,
		hasChildren: false
	}

	handleChange = title => event => {
		this.setState({
			[title]: event.target.value
		})
	}

	handleSelect = name => (event, value) => {
		this.setState({ [name]: value })
	}

	handleSwitch = name => event => {
		this.setState({ [name]: event.target.checked })
	}

	handleSubmit = e => {
		e.preventDefault()
	}

	render() {
		const { classes } = this.props
		const { size, color } = this.state

		return (
			<form autoComplete="off" onSubmit={this.handleSubmit} className="form">
				<label htmlFor="title">Title:</label>
				<input name="title" type="text" placeholder="title" onChange={this.handleChange('title')} />
				<label htmlFor="size">Size:</label>
				<input name="size" type="range" min="1" max="5" defaultValue="3" onChange={this.handleSelect('size')} />
				<label htmlFor="colour">Colour:</label>
				<input name="colour" type="range" min="1" max="5" defaultValue="3" onChange={this.handleSelect('colour')} />
				<label htmlFor="geometry">sphere:</label>
				<input name="geometry" type="radio" />
				<label htmlFor="geometry">cube:</label>
				<input name="geometry" type="radio" />
				<label htmlFor="geometry">torus:</label>
				<input name="geometry" type="radio" />
				<label htmlFor="geometry">animate:</label>
				<input name="animate" type="checkbox" />
				<label htmlFor="wireframe">wireframe:</label>
				<input name="wireframe" type="checkbox" />
				<label htmlFor="children">children:</label>
				<input name="children" type="checkbox" />
				<button type="submit" className="button">
					save
				</button>
			</form>
		)
	}
}

export default Form
