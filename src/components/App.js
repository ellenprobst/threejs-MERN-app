import React, { Component } from 'react'
import axios from 'axios'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { getToken, removeToken } from '../services/tokenService'
import Create from './Create'
import NotFound from './NotFound'
import Navigation from './Navigation'
import Landing from './Landing'
import Login from './Login'
import MyPage from './MyPage'
import ItemPage from './ItemPage'

class App extends Component {
	state = {
		user: null,
		showLogin: false
	}

	componentDidMount() {
		this.getCurrentUser()
	}

	setUser = user => {
		console.log('calling user', user)
		this.setState({ user })
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

	logout = () => {
		this.setState({ user: null })
		removeToken()
	}
	toggleLogin = () => this.setState(prevState => ({ showLogin: !prevState.showLogin }))

	render() {
		return (
			<Router>
				<div>
					<Navigation user={this.state.user} toggleLogin={this.toggleLogin} logout={this.logout} />
					{this.state.showLogin && !this.state.user && <Login hideLogin={this.toggleLogin} setUser={this.setUser} />}
					<Switch>
						<Route exact path="/" component={Landing} />
						<Route path="/create" render={() => <Create user={this.state.user} setUser={this.setUser} />} />
						<Route exact path="/myPage" render={() => <MyPage user={this.state.user} setUser={this.setUser} />} />
						<Route path="/myPage/:item_id" component={ItemPage} />
						<Route component={NotFound} />
					</Switch>
				</div>
			</Router>
		)
	}
}

export default App
