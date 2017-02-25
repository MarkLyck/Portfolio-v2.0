import React from 'react'
import $ from 'jquery'
import Project from './Project'
import { Element } from 'react-scroll'
import './projects.css'
import FS from './images/FormulaStocks.png'
import BringTheBand from './images/BringTheBand.png'
import Tether from './images/Tether.png'

class Projects extends React.Component {
  componentDidMount() {
    const project1 = $('.project-1').offset().top;
    const project2 = $('.project-2').offset().top;
    const project3 = $('.project-3').offset().top;
    const screen_height = $(window).height();
    const activation_offset = 0.4;
    const activation_point1 = project1 - (screen_height * activation_offset);
    const activation_point2 = project2 - (screen_height * activation_offset);
    const activation_point3 = project3 - (screen_height * activation_offset);

    $(window).on('scroll', () => {
        const y_scroll_pos = window.pageYOffset;

        const project1_in_view = y_scroll_pos > activation_point1 && y_scroll_pos - screen_height/1.5 < activation_point1;
        const project2_in_view = y_scroll_pos > activation_point2 && y_scroll_pos - screen_height/1.5 < activation_point2;
        const project3_in_view = y_scroll_pos > activation_point3 && y_scroll_pos - screen_height/1.5 < activation_point3;

        if (project1_in_view) { this.props.setPage(1) }
        if (project2_in_view) { this.props.setPage(2) }
        if (project3_in_view) { this.props.setPage(3) }
    })
  }
  render() {
    return (
      <div className="projects">
        <Element name="projects"/>
        <Project mockup={FS} color="#151515" color2="rgba(29, 29, 29, 0.75)">
          <Element className="element project-1" name="project-1"/>
          <h2 className="project-title">Formula Stocks</h2>
          <h3 className="project-position" style={{ color: '#27A5F9' }}>Designer & Developer</h3>
          <div className="divider" style={{ background: '#27A5F9' }}/>
          <p className="description">
            Formula Stocks is a game changing investment firm, based out of Denmark. They utilize their
            proprietary investment technology, to beat the stock market >90% of the time for long term growth and
            profitability.
          </p>
          <a className="view-project" href="https://formulastocks.com">View project</a>
        </Project>
        <Project mockup={BringTheBand} color="#132B33" color2="rgba(28, 63, 75,0.75)">
          <Element className="element project-2" name="project-2"/>
          <h2 className="project-title">Bring the band</h2>
          <h3 className="project-position" style={{ color: '#1DBB86' }}>Designer & Developer</h3>
          <div className="divider" style={{ background: '#1DBB86' }}/>
          <p className="description">
            Bring the Band, allows users to vote on their favorite bands to attend a festival. They can purchase
            tickets to the festival, through secure credit card transactions. Listen to music and more.
          </p>
          <a className="view-project" href="https://marklyck.github.io/Bring-the-Band">View project</a>
        </Project>
        <Project mockup={Tether} color="#2D353F" color2="rgba(57, 70, 85,0.75)">
          <Element className="element project-3" name="project-3"/>
          <h2 className="project-title">Tether</h2>
          <h3 className="project-position" style={{ color: '#fff' }}>Fullstack Developer</h3>
          <div className="divider" style={{ background: '#fff' }}/>
          <p className="description">
            Tether is a group discovery and management platform. Connecting students to organizations on their
            campus, and clears the way for organizations to easily manage their events, transactions and members.
          </p>
          <a className="view-project" href="https://tether.college">View project</a>
        </Project>
      </div>
    )
  }
}

export default Projects
