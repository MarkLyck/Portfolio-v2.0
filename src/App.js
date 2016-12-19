import React, { Component } from 'react'
import Hero from './components/Hero/Hero'
import Expertise from './components/Expertise/Expertise'
import Work from './components/Work/Work'
import Toolbelt from './components/Toolbelt/Toolbelt'
import PersonalProjects from './components/PersonalProjects/PersonalProjects'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Hero />
        <Expertise />
        <Work />
        <Toolbelt />
        <PersonalProjects />
      </div>
    )
  }
}

export default App
