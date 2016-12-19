import React, { Component } from 'react'
import Hero from './components/Hero/Hero'
import Expertise from './components/Expertise/Expertise'
import Work from './components/Work/Work'
import Toolbelt from './components/Toolbelt/Toolbelt'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Hero />
        <Expertise />
        <Work />
        <Toolbelt />
      </div>
    )
  }
}

export default App
