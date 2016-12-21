import React from 'react'
import Hero from '../Hero/Hero'
import Expertise from '../Expertise/Expertise'
import Work from '../Work/Work'
import Toolbelt from '../Toolbelt/Toolbelt'
import PersonalProjects from '../PersonalProjects/PersonalProjects'
import WorkTogether from '../WorkTogether/WorkTogether'
import Footer from '../Footer/Footer'

class Home extends React.Component {
  render() {
    return (
      <div className="App">
        <Hero />
        <Expertise />
        <Work />
        <Toolbelt />
        <PersonalProjects />
        <WorkTogether />
        <Footer />
      </div>
    )
  }
}

export default Home
