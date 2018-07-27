import React, { Component } from 'react'
import styled, { keyframes } from 'styled-components'
import axios from 'axios'
import { Container, SubHeader, InputField, SelectionGroup, Selection, Form, Wrapper } from './styles'
import { Button, Input, FlexContainer } from '../GlobalStyles'
import Person from '@material-ui/icons/Person'
import { setToken } from '../../services/tokenService'

class Login extends Component {
	state = {
		type: 'login',
		message: null
	}

	handleChange = e => this.setState({ [e.target.name]: e.target.value })

	handleSubmit = async e => {
		e.preventDefault()

		const { email, password, type } = this.state

		const route = type === 'login' ? 'login' : 'signup'

		try {
			const res = await axios.post(`/auth/${route}`, { email, password })

			const { token, doc } = res.data.payload

			console.log('succes', res)

			setToken(token)

			this.props.setUser(doc)
		} catch (e) {
			this.setState({ message: e })
		}
	}

	changeForm = type => {
		this.setState({ type: type })
	}

	render() {
		const { type } = this.state

		return (
			<Wrapper>
				<Container>
					<SelectionGroup>
						<Selection active={type === 'login'} onClick={() => this.changeForm('login')}>
							Login
						</Selection>

						<Selection active={type === 'sign up'} onClick={() => this.changeForm('sign up')}>
							Sign up
						</Selection>
					</SelectionGroup>

					<Form onSubmit={this.handleSubmit}>
						<SubHeader>You'll need to login to continue</SubHeader>

						<InputField>
							<Person />
							<Input name="email" type="email" placeholder="email" onChange={this.handleChange} />
						</InputField>
						<Input name="password" type="password" placeholder="password" onChange={this.handleChange} />
						<FlexContainer>
							<Button type="submit">{type}</Button>

							<Button small onClick={this.props.hideLogin}>
								cancel
							</Button>
						</FlexContainer>
					</Form>
				</Container>
			</Wrapper>
		)
	}
}

export default Login
