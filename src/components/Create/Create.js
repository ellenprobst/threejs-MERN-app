import React, { Component } from 'react'

import Form from '../Form'
import Navigation from '../Navigation'
import './create.css'

class Create extends Component {
	render() {
		return (
			<div className="App">
				<Navigation />
				<h1>Create</h1>
				<Form />
			</div>
		)
	}
}

export default Create
