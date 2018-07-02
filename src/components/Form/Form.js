import React, { Component } from 'react'

import './form.css'

class Form extends Component {
	handleChange = event => {
		const target = event.target
		const value = target.type === 'checkbox' ? target.checked : target.value
		const name = target.name

		this.props.updateState(name, value)
	}

	handleSubmit = e => e.preventDefault()

	render() {
		const { title, size, isWireframe, hasChildren } = this.props
		return (
			<form autoComplete="off" onSubmit={this.handleSubmit} className="form">
				<label htmlFor="title">
					Title:
					<input name="title" type="text" placeholder={title} onChange={this.handleChange} />
				</label>

				<label htmlFor="size">Size:</label>
				<input name="size" type="range" min="1" max="5" defaultValue={size} onChange={this.handleChange} />
				<label htmlFor="color">Colour:</label>
				<input name="color" type="range" min="1" max="5" defaultValue={size} onChange={this.handleChange} />
				<label htmlFor="geometry">sphere:</label>
				<input name="geometry" type="radio" value="sphere" defaultChecked={false} onChange={() => this.handleChange} />
				<label htmlFor="geometry">cube:</label>
				<input name="geometry" type="radio" value="cube" onChange={() => this.handleChange} />
				<label htmlFor="geometry">torus:</label>
				<input name="geometry" type="radio" value="torus" onChange={() => this.handleChange} />
				<label htmlFor="animate">animate:</label>
				<input name="animate" type="checkbox" value="sphere" onChange={() => this.handleChange} />
				<label>
					wireframe:
					<input name="isWireframe" type="checkbox" defaultChecked={isWireframe} onChange={this.handleChange} />
				</label>
				<label>
					children:
					<input name="hasChildren" type="checkbox" defaultChecked={hasChildren} onChange={this.handleChange} />
				</label>

				<button type="submit" className="button">
					save
				</button>
			</form>
		)
	}
}

export default Form
