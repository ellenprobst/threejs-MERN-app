import React, { Component } from 'react'
import axios from 'axios'

//import './App.css'
import Form from './Form/Form.js'

class App extends Component {
	componentDidMount() {
		axios.get('/healthcheck').then(res => {
			console.log(res.data)
		})
	}

	render() {
		return (
			<div className="App">
				<h1>AppTitle</h1>
				<Form />
			</div>
		)
	}
}

export default App
