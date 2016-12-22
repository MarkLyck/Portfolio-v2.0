import React from 'react'
import ContactBtn from '../Contact/ContactBtn'
import './worktogether.css'
import Scroll from 'react-scroll'

let Element = Scroll.Element

class WorkTogether extends React.Component {
  render() {
    return (
      <section className="work-together">
        <Element name="letsWorkTogether"/>
        <h2 className="title">Let's work together</h2>
        <h3 className="subtitle">
          I'm currently accepting new projects and would love to hear about yours.
          Please take a few minutes to tell me about it.
        </h3>
        <ContactBtn text="Get Started"/>
        <h3 className="also">I’d also be interested in a job interview for a work place that can provide me with a challenge!</h3>
      </section>
    )
  }
}

export default WorkTogether
