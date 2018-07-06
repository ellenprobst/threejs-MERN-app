import React, { Component } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import Form from '../Form'
import Canvas from '../Canvas'

import './create.css'

const Title = styled.h1`
	font-size: 60px;
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
		color: 3,
		geometry: 'cube',
		isAnimated: false,
		isWireframe: false,
		hasChildren: false,
		image: 'url',
		user: '5b341f87211b090dd4e1e5d8'
	}

	handleSubmit = e => {
		e.preventDefault()
		// axios.get('/items').then(res => {
		// 	console.log(res.data)
		// })

		axios
			.post('/items', this.state, {
				headers: {
					'content-type': 'application/json'
				}
			})
			.then(function(response) {
				console.log(response)
			})
			.catch(function(error) {
				console.log(error)
			})
	}

	updateState = (key, value) => this.setState({ [key]: value })
	render() {
		return (
			<div>
				<Canvas {...this.state} />
				<Form updateState={this.updateState} handleSubmit={this.handleSubmit} {...this.state} />
				<Wrapper>
					<Title>{this.state.title}</Title>
				</Wrapper>
			</div>
		)
	}
}

export default Create
