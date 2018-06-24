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
		color: 3,
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
			<form autoComplete="off" onSubmit={this.handleSubmit}>
				<div>testing</div>
			</form>
		)
	}
}

export default Form
