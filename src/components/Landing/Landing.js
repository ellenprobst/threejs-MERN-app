import React, { Component } from 'react'
import { Link } from 'react-router-dom'
//import { withStyles } from '@material-ui/core/styles'
//import Button from '@material-ui/core/Button'

import Canvas from '../Canvas'

import './landing.css'

const styles = {
	button: {
		borderColor: '#FFF'
	}
}

const Landing = ({ classes }) => {
	return (
		<div className="container">
			<Canvas width={3} height={3} depth={3} />
			<div className="wrapper">
				<h1 className="header">3D Heroes</h1>
				<h2 className="subheader">Create your own 3D background</h2>
				<Link to="/create">
					<button className="button">Get started</button>
				</Link>
			</div>
		</div>
	)
}

export default Landing
