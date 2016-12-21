import React from 'react'
import { browserHistory } from 'react-router'
import './contact.css'

class ContactBtn extends React.Component {
  constructor(props) {
    super(props)

    this.goToContact = this.goToContact.bind(this)

    this.state = { goToContact: false }
  }

  goToContact() {
    this.setState({ goToContact: true })
    window.setTimeout(() => { browserHistory.push('/contact') }, 1500)
  }

  render() {
    if (!this.state.goToContact) {
      return <button className="contact-btn" onClick={this.goToContact}>{this.props.text}</button>
    } else {
      return <button className="contact-btn circle">{this.props.text}</button>
    }

  }
}

export default ContactBtn
