/*eslint-disable */
import React from 'react'
import $ from 'jquery'
import logo from '../../../public/images/logo.svg'
import 'particles.js'
import './hero.css'
import '../../libraries/typed.js'
import { Element, Link } from 'react-scroll'
import particleConfig from './particles.json'

class Hero extends React.Component {
  componentDidMount() {
    particlesJS("particles-js", particleConfig, () => {
      console.log('particles loaded');
    })
    $("#build").typed({
        stringsElement: $('#builds'),
        typeSpeed: 0,
        loop: true,
        showCursor: true,
        cursorChar: "|",
        backDelay: 1500,
        backSpeed: 0,
    })
    const screen_height = $(window).height()
    $(window).on('scroll', () => {
        const y_scroll_pos = window.pageYOffset
        if (y_scroll_pos < 100) {
          this.props.setPage(0)
        }
    })
  }

  render() {
    return (
      <div className="hero">
        <Element name="hero"/>
          <img className="logo" src={logo} alt="logo"/>
          <div className="content">
            <h1 className="title">Hi! <span className="thin">I'm</span> Mark. <span className="thin">I design & build</span></h1>
            <div className="typed">
              <h1 id="build"></h1>
              <div id="builds">
                <h1>web applications.</h1>
                <h1>landing pages.</h1>
                <h1>user interfaces.</h1>
                <h1>corporate websites.</h1>
                <h1>websites people love using!</h1>
              </div>
            </div>
          </div>
          <Link to="projects" className="learn-more" smooth={true} offset={0}>
            <p>See my latest projects</p>
            <i className="fa fa-chevron-down" aria-hidden="true"></i>
          </Link>
          <div id="particles-js"></div>
      </div>
    )
  }
}

export default Hero
