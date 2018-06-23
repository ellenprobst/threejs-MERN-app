import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import App from './App'
import Create from './Create/Create'
import NotFound from './NotFound'
import Navigation from './Navigation'

const Router = () => (
	<Router>
		<React.Fragment>
			<Navigation />
			<Switch>
				<Route exact path="/" component={App} />
				<Route path="/create" component={Create} />
				<Route component={NotFound} />
			</Switch>
		</React.Fragment>
	</Router>
)

export default Router
