import React, { Component } from 'react'
import axios from 'axios'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Create from './Create'
import NotFound from './NotFound'
import Navigation from './Navigation'
import Landing from './Landing'
//import './App.css'

class App extends Component {
	componentDidMount() {
		axios.get('/healthcheck').then(res => {
			console.log(res.data)
		})
	}

	render() {
		return (
			<Router>
				<React.Fragment>
					<Navigation />
					<Switch>
						<Route exact path="/" component={Landing} />
						<Route path="/create" component={Create} />
						<Route component={NotFound} />
					</Switch>
				</React.Fragment>
			</Router>
		)
	}
}

export default App
