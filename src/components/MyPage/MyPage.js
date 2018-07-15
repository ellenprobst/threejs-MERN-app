import React, { Component } from 'react'
import axios from 'axios'
import styled from 'styled-components'

import Item from '../Item'

const Grid = styled.div`
	display: grid;
	grid-gap: 20px;
	grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
`

class MyPage extends Component {
	state = {
		items: []
	}

	getItems = async () => {
		const res = await axios.get(`/items?user_id=${this.props.user}`)
		return res.data
	}

	async componentDidMount() {
		console.log('%c ComponentDidMount(MyPage) ', 'background: darkcyan; color: #fff; padding: 2px;')
		const items = await this.getItems()
		this.setState({ items })
	}

	deleteItem = async (id) => {
		await axios.delete(`/item_id=${id}`);
		
	}

	render() {
		return (
			<div>
				<Grid>
					{this.state.items.map(item => (
						<Item key={item._id} title={item.title} image={item.image} color={item.color} />
					))}
				</Grid>
			</div>
		)
	}
}

export default MyPage
