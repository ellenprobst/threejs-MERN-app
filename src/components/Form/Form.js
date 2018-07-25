import React, { Component } from 'react'

import './form.css'

class Form extends Component {
	handleChange = event => {
		const target = event.target
		const value = target.type === 'checkbox' ? target.checked : target.value
		const name = target.name
		this.props.updateState(name, value)
	}

	render() {
		const { title, size, isWireframe, hasChildren, geometry, handleSubmit, color, isAnimated } = this.props
		return (
			<form autoComplete="off" onSubmit={handleSubmit} className="form">
				<label>
					Title:
					<input name="title" type="text" placeholder={title} onChange={this.handleChange} />
				</label>

				<label>
					Size:
					<input name="size" type="range" min="1" max="8" value={size} onChange={this.handleChange} />
				</label>

				<label>
					Colour:
					<input name="color" type="range" min="0" max="8" value={color} onChange={this.handleChange} />
				</label>
				<label>
					sphere:
					<input
						name="geometry"
						type="radio"
						value="sphere"
						checked={geometry === 'sphere'}
						onChange={this.handleChange}
					/>
				</label>
				<label>
					cube:
					<input name="geometry" type="radio" value="cube" checked={geometry === 'cube'} onChange={this.handleChange} />
				</label>
				<label>
					torus:
					<input
						name="geometry"
						type="radio"
						value="torus"
						checked={geometry === 'torus'}
						onChange={this.handleChange}
					/>
				</label>
				<label>
					torusKnot:
					<input
						name="geometry"
						type="radio"
						value="torusKnot"
						checked={geometry === 'torusKnot'}
						onChange={this.handleChange}
					/>
				</label>
				<label>
					octa:
					<input name="geometry" type="radio" value="octa" checked={geometry === 'octa'} onChange={this.handleChange} />
				</label>
				<label>
					icosa:
					<input
						name="geometry"
						type="radio"
						value="icosa"
						checked={geometry === 'icosa'}
						onChange={this.handleChange}
					/>
				</label>
				<label>
					animate:
					<input name="animate" type="checkbox" checked={isAnimated} onChange={this.handleChange} />
				</label>
				<label>
					wireframe:
					<input name="isWireframe" type="checkbox" checked={isWireframe} onChange={this.handleChange} />
				</label>
				<label>
					children:
					<input name="hasChildren" type="checkbox" checked={hasChildren} onChange={this.handleChange} />
				</label>

				<button type="submit" className="button">
					save
				</button>
			</form>
		)
	}
}

export default Form
