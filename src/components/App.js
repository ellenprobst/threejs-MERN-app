import React, { Component } from 'react'
import axios from 'axios'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Create from './Create'
import NotFound from './NotFound'
import Navigation from './Navigation'
import Landing from './Landing'
import MyPage from './MyPage'

//import './App.css'

class App extends Component {
	state = {
		user: '5b341f87211b090dd4e1e5d8'
	}
	componentDidMount() {
		axios.get('/healthcheck').then(res => {
			console.log(res.data)
		})
	}

	render() {
		return (
			<Router>
				<div>
					<Navigation />
					<Switch>
						<Route exact path="/" component={Landing} />
						<Route path="/create" render={() => <Create user={this.state.user} />} />
						<Route path="/myPage" render={() => <MyPage user={this.state.user} />} />
						<Route component={NotFound} />
					</Switch>
				</div>
			</Router>
		)
	}
}

export default App
