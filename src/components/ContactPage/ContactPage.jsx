import React from 'react'
import { Link } from 'react-router'
import logo from '../../../public/images/logo.svg'
import './contactpage.css'
import $ from 'jquery'

class ContactPage extends React.Component {

  constructor(props) {
    super(props)

    this.sendEmail = this.sendEmail.bind(this)
    this.renderBtn = this.renderBtn.bind(this)
    this.renderErrors = this.renderErrors.bind(this)

    this.state = { state: 'submit', error: '' }
  }

  sendEmail(e) {
    e.preventDefault()
    if (this.state.state === 'submit') {
      if (!this.refs.text.value || !this.refs.email.value || this.refs.name.value) {
        this.setState({ error: 'Please fill out all required fields' })
        return null
      }
      this.setState({ state: 'submitting' })
      const basicAuth = btoa('kid_BkCLw_dNg:59542cf7ab86454591d5966e7c7c80b1')
      $.ajax({
          url: `https://baas.kinvey.com/rpc/kid_BkCLw_dNg/custom/contact`,
          type: 'POST',
          headers: {
            "Authorization": `Basic ${basicAuth}`
          },
          data: {
            "body": this.refs.text.value,
            "name": this.refs.name.value,
            "email": this.refs.email.value,
            "phone": this.refs.phone.value,
            "website": this.refs.website.value
          },
        })
        .then((r) => {
          this.refs.text.value = ''
          this.refs.name.value = ''
          this.refs.email.value = ''
          this.refs.phone.value = ''
          this.refs.website.value = ''
          this.setState({ state: 'submitted' })
        })
    } else {
      console.error('you are already submitting')
    }
  }

  renderBtn() {
    if (this.state.state === 'submit') {
      return <input type="submit" className="submit" value="Submit your project"/>
    } else if (this.state.state === 'submitting') {
      return <button className="submit submitting"><i className="fa fa-spinner fa-pulse fa-fw"></i></button>
    } else {
      return <button className="submit submitted"><i className="fa fa-check" aria-hidden="true"></i> Submitted</button>
    }
  }

  renderErrors() {
    if (this.state.error) {
      return <p className="error"><i className="fa fa-exclamation" aria-hidden="true"></i> {this.state.error}</p>
    }
  }

  render() {
    return (
      <div className="contact-page">
        <div className="container">
          <Link className="close-btn" to="/"/>
          <img className="logo" src={logo} alt="logo"/>
          <h2>Ok, just a few quick questions.</h2>
          <h3>After you introduce yourself and your project,
              I'll get it touch with you to schedule a time to chat.
              You should expect to hear from me in a day or so.
          </h3>
          {this.renderErrors()}
          <form onSubmit={this.sendEmail.bind(this)}>
            <div className="name-email">
              <input type="text" placeholder="First Name*" ref="name"/>
              <input type="email" placeholder="email*" ref="email"/>
            </div>
            <div className="phone-website">
              <input type="text" placeholder="Phone Number" ref="phone"/>
              <input type="text" placeholder="Website" ref="website"/>
            </div>
            <textarea ref="text" placeholder="Tell me about your project... What is it and How can I help? Timeline and budget details are also appreciated.*" />
            {this.renderBtn()}
          </form>
        </div>
      </div>
    )
  }
}

export default ContactPage
