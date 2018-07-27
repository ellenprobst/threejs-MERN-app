import React from 'react'
import './navigation.css'
import Code from '@material-ui/icons/Code'
import { Link } from 'react-router-dom'

const Navigation = () => {
	return (
		<div className="nav">
			<Code />
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
