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

class Create extends Component {
	state = {
		inputs: {
			title: 'App Title',
			size: 4,
			color: 7,
			geometry: 'cube',
			isAnimated: false,
			isWireframe: false,
			hasChildren: false,
			image: 'url'
		},
		showCode: false
	}

	componentDidMount = () => {
		console.log('%c mounting ', 'background: darkcyan; color: #fff; padding: 2px;')
	}

	addScreenshot = () => {
		console.log('%c setting state ', 'background: darkcyan; color: #fff; padding: 2px;')
		const element = document.getElementsByTagName('canvas')
		const screenshot = element[0].toDataURL()

		this.setState(prevState => ({ inputs: { ...prevState.inputs, image: screenshot } }))
	}

	postRequest = () => {
		console.log('%c running get ', 'background: darkcyan; color: #fff; padding: 2px;')
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

	handleSubmit = async e => {
		e.preventDefault()

		await this.addScreenshot()
		this.postRequest()
	}

	showCode = () => {
		this.setState(prevState => ({
			showCode: !prevState.showCode
		}))
	}

	updateState = (key, value) =>
		this.setState(prevState => ({
			inputs: {
				...prevState.inputs,
				[key]: value
			}
		}))

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
