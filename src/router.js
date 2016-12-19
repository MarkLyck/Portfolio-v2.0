import React from 'react'
import App from './App'
import { Router, Route, browserHistory } from 'react-router'

export default () => (
  <Router history={browserHistory}>
    <Route path="/" component={App}>

    </Route>
  </Router>)
