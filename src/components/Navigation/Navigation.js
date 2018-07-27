import React from 'react'
import './navigation.css'
import Code from '@material-ui/icons/Code'
import { Link } from 'react-router-dom'
import { Button } from '../GlobalStyles'

import styled, { css, keyframes } from 'styled-components'

const Item = styled.li`
	align-self: center;
`

const Navigation = ({ toggleLogin, user, logout }) => {
	return (
		<div className="nav">
			<Code />
			<ul className="list">
				<Item>
					<Link to={`/`} className="link">
						Home
					</Link>
				</Item>
				<Item>
					<Link to={`/create`} className="link">
						Create
					</Link>
				</Item>
				<Item>
					<Link to={`/mypage`} className="link">
						MyPage
					</Link>
				</Item>
				{user ? (
					<Button small onClick={logout}>
						Logout
					</Button>
				) : (
					<Button small onClick={toggleLogin}>
						Login
					</Button>
				)}
			</ul>
		</div>
	)
}

export default Navigation
