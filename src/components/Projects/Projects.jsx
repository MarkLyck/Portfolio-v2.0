import React from 'react'
import Project from './Project'
import { Element } from 'react-scroll'
import './projects.css'
import FS from './images/FormulaStocks.png'
import BringTheBand from './images/BringTheBand.png'
import Tether from './images/Tether.png'

class Projects extends React.Component {
  render() {
    return (
      <div className="projects">
        <Element name="projects"/>
        <Project mockup={FS} color="#151515" color2="rgba(29, 29, 29, 0.75)">
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
