import React from 'react'
import logo from '../../../public/images/logo.svg'
import './hero.css'
import ContactBtn from '../Contact/ContactBtn'

class Hero extends React.Component {
  render() {
    return (
      <div className="hero">
        <img className="logo" src={logo} alt="logo"/>
        <h1 className="title">Hi! <span className="thin">I'm</span> Mark. <span className="thin">I design & build</span></h1>
        <h1>Landing Pages.</h1>
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
