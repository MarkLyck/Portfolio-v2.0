import React from 'react'
import logo from '../../../public/images/logo.svg'
import './contact.css'

class ContactBtn extends React.Component {
  constructor(props) {
    super(props)

    this.toggleModal = this.toggleModal.bind(this)

    this.state = { showModal: false }
  }

  toggleModal() {
    this.setState({ showModal: !this.state.showModal })
  }

  render() {
    if (!this.state.showModal) {
      return <button className="contact-btn" onClick={this.toggleModal}>{this.props.text}</button>
    } else {
      return (
        <div className="contact">
          <div className="contact-modal">
            <button className="close-btn" onClick={this.toggleModal}></button>
            <img className="logo" src={logo} alt="logo"/>
            <h2>Ok, just a few quick questions.</h2>
            <h3>After you introduce yourself and your project,
                I'll get it touch with you to schedule a time to chat.
                You should expect to hear from me in a day or so.
            </h3>
            <form>
              <div className="name-email">
                <input type="text" placeholder="First Name"/>
                <input type="email" placeholder="email"/>
              </div>
              <div className="phone-website">
                <input type="text" placeholder="Phone Number"/>
                <input type="text" placeholder="Website"/>
              </div>
              <textarea />
              <input type="submit" className="submit" value="Submit your project"/>
            </form>
          </div>
          <div className="modal-container"/>
          <button className="contact-btn" onClick={this.toggleModal}>{this.props.text}</button>
        </div>)
    }

  }
}

export default ContactBtn
