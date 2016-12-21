import React from 'react'
import App from './App'
import Home from './components/Home/Home'
import ContactPage from './components/ContactPage/ContactPage'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

export default () => (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="contact" component={ContactPage}/>
    </Route>
  </Router>)
