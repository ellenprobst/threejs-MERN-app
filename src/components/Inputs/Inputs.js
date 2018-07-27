import React, { Component } from 'react'
import ThreeDRotationIcon from '@material-ui/icons/ThreeDRotation'
import ColorLens from '@material-ui/icons/ColorLens'
import Backup from '@material-ui/icons/Backup'
import Langugage from '@material-ui/icons/Language'
import Title from '@material-ui/icons/Title'
import Straighten from '@material-ui/icons/Straighten'
import InsertPhoto from '@material-ui/icons/InsertPhoto'

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

const Form = styled.form`
	position: absolute;
	left: 15px;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
`

const FormButton = Round.extend`
	animation: ${props => (props.hide ? `${xfade} .3s both cubic-bezier(1,0,1,-0.21)` : 'none')};
	position: relative;
`

const Tooltip = styled.span`
	visibility: hidden;
	position: absolute;

	left: 125%;
	width: 80px;
	background-color: #3f9a9e;
	color: #fff;
	text-align: center;
	padding: 5px 0;
	border-radius: 3px;
	z-index: 1;
	opacity: 0;
	box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14),
		0px 1px 18px 0px rgba(0, 0, 0, 0.12);
	transition: opacity 0.6s;
	${FormButton}:hover & {
		visibility: visible;
		opacity: 1;
	}

	&::after {
		content: '';
		position: absolute;
		top: 50%;
		right: 100%;
		margin-top: -5px;
		border-width: 5px;
		border-style: solid;
		border-color: transparent #3f9a9e transparent transparent;
	}
`

class Inputs extends Component {
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
		if (this.props.user) this.setState({ hide: true })
	}

	render() {
		const { title, size, isWireframe, hasChildren, geometry, handleSubmit, color, isAnimated } = this.props
		const { activeItem } = this.state
		return (
			<Form autoComplete="off" onSubmit={handleSubmit}>
				<FormButton hide={this.state.hide} type="button" onClick={() => this.showInput('title')}>
					<Title style={{ color: '#59f8e8' }} />
					<Tooltip>title</Tooltip>
				</FormButton>
				<Label active={activeItem === 'title'}>
					Title:
					<Input name="title" type="text" value={title} onChange={this.handleChange} />
				</Label>

				<FormButton hide={this.state.hide} type="button" onClick={() => this.showInput('size')}>
					<Straighten style={{ color: '#59f8e8' }} />
					<Tooltip>size</Tooltip>
				</FormButton>
				<Label active={activeItem === 'size'}>
					Size:
					<input name="size" type="range" min="1" max="8" value={size} onChange={this.handleChange} />
				</Label>

				<FormButton hide={this.state.hide} type="button" onClick={() => this.showInput('color')}>
					<ColorLens style={{ color: '#59f8e8' }} />
					<Tooltip>color</Tooltip>
				</FormButton>
				<Label active={activeItem === 'color'}>
					Colour:
					<input name="color" type="range" min="0" max="8" defaultValue={color} onChange={this.handleChange} />
				</Label>

				<FormButton hide={this.state.hide} type="button" onClick={() => this.showInput('geometry')}>
					<InsertPhoto style={{ color: '#59f8e8' }} />
					<Tooltip>geometry</Tooltip>
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
					<Tooltip>animate</Tooltip>
				</FormButton>
				<Label active={activeItem === 'animate'}>
					animate:
					<input name="animate" type="checkbox" checked={isAnimated} onChange={this.handleChange} />
				</Label>

				<FormButton hide={this.state.hide} type="button" onClick={() => this.showInput('isWireframe')}>
					<Langugage style={{ color: '#59f8e8' }} />
					<Tooltip>wireframe</Tooltip>
				</FormButton>

				<Label active={activeItem === 'isWireframe'}>
					wireframe:
					<input name="isWireframe" type="checkbox" checked={isWireframe} onChange={this.handleChange} />
				</Label>

				<Round type="submit" onClick={this.handleClick}>
					<Backup style={{ color: '#59f8e8' }} />
					<Tooltip>save</Tooltip>
				</Round>
			</Form>
		)
	}
}

export default Inputs
