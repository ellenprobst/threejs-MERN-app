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

	updateState = (key, value) => this.setState({ [key]: value })
	render() {
		return (
			<div>
				<Canvas {...this.state} />
				<Form updateState={this.updateState} {...this.state} />
				<Wrapper>
					<Title>{this.state.title}</Title>
				</Wrapper>
			</div>
		)
	}
}

export default Create
