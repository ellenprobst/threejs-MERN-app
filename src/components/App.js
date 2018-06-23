import React, { Component } from 'react'
import axios from 'axios'

//import './App.css'

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
			</div>
		)
	}
}

export default App
