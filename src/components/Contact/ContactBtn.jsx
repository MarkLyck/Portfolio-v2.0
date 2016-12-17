import React from 'react'
import './contact.css'

class ContactBtn extends React.Component {
  render() {
    return (
      <button className="contact-btn">{this.props.text}</button>
    )
  }
}

export default ContactBtn
