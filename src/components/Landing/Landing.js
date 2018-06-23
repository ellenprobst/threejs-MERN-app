import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'

import Navigation from '../Navigation'
import './landing.css'

const styles = {
	button: {
		borderColor: '#FFF'
	}
}

const Landing = ({ classes }) => {
	return (
		<div className="container">
			<Navigation />
			<div className="">
				<h1 className="header">Welcome</h1>
				<h2 className="subtitle">Create your own 3D background</h2>
				<Link to="/create">
					<Button type="submit" variant="outlined" size="medium" color="primary" className={classes.button}>
						Get started
					</Button>
				</Link>
			</div>
		</div>
	)
}

export default withStyles(styles)(Landing)
