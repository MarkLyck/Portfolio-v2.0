import React from 'react'
import { Link } from 'react-scroll'
import './navigation.css'

class Navigation extends React.Component {
  render() {
    return (
      <ul className="navigation">
        <Link className={ this.props.page === 0 ? "dot current" : "dot" } smooth={true} to="hero" offset={0}/>
        <Link className={ this.props.page === 1 ? "dot current" : "dot" } smooth={true} to="project-1" offset={0}/>
        <Link className={ this.props.page === 2 ? "dot current" : "dot" } smooth={true} to="project-2" offset={0}/>
        <Link className={ this.props.page === 3 ? "dot current" : "dot" } smooth={true} to="project-3" offset={0}/>
        <Link className={ this.props.page === 4 ? "dot current" : "dot" } smooth={true} to="testimonials" offset={0}/>
        <Link className={ this.props.page === 5 ? "dot current" : "dot" } smooth={true} to="toolbelt" offset={-80}/>
        <Link className={ this.props.page === 6 ? "dot current" : "dot" } smooth={true} to="contact" offset={-80}/>
      </ul>
    )
  }
}

export default Navigation
