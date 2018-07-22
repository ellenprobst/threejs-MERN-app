import React, { Component } from 'react'
import axios from 'axios'
import styled from 'styled-components'

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

	refresh = async () => {
		const token = getToken()
		try {
			const res = await axios.get(`/items?user_id=${this.props.user}`, {
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
		try {
			await axios.delete(`/items/${id}`)
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
			</div>
		)
	}
}

export default MyPage
