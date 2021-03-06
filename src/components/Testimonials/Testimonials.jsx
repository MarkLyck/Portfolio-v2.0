import React from 'react'
import $ from 'jquery'
import Slider from 'react-slick'
import Quotes from './quotes.svg'
import {Element} from 'react-scroll'
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

  componentDidMount() {
    const project1 = $('.testimonials').offset().top;
    const screen_height = $(window).height();
    const activation_offset = 0.5;
    const activation_point1 = project1 - (screen_height * activation_offset);

    $(window).on('scroll', () => {
        const y_scroll_pos = window.pageYOffset;

        const project1_in_view = y_scroll_pos > activation_point1 && y_scroll_pos - screen_height/1.5 < activation_point1;

        if (project1_in_view) { this.props.setPage(5) }
    })
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
      swipeToSlide: true,
      swipe: false,
      touchMove: false,
      fade: true
    }
    return (
      <div className="testimonials">
        <Element name="testimonials"/>
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
