import React from 'react'
import Hero from '../Hero/Hero'
import Projects from '../Projects/Projects'
import Toolbelt from '../Toolbelt/Toolbelt'
import Testimonials from '../Testimonials/Testimonials'
import WorkTogether from '../WorkTogether/WorkTogether'
import Footer from '../Footer/Footer'

class Home extends React.Component {
  render() {
    return (
      <div className="App">
        <Hero />
        <Projects/>
        <Testimonials />
        <Toolbelt />
        <WorkTogether />
        <Footer />
      </div>
    )
  }
}

export default Home
