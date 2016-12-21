import React from 'react'
import logo from '../../../public/images/logo.svg'
import './footer.css'

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <img src={logo} alt="logo" className="logo"/>
        <h3 className="copyright">Handmade by me © 2016</h3>
        <ul className="footer-links">
          <a className="footer-link"><i className="fa fa-envelope" aria-hidden="true"></i></a>
          <a className="footer-link"><i className="fa fa-twitter" aria-hidden="true"></i></a>
          <a className="footer-link"><i className="fa fa-linkedin" aria-hidden="true"></i></a>
          <a className="footer-link"><i className="fa fa-medium" aria-hidden="true"></i></a>
          <a className="footer-link"><i className="fa fa-github" aria-hidden="true"></i></a>
        </ul>
      </footer>
    )
  }
}

export default Footer
