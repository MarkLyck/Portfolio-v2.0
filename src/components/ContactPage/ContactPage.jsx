import React from 'react'
import { Link } from 'react-router'
import logo from '../../../public/images/logo.svg'
import './contactpage.css'
import $ from 'jquery'

class ContactPage extends React.Component {

  sendEmail(e) {
    e.preventDefault()
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
      })
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
          <form onSubmit={this.sendEmail.bind(this)}>
            <div className="name-email">
              <input type="text" placeholder="First Name" ref="name"/>
              <input type="email" placeholder="email" ref="email"/>
            </div>
            <div className="phone-website">
              <input type="text" placeholder="Phone Number" ref="phone"/>
              <input type="text" placeholder="Website" ref="website"/>
            </div>
            <textarea ref="text" placeholder="Tell me about your project... What is it? Why are you doing it? What do you hope to accomplish? How can I help? Timeline and budget details are also appreciated." />
            <input type="submit" className="submit" value="Submit your project"/>
          </form>
        </div>
      </div>
    )
  }
}

export default ContactPage
