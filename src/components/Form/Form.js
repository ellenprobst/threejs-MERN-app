import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

import TextField from '@material-ui/core/TextField'
import Slider from '@material-ui/lab/Slider'
import Switch from '@material-ui/core/Switch'
import Button from '@material-ui/core/Button'

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
				<TextField
					id="title"
					label="Title"
					value={this.state.title}
					onChange={this.handleChange('title')}
					margin="normal"
				/>

				<div className={classes.container}>
					<Typography id="labelSize">Size</Typography>
					<Slider
						data-name="size"
						value={size}
						min={0}
						max={6}
						step={1}
						aria-labelledby="labelSize"
						onChange={this.handleSelect('size')}
					/>
					<Typography id="labelColor">Color</Typography>
					<Slider
						value={color}
						min={0}
						max={6}
						step={1}
						aria-labelledby="labelColor"
						onChange={this.handleSelect('color')}
					/>
				</div>

				<Switch checked={this.state.isAnimated} onChange={this.handleSwitch('isAnimated')} value="isAnimated" />

				<Switch checked={this.state.isWireframe} onChange={this.handleSwitch('isWireframe')} value="isWireframe" />

				<Switch checked={this.state.hasChildren} onChange={this.handleSwitch('hasChildren')} value="hasChildren" />

				<Button type="submit" variant="outlined" size="medium" color="primary" className={classes.button}>
					Save
				</Button>
			</form>
		)
	}
}

Form.propTypes = {
	classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Form)
