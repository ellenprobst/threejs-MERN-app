import React, { Component } from 'react'
import axios from 'axios'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { getToken } from '../services/tokenService'
import Create from './Create'
import NotFound from './NotFound'
import Navigation from './Navigation'
import Landing from './Landing'
import MyPage from './MyPage'

//import './App.css'

class App extends Component {
	state = {
		user: null
	}

	componentDidMount() {
		this.getCurrentUser()
	}

	getCurrentUser = async () => {
		const token = getToken()
		if (token) {
			try {
				const res = await axios.get('/users/current', {
					headers: {
						Authorization: `Bearer ${token}`
					}
				})
				const user = res.data

				this.setState({ user })
			} catch (error) {
				console.log(error)
			}
		}
	}

	render() {
		return (
			<Router>
				<div>
					<Navigation user={this.state.user} />
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
