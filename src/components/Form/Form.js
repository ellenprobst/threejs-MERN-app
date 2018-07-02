import React, { Component } from 'react'

import './form.css'

class Form extends Component {
	handleChange = title => event => this.props.updateState(title, event.target.value)
	handleSwitch = name => event => this.props.updateState(name, event.target)
	handleSubmit = e => e.preventDefault()

	render() {
		const { title, size, colour, geometry, isAnimated, isWireframe, hasChildren } = this.props.default
		return (
			<form autoComplete="off" onSubmit={this.handleSubmit} className="form">
				<label htmlFor="title">Title:</label>
				<input name="title" type="text" placeholder={title} onChange={this.handleChange('title')} />
				<label htmlFor="size">Size:</label>
				<input name="size" type="range" min="1" max="5" defaultValue={size} onChange={this.handleChange('size')} />
				<label htmlFor="colour">Colour:</label>
				<input name="colour" type="range" min="1" max="5" defaultValue={size} onChange={this.handleChange('colour')} />
				<label htmlFor="geometry">sphere:</label>
				<input
					name="geometry"
					type="radio"
					value="sphere"
					defaultChecked={false}
					onChange={() => this.handleSwitch('geometry')}
				/>
				<label htmlFor="geometry">cube:</label>
				<input name="geometry" type="radio" value="cube" onChange={() => this.handleSwitch('geometry')} />
				<label htmlFor="geometry">torus:</label>
				<input name="geometry" type="radio" value="torus" onChange={() => this.handleSwitch('geometry')} />
				<label htmlFor="animate">animate:</label>
				<input name="animate" type="checkbox" value="sphere" onChange={() => this.handleSwitch('isAnimated')} />
				<label htmlFor="wireframe">wireframe:</label>
				<input type="checkbox" onChange={e => this.handleSwitch('isWireframe')} />
				<label htmlFor="children">children:</label>
				<input name="children" type="checkbox" value="isWireframe" onChange={() => this.handleSwitch('hasDhildren')} />
				<input type="checkbox" onChange={this.handleSwitch} />
				<button type="submit" className="button">
					save
				</button>
			</form>
		)
	}
}

export default Form
