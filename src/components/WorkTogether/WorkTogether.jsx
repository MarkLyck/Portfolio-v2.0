import React from 'react'
import $ from 'jquery'
import './worktogether.css'
import Scroll from 'react-scroll'

let Element = Scroll.Element

class WorkTogether extends React.Component {
  componentDidMount() {
    const project1 = $('.work-together').offset().top;
    const screen_height = $(window).height();
    const activation_offset = 0.5;
    const activation_point1 = project1 - (screen_height * activation_offset);

    $(window).on('scroll', () => {
        const y_scroll_pos = window.pageYOffset;
        const project1_in_view = y_scroll_pos > activation_point1 && y_scroll_pos - screen_height / 1.5 < activation_point1;
        if (project1_in_view) { this.props.setPage(7) }
    })
  }

  render() {
    return (
      <section className="work-together">
        <Element name="contact"/>
        <h2 className="title">Let's work together</h2>
        <h3 className="subtitle">
          I'm currently accepting new projects and would love to hear about yours.
          Please take a few minutes to tell me about it.
        </h3>
        <a href="mailto:hello@markdid.it"className="get-in-touch">Get in touch</a>
        <h3 className="also">I’d also be interested in a job interview for a work place that can provide me with a challenge!</h3>
      </section>
    )
  }
}

export default WorkTogether
