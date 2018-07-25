import React, { Component } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import Login from '../Login'
import { Link } from 'react-router-dom'

import Item from '../Item'
import { getToken } from '../../services/tokenService'

const Grid = styled.div`
	display: grid;
	grid-gap: 20px;
	grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
`

class MyPage extends Component {
	state = {
		items: []
	}

	async componentDidMount() {
		this.refresh()
	}

	async componentDidUpdate(prevProps) {
		if (this.props.user !== prevProps.user) {
			this.refresh()
		}
	}

	refresh = async () => {
		if (!this.props.user) {
			return
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

	removeItem = async (e, id) => {
		console.log(e)
		e.stopPropagation()
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

	render() {
		return (
			<div>
				<Grid>
					{this.state.items.map(item => (
						<Item
							key={item._id}
							id={item._id}
							title={item.title}
							image={item.image}
							color={item.color}
							removeItem={this.removeItem}
						/>
					))}
				</Grid>

				{!this.props.user && <Login setUser={this.props.setUser} />}
			</div>
		)
	}
}

export default MyPage
