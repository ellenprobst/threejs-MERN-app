import React, { Component } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import Form from '../Form'
import Canvas from '../Canvas'
import Code from '../Code'

import './create.css'

const Title = styled.h1`
	font-size: 60px;
	font-weight: normal;
`
const Button = styled.button`
	position: absolute;
	bottom: 5%;
	right: 5%;
	padding: 25px;
	background: #333;
	color: #fff;
`

const Wrapper = styled.div`
	position: absolute;
	bottom: 30vh;
	left: 15vw;
`

const colors = [
	['#12c2e9', '#c471ed'],
	['#0575E6', '#00F260'],
	['#3494E6', '#EC6EAD'],
	['#ff6a00', '#ee0979'],
	['#db36a4', '#f7ff00'],
	['#8360c3', '#2ebf91'],
	['#11e8bb', '#8200C9'],
	['#eaafc8', '#654ea3'],
	['#141e30', '#243b55']
]

class Create extends Component {
	state = {
		inputs: {
			title: 'App Title',
			size: 4,
			color: ['#141e30', '#243b55'],
			geometry: 'cube',
			isAnimated: false,
			isWireframe: false,
			hasChildren: false,
			image: ''
		},
		showCode: false
	}

	componentDidMount = () => {
		console.log('%c mounting ', 'background: darkcyan; color: #fff; padding: 2px;')
	}

	getImage = () => {
		const element = document.getElementsByTagName('canvas')
		const image = element[0].toDataURL()

		return image
	}

	postRequest = () => {
		const body = { ...this.state.inputs, user: this.props.user }
		axios
			.post('/items', body, {
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

	handleSubmit = e => {
		e.preventDefault()
		this.setState(prevState => ({ inputs: { ...prevState.inputs, image: this.getImage() } }), this.postRequest())
	}

	showCode = () => {
		this.setState(prevState => ({
			showCode: !prevState.showCode
		}))
	}

	updateState = (key, value) => {
		this.setState(prevState => ({
			inputs: {
				...prevState.inputs,
				[key]: key === 'color' ? colors[value] : value
			}
		}))
	}

	render() {
		const { inputs, showCode } = this.state

		return (
			<div>
				<Canvas {...inputs} />
				<Form updateState={this.updateState} handleSubmit={this.handleSubmit} {...inputs} />
				<Wrapper>
					<Title>{inputs.title}</Title>
				</Wrapper>
				{showCode && <Code close={this.showCode} />}
				<Button onClick={this.showCode}>show code</Button>
			</div>
		)
	}
}

export default Create
