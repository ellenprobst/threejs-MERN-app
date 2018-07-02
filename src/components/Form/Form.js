import React, { Component } from 'react'

import './form.css'

class Form extends Component {
	handleChange = title => event => this.props.updateState(title, event.target.value)
	handleSwitch = name => event => this.props.updateState(name, event.target.checked)

	handleSubmit = e => e.preventDefault()

	render() {
		const { title, size, isWireframe, hasChildren } = this.props
		return (
			<form autoComplete="off" onSubmit={this.handleSubmit} className="form">
				<label htmlFor="title">
					Title:
					<input name="title" type="text" placeholder={title} onChange={this.handleChange('title')} />
				</label>

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
				<label>
					wireframe:
					<input
						name="isWireframe"
						type="checkbox"
						defaultChecked={isWireframe}
						onChange={this.handleSwitch('isWireframe')}
					/>
				</label>
				<label>
					children:
					<input
						name="hasChildren"
						type="checkbox"
						defaultChecked={hasChildren}
						onChange={this.handleSwitch('hasChildren')}
					/>
				</label>

				<input type="checkbox" onChange={this.handleSwitch} />
				<button type="submit" className="button">
					save
				</button>
			</form>
		)
	}
}

export default Form
