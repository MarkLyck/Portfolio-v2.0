import React from 'react'
import Slider from 'react-slick'
import Quotes from './quotes.svg'
import './testimonials.css'
import Katy from './images/Katy.jpg'
import Carey from './images/Carey.jpg'
import Ben from './images/BenGillin.jpg'
import Thomas from './images/Thomas.jpg'

class Testimonials extends React.Component {
  constructor(props) {
    super(props)

    this.goToSlide = this.goToSlide.bind(this)

    this.state = { slide: 0 }
  }

  goToSlide(slide) {
    this.refs.slider.slickGoTo(slide)
    this.setState({ slide: slide })
  }

  render() {
    const sliderSettings = {
      dots: false,
      arrows: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      swipeToSlide: false,
      swipe: false,
      touchMove: false,
    }
    return (
      <div className="testimonials">
        <img className="quote" src={Quotes} alt="quote"/>
        <Slider {...sliderSettings} ref="slider">
          <div className="slide">
            <p className="text">
              Mark Lyck has a natural gift when it comes to building with code. He has a fine eye for what makes
              an app aesthetically pleasing and his strong JavaScript skills are supported by beautiful UI. My
              idea of a dream dev team would include Mark Lyck.
            </p>
            <p className="author">Katy Cassidy</p>
            <p className="position">Web developer</p>
          </div>
          <div className="slide">
            <p className="text">
              I appreciate your work more than I could ever express.
            </p>
            <p className="author">Carey Janecka</p>
            <p className="position">CEO - Tether Technologies</p>
          </div>
          <div className="slide">
            <p className="text">
              Mark’s work is exceptional and he's a joy to work with. I can tell he'll go far in his career.
              You'd be lucky to have him on your team.
            </p>
            <p className="author">Ben Gillin</p>
            <p className="position">UX and design instructor</p>
          </div>
          <div className="slide">
            <p className="text">
              Mark’s designs are beautiful, not average and has character. I’m proud of the website he put
              together.
            </p>
            <p className="author">Thomas Lyck</p>
            <p className="position">CEO - Formula Stocks</p>
          </div>
        </Slider>
        <ul className="authors">
          <img className={ this.state.slide === 0 ? "dots-author selected" : "dots-author" } onClick={this.goToSlide.bind(this, 0)} src={Katy} alt="author"/>
          <img className={ this.state.slide === 1 ? "dots-author selected" : "dots-author" } onClick={this.goToSlide.bind(this, 1)} src={Carey} alt="author"/>
          <img className={ this.state.slide === 2 ? "dots-author selected" : "dots-author" } onClick={this.goToSlide.bind(this, 2)} src={Ben} alt="author"/>
          <img className={ this.state.slide === 3 ? "dots-author selected" : "dots-author" } onClick={this.goToSlide.bind(this, 3)} src={Thomas} alt="author"/>
        </ul>
      </div>
    )
  }
}

export default Testimonials
