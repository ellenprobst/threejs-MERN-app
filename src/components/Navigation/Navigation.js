import React, { Component } from 'react'
import './navigation.css'
class Navigation extends Component {
	render() {
		return (
			<div className="nav">
				<div>Logo</div>
				<ul className="list">
					<li>
						<a className="link" href="#home">
							Home
						</a>
					</li>
					<li>
						<a className="link" href="#create">
							Create
						</a>
					</li>
					<li>
						<a className="link" href="#myPage">
							MyPage
						</a>
					</li>
				</ul>
			</div>
		)
	}
}

export default Navigation
