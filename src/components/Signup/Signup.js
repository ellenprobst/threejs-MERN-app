import React, { Component } from 'react'

import axios from 'axios'

import { setToken } from '../../services/tokenService'

class Signup extends Component {
	state = {}

	handleChange = e => this.setState({ [e.target.name]: e.target.value })

	handleSubmit = async e => {
		e.preventDefault()

		const { email, password } = this.state

		try {
			const res = await axios.post('/auth/signup', { email, password })
			const { token, user } = res.data.payload

			setToken(token)
			this.props.setUser(user)
			console.log('success', res)
		} catch (e) {
			console.log(e)
		}
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<input name="email" type="email" placeholder="email" onChange={this.handleChange} />

				<input name="password" type="password" placeholder="password" onChange={this.handleChange} />

				<button type="submit">Signup</button>
			</form>
		)
	}
}

export default Signup
