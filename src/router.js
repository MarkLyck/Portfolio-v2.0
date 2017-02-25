import React from 'react'
import App from './App'
import Home from './components/Home/Home'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

export default () => (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
    </Route>
  </Router>)
