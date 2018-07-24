import React, { Component } from 'react'
import styled, { keyframes } from 'styled-components'
import axios from 'axios'

import { setToken } from '../../services/tokenService'

const scale = keyframes`
  
  from {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  50% {
    opacity: 1;
  }

`
const Container = styled.div`
	border-radius: 3px;
	box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
	position: absolute;
	z-index: 3;
	right: 0;
	left: 0;
	margin: auto;
	width: 45%;
	min-height: 50%;
	background: #141f30;
	display: flex;
	flex-direction: column;
	animation: ${scale} 0.3s both ease-in;
`

const Input = styled.input`
	padding: 10px;
	color: #fff;
	font-size: 16px;
	background: transparent;
	border: none;
	border-bottom: 1px solid #19293d;
	outline: none;
	transition: all 0.3s ease;
	letter-spacing: 1.6px;
	&:focus {
		border-bottom: 1px solid #59f8e8;
	}

	&:-webkit-autofill {
		background-color: transparent;
	}

	&::-webkit-input-placeholder {
		color: #677996;
	}
`

const Form = styled.form`
	padding: 50px;
	display: flex;
	flex-direction: column;
	flex-grow: 1;
	justify-content: space-evenly;
`

const ButtonGroup = styled.div`
	display: flex;
`

const Button = styled.button`
	outline: none;
	font-size: 16px;
	letter-spacing: 1.6px;
	padding: 30px;
	background: #19293d;
	color: #677996;
	border: none;
	flex-grow: 1;
	${props =>
		props.active &&
		`
			background: transparent;
			color: #59F8E8;
		`};
`

const Submit = styled.button`
	outline: none;
	font-size: 16px;
	letter-spacing: 1.6px;
	padding: 15px 30px;
	margin-top: 25px;
	color: #fff;
	border: 1px solid #59f8e8;
	border-radius: 3px;
	background: transparent;
`

const Cancel = styled.button`
	outline: none;
	font-size: 14px;
	letter-spacing: 1.4px;
	padding: 15px 30px;
	margin-top: 25px;
	color: #677998;
	border: none;
	border-bottom: 1px solid #677998;
	background: transparent;
`

class Login extends Component {
	state = {
		type: 'login'
	}

	handleChange = e => this.setState({ [e.target.name]: e.target.value })

	handleSubmit = async e => {
		e.preventDefault()
		const { email, password, type } = this.state
		const route = type === 'login' ? 'login' : 'signup'
		try {
			const res = await axios.post(`/auth/${route}`, { email, password })

			const { token, user } = res.data.payload
			console.log('succes', res)
			setToken(token)
			this.props.setUser(user)
		} catch (e) {
			console.log(e)
		}
	}

	changeForm = type => {
		this.setState({ type: type })
	}

	render() {
		const { type } = this.state
		return (
			<Container>
				<ButtonGroup>
					<Button active={type === 'login'} onClick={() => this.changeForm('login')}>
						Login
					</Button>
					<Button active={type === 'sign up'} onClick={() => this.changeForm('sign up')}>
						Sign up
					</Button>
				</ButtonGroup>
				<Form onSubmit={this.handleSubmit}>
					<Input name="email" type="email" placeholder="email" onChange={this.handleChange} />

					<Input name="password" type="password" placeholder="password" onChange={this.handleChange} />

					<Submit type="submit">{type}</Submit>
					<Cancel onClick={this.props.hideLogin}>cancel</Cancel>
				</Form>
			</Container>
		)
	}
}

export default Login
