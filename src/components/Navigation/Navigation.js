import React from 'react'
import './navigation.css'

import { Link } from 'react-router-dom'

const Navigation = ({ user }) => {
	return (
		<div className="nav">
			<div>Logo</div>
			<ul className="list">
				<li>
					<Link to={`/`} className="link">
						Home
					</Link>
				</li>
				<li>
					<Link to={`/create`} className="link">
						Create
					</Link>
				</li>
				<li>
					<Link to={`/mypage`} className="link">
						MyPage
					</Link>
				</li>
			</ul>
		</div>
	)
}

export default Navigation
