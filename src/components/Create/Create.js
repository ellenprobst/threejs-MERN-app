import React, { Component } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import Form from '../Form'
import Canvas from '../Canvas'
import Code from '../Code'
import Login from '../Login'
import './create.css'
import { getToken } from '../../services/tokenService'

const Container = styled.div`
	min-height: calc(100vh - 58px);
`

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
			hasChildren: false
		},
		showCode: false,
		showLogin: false
	}

	getImage = () => {
		const element = document.getElementsByTagName('canvas')
		const image = element[0].toDataURL()

		return image
	}

	postRequest = async inputs => {
		const body = { ...inputs }
		const token = getToken()
		try {
			await axios.post('/items', body, {
				headers: {
					Authorization: `Bearer ${token}`
				}
			})
		} catch (e) {
			console.log(e)
		}
	}

	handleSubmit = e => {
		e.preventDefault()
		const inputs = {
			...this.state.inputs,
			image: this.getImage()
		}

		if (this.props.user) {
			this.postRequest(inputs)
		} else {
			this.setState({ showLogin: true })
		}
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

	hideLogin = () => {
		this.setState({ showLogin: false })
	}

	render() {
		const { inputs, showCode, showLogin } = this.state

		return (
			<Container>
				<Canvas {...inputs} />
				<Form updateState={this.updateState} handleSubmit={this.handleSubmit} {...inputs} />
				<Wrapper>
					<Title>{inputs.title}</Title>
				</Wrapper>
				{showCode && <Code close={this.showCode} />}
				<Button onClick={this.showCode}>show code</Button>

				{showLogin && !this.props.user && <Login setUser={this.props.setUser} hideLogin={this.hideLogin} />}
			</Container>
		)
	}
}

export default Create
