import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import Canvas from '../Canvas'

import './landing.css'

const Landing = () => {
	return (
		<div>
			<Canvas color={3} size={5} depth={5} geometry="cube" />
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
