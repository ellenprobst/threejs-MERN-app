import React, { Component } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import Login from '../Login'
import { Link } from 'react-router-dom'

import Item from '../Item'
import { getToken } from '../../services/tokenService'

const Grid = styled.div`
	display: grid;
	padding: 50px 0 35px 0;
	grid-gap: 80px 50px;
	grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
`

class MyPage extends Component {
	state = {
		items: [],
		showLogin: true
	}

	async componentDidMount() {
		this.refresh()
		console.log('%c did mount ', 'background: darkcyan; color: #fff; padding: 2px;')
	}

	async componentDidUpdate(prevProps) {
		if (this.props.user !== prevProps.user) {
			this.refresh()
			console.log('%c refreshing ', 'background: darkcyan; color: #fff; padding: 2px;')
		}
	}

	refresh = async () => {
		if (!this.props.user) {
			return this.setState({ items: [] })
		}
		const token = getToken()
		const { user_id } = this.props.user

		try {
			const res = await axios.get(`/items?user_id=${user_id}`, {
				headers: {
					Authorization: `Bearer ${token}`
				}
			})
			const items = res.data
			this.setState({ items })
		} catch (e) {
			console.log(e)
		}
	}

	removeItem = async id => {
		const token = getToken()
		try {
			await axios.delete(`/items/${id}`, {
				headers: {
					Authorization: `Bearer ${token}`
				}
			})
			this.refresh()
		} catch (e) {
			console.log(e)
		}
	}
	hideLogin = () => {
		this.setState({ showLogin: false })
	}

	render() {
		console.log('%c rerendering ', 'background: darkcyan; color: #fff; padding: 2px;')
		const { user, setUser } = this.props
		const { items, showLogin } = this.state
		return (
			<div>
				<Grid>
					{items.map(item => (
						<Item
							key={item._id}
							id={item._id}
							title={item.title}
							image={item.image}
							color={item.color}
							removeItem={this.removeItem}
						/>
					))}

					{user && items.length === 0 && <p>You have no saved items.</p>}
				</Grid>

				{showLogin && !user && <Login setUser={setUser} hideLogin={this.hideLogin} />}
			</div>
		)
	}
}

export default MyPage
