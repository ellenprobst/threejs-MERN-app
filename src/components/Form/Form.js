import React, { Component } from 'react'
import ThreeDRotationIcon from '@material-ui/icons/ThreeDRotation'
import ColorLens from '@material-ui/icons/ColorLens'
import Backup from '@material-ui/icons/Backup'
import Langugage from '@material-ui/icons/Language'
import Title from '@material-ui/icons/Title'
import Straighten from '@material-ui/icons/Straighten'
import InsertPhoto from '@material-ui/icons/InsertPhoto'
import './form.css'
import { Round, Input } from '../GlobalStyles'
import styled, { css, keyframes } from 'styled-components'

const Label = styled.label`
	display: ${props => (props.active ? 'block' : 'none')};
`
const xfade = keyframes`

  from {
    transform: scale(1);
  }

  to {
    transform: scale(0);
   
  }

`

const FormButton = Round.extend`
	animation: ${props => (props.hide ? `${xfade} .3s both cubic-bezier(1,0,1,-0.21)` : 'none')};
`

class Form extends Component {
	state = {
		hide: false
	}
	showInput = name =>
		this.setState((prevState, props) => ({
			activeItem: prevState.activeItem === name ? '' : name
		}))
	handleChange = event => {
		const target = event.target
		const value = target.type === 'checkbox' ? target.checked : target.value
		const name = target.name
		this.props.updateState(name, value)
	}

	handleClick = () => {
		this.setState({ hide: true })
	}

	render() {
		const { title, size, isWireframe, hasChildren, geometry, handleSubmit, color, isAnimated } = this.props
		const { activeItem } = this.state
		return (
			<form autoComplete="off" onSubmit={handleSubmit} className="form">
				<FormButton hide={this.state.hide} type="button" onClick={() => this.showInput('title')}>
					<Title style={{ color: '#59f8e8' }} />
				</FormButton>
				<Label active={activeItem === 'title'}>
					Title:
					<Input name="title" type="text" value={title} onChange={this.handleChange} />
				</Label>

				<FormButton hide={this.state.hide} type="button" onClick={() => this.showInput('size')}>
					<Straighten style={{ color: '#59f8e8' }} />
				</FormButton>
				<Label active={activeItem === 'size'}>
					Size:
					<input name="size" type="range" min="1" max="8" value={size} onChange={this.handleChange} />
				</Label>

				<FormButton hide={this.state.hide} type="button" onClick={() => this.showInput('color')}>
					<ColorLens style={{ color: '#59f8e8' }} />
				</FormButton>
				<Label active={activeItem === 'color'}>
					Colour:
					<input name="color" type="range" min="0" max="8" defaultValue={color} onChange={this.handleChange} />
				</Label>
				<FormButton hide={this.state.hide} type="button" onClick={() => this.showInput('geometry')}>
					<InsertPhoto style={{ color: '#59f8e8' }} />
				</FormButton>
				<Label active={activeItem === 'geometry'}>
					sphere:
					<input
						name="geometry"
						type="radio"
						value="sphere"
						checked={geometry === 'sphere'}
						onChange={this.handleChange}
					/>
				</Label>
				<Label active={activeItem === 'geometry'}>
					cube:
					<input name="geometry" type="radio" value="cube" checked={geometry === 'cube'} onChange={this.handleChange} />
				</Label>
				<Label active={activeItem === 'geometry'}>
					torus:
					<input
						name="geometry"
						type="radio"
						value="torus"
						checked={geometry === 'torus'}
						onChange={this.handleChange}
					/>
				</Label>
				<Label active={activeItem === 'geometry'}>
					torusKnot:
					<input
						name="geometry"
						type="radio"
						value="torusKnot"
						checked={geometry === 'torusKnot'}
						onChange={this.handleChange}
					/>
				</Label>
				<Label active={activeItem === 'geometry'}>
					octa:
					<input name="geometry" type="radio" value="octa" checked={geometry === 'octa'} onChange={this.handleChange} />
				</Label>
				<Label active={activeItem === 'geometry'}>
					icosa:
					<input
						name="geometry"
						type="radio"
						value="icosa"
						checked={geometry === 'icosa'}
						onChange={this.handleChange}
					/>
				</Label>
				<FormButton hide={this.state.hide} type="button" onClick={() => this.showInput('animate')}>
					<ThreeDRotationIcon style={{ color: '#59f8e8' }} />
				</FormButton>
				<Label active={activeItem === 'animate'}>
					animate:
					<input name="animate" type="checkbox" checked={isAnimated} onChange={this.handleChange} />
				</Label>
				<FormButton hide={this.state.hide} type="button" onClick={() => this.showInput('isWireframe')}>
					<Langugage style={{ color: '#59f8e8' }} />
				</FormButton>

				<Label active={activeItem === 'isWireframe'}>
					wireframe:
					<input name="isWireframe" type="checkbox" checked={isWireframe} onChange={this.handleChange} />
				</Label>
				<Round type="submit" onClick={this.handleClick}>
					<Backup style={{ color: '#59f8e8' }} />
				</Round>
			</form>
		)
	}
}

export default Form
