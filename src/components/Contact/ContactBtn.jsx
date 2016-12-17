import React from 'react'
import './contact.css'

class ContactBtn extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <button className="contact-btn">{this.props.text}</button>
    )
  }
}

export default ContactBtn
