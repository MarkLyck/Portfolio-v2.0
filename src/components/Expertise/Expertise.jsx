import React from 'react'
import './expertise.css'
import Scroll from 'react-scroll'

let Element = Scroll.Element

class Expertise extends React.Component {
  render() {
    return (
      <section className="expertise">
        <Element name="myExpertise"/>
        <h2 className="title">My Expertise</h2>
        <h3 className="subtitle">I've got chops in all parts of the process</h3>

        <ul>
          <li>
            <i className="fa fa-diamond icon" aria-hidden="true"></i>
            <h3 className="list-title">UX/UI</h3>
            <p>
              I collaborate with clients and peers to transform ideas into well thought out design specs.
              After all, that's where the majority of amazing user experiences start.
              I design with focus on the content structure.
            </p>
          </li>

          <li>
            <i className="fa fa-code icon" aria-hidden="true"></i>
            <h3 className="list-title">Code</h3>
            <p>
              I build complete web applications from scratch using the latest web technologies,
              such as as React. I love JavaScript, HTML and Scss.
              And if a custom backend is required I got that covered with Node and Python.
            </p>
          </li>

          <li>
            <i className="fa fa-magic icon" aria-hidden="true"></i>
            <h3 className="list-title">Extra Touch</h3>
            <p>
              Besides just building websites, I always make sure everything I build is well optimized for both speed and Search engines.
              Everything I build is responsive to look great on any device, and security is top notch.
            </p>
          </li>
        </ul>
      </section>
    )
  }
}

export default Expertise
