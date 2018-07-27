import React, { Component } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import Inputs from '../Inputs'
import Canvas from '../Canvas'
import CodeSnippet from '../CodeSnippet'
import Login from '../Login'
import './create.css'
import { getToken } from '../../services/tokenService'
import { Round } from '../GlobalStyles'
import Code from '@material-ui/icons/Code'
const Container = styled.div`
	min-height: calc(100vh - 69px);
`

const Title = styled.h1`
	font-size: 60px;
	font-weight: normal;
`
const CodeButton = Round.extend`
	position: absolute;
	bottom: 5%;
	right: 2%;
`

const Wrapper = styled.div`
	position: absolute;
	bottom: 30vh;
	left: 15%;
	display: inline-block;
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
				{/* Canvas */}
				<Canvas {...inputs} />

				{/* Inputs */}
				<Inputs user={this.props.user} updateState={this.updateState} handleSubmit={this.handleSubmit} {...inputs} />

				{/* Title */}
				<Wrapper>
					<Title>{inputs.title}</Title>
				</Wrapper>

				{/* CodeButton */}
				<CodeButton red onClick={this.showCode}>
					<Code />
				</CodeButton>

				{/* CodeSnippet */}
				{showCode && <CodeSnippet close={this.showCode} />}

				{/* Login */}
				{showLogin && !this.props.user && <Login setUser={this.props.setUser} hideLogin={this.hideLogin} />}
			</Container>
		)
	}
}

export default Create
