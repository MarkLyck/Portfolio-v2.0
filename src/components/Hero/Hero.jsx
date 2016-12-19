import React from 'react'
import $ from 'jquery'
import logo from '../../../public/images/logo.svg'
import './hero.css'
import ContactBtn from '../Contact/ContactBtn'
import '../../libraries/typed.js'

class Hero extends React.Component {
  componentDidMount() {
    $("#build").typed({
        stringsElement: $('#builds'),
        typeSpeed: 0,
        loop: true,
        showCursor: true,
        cursorChar: "|",
        backDelay: 1500,
        backSpeed: 0,
    })
  }

  render() {
    return (
      <div className="hero">
          <img className="logo" src={logo} alt="logo"/>
          <h1 className="title">Hi! <span className="thin">I'm</span> Mark. <span className="thin">I design & build</span></h1>
          <div className="typed">
            <h1 id="build"></h1>
            <div id="builds">
              <h1>web applications.</h1>
              <h1>landing pages.</h1>
              <h1>user interfaces.</h1>
              <h1>corporate websites.</h1>
              <h1>your project!</h1>
            </div>
          </div>
          <ContactBtn text="Yes, I'm available for hire"/>
          <div className="learn-more">
            <p>Learn more about what I do</p>
            <i className="fa fa-chevron-down" aria-hidden="true"></i>
          </div>
      </div>
    )
  }
}

export default Hero
