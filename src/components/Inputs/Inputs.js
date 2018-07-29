import React, { Component } from 'react'
import ThreeDRotationIcon from '@material-ui/icons/ThreeDRotation'
import ColorLens from '@material-ui/icons/ColorLens'
import Backup from '@material-ui/icons/Backup'
import Langugage from '@material-ui/icons/Language'
import Title from '@material-ui/icons/Title'
import Straighten from '@material-ui/icons/Straighten'
import InsertPhoto from '@material-ui/icons/InsertPhoto'
import Done from '@material-ui/icons/Done'

import { Input, FlexContainer, Round } from '../GlobalStyles'
import { Label, Form, FormButton, Toggle, Container, Column, Tooltip } from './styles'

class Inputs extends Component {
	state = {
		activeItem: null
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

	hideInputs = () => {
		if (this.props.user) {
			this.setState({ activeItem: '' })
		}
	}

	handleSubmit = e => {
		e.preventDefault()
		if (!this.props.edit) {
			this.hideInputs()
		}

		this.props.handleSubmit()
	}

	render() {
		const { title, size, isWireframe, geometry, color, isAnimated, isSaved, showInputs } = this.props
		const { activeItem } = this.state
		return (
			<div>
				<Form autoComplete="off" onSubmit={this.handleSubmit}>
					<Container>
						<FormButton hide={showInputs} type="button" onClick={() => this.showInput('title')}>
							<Title style={{ color: '#59f8e8' }} />
							<Tooltip>title</Tooltip>
						</FormButton>
						<Label active={activeItem === 'title'}>
							<Input name="title" type="text" value={title} onChange={this.handleChange} />
						</Label>
					</Container>

					<Container>
						<FormButton hide={showInputs} type="button" onClick={() => this.showInput('geometry')}>
							<InsertPhoto style={{ color: '#59f8e8' }} />
							<Tooltip>geometry</Tooltip>
						</FormButton>
						<Column>
							<Label active={activeItem === 'geometry'}>
								<input
									name="geometry"
									type="radio"
									value="sphere"
									checked={geometry === 'sphere'}
									onChange={this.handleChange}
								/>
								sphere
							</Label>
							<Label active={activeItem === 'geometry'}>
								<input
									name="geometry"
									type="radio"
									value="cube"
									checked={geometry === 'cube'}
									onChange={this.handleChange}
								/>
								cube
							</Label>
							<Label active={activeItem === 'geometry'}>
								<input
									name="geometry"
									type="radio"
									value="torus"
									checked={geometry === 'torus'}
									onChange={this.handleChange}
								/>
								torus
							</Label>
							<Label active={activeItem === 'geometry'}>
								<input
									name="geometry"
									type="radio"
									value="torusKnot"
									checked={geometry === 'torusKnot'}
									onChange={this.handleChange}
								/>
								torusKnot
							</Label>
							<Label active={activeItem === 'geometry'}>
								<input
									name="geometry"
									type="radio"
									value="octa"
									checked={geometry === 'octa'}
									onChange={this.handleChange}
								/>
								octa
							</Label>
							<Label active={activeItem === 'geometry'}>
								<input
									name="geometry"
									type="radio"
									value="icosa"
									checked={geometry === 'icosa'}
									onChange={this.handleChange}
								/>
								icosa
							</Label>
						</Column>
					</Container>

					<Container>
						<FormButton hide={showInputs} type="button" onClick={() => this.showInput('size')}>
							<Straighten style={{ color: '#59f8e8' }} />
							<Tooltip>size</Tooltip>
						</FormButton>
						<Label active={activeItem === 'size'}>
							<input name="size" type="range" min="1" max="8" value={size} onChange={this.handleChange} />
						</Label>
					</Container>

					<Container>
						<FormButton hide={showInputs} type="button" onClick={() => this.showInput('color')}>
							<ColorLens style={{ color: '#59f8e8' }} />
							<Tooltip>color</Tooltip>
						</FormButton>
						<Label active={activeItem === 'color'}>
							<input name="color" type="range" min="0" max="8" defaultValue={color} onChange={this.handleChange} />
						</Label>
					</Container>

					<Container>
						<FormButton hide={showInputs} type="button" onClick={() => this.showInput('animate')}>
							<ThreeDRotationIcon style={{ color: '#59f8e8' }} />
							<Tooltip>animate</Tooltip>
						</FormButton>
						<Label active={activeItem === 'animate'}>
							animate:
							<input name="animate" type="checkbox" checked={isAnimated} onChange={this.handleChange} />
						</Label>
					</Container>

					<Label hide={showInputs} active={true}>
						<input
							style={{ visibility: 'hidden', position: 'absolute' }}
							name="isWireframe"
							type="checkbox"
							checked={isWireframe}
							onChange={this.handleChange}
						/>
						<Toggle checked={isWireframe} type="button">
							<Langugage style={{ color: '#59f8e8' }} />
							<Tooltip>wireframe</Tooltip>
						</Toggle>
					</Label>

					<FlexContainer>
						<Round type="submit">
							{isSaved ? <Done style={{ color: '#59f8e8' }} /> : <Backup style={{ color: '#59f8e8' }} />}
							<Tooltip>save</Tooltip>
						</Round>
						{isSaved && <p>Saved!</p>}
					</FlexContainer>
				</Form>
			</div>
		)
	}
}

export default Inputs
