import React from 'react'
import Navigation from '../Navigation/Navigation'
import Hero from '../Hero/Hero'
import Projects from '../Projects/Projects'
import Toolbelt from '../Toolbelt/Toolbelt'
import Testimonials from '../Testimonials/Testimonials'
import WorkTogether from '../WorkTogether/WorkTogether'
import Footer from '../Footer/Footer'

class Home extends React.Component {
  constructor() {
    super()
    this.setPage = this.setPage.bind(this)
    this.state = { page: 0 }
  }

  setPage(number) {
    this.setState({ page: number })
  }

  render() {
    return (
      <div className="App">
        <Navigation page={this.state.page}/>
        <Hero setPage={this.setPage}/>
        <Projects setPage={this.setPage}/>
        <Testimonials setPage={this.setPage}/>
        <Toolbelt setPage={this.setPage}/>
        <WorkTogether setPage={this.setPage}/>
        <Footer />
      </div>
    )
  }
}

export default Home
