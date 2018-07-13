import React, { Component } from 'react'
import axios from 'axios'

class MyPage extends Component {
	state = {
		items: []
	}
	componentDidMount = async () => {
		const response = await axios.get(`/items?user_id=${this.props.user}`)
		this.setState({ items: response.data })
	}

	render() {
		return (
			<div>
				This is my page and these are my items:
				<div>
					{this.state.items.map(item => (
						<div>
							<p>{item.title}</p>
							<img src={item.image} />
						</div>
					))}
				</div>
			</div>
		)
	}
}

export default MyPage
