import React, { Component } from 'react'
import styled from 'styled-components'

import Form from '../Form'
import Canvas from '../Canvas'

import './create.css'

const Title = styled.h1`
	font-size: 50px;
	font-weight: normal;
`

const Wrapper = styled.div`
	position: absolute;
	bottom: 30vh;
	left: 15vw;
`

class Create extends Component {
	state = {
		title: 'App Title',
		size: 3,
		colour: 3,
		geometry: '',
		isAnimated: false,
		isWireframe: false,
		hasChildren: false
	}

	updateState = (key, value) => {
		this.setState({ [key]: value })
	}
	render() {
		const { size, title } = this.state
		return (
			<div>
				<h1>Create</h1>
				<Canvas width={size} height={size} depth={size} />
				<Form updateState={this.updateState} default={this.state} />
				<Wrapper>
					<Title>{title}</Title>
				</Wrapper>
			</div>
		)
	}
}

export default Create
