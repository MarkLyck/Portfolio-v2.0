import React from 'react'
import './personalprojects.css'

import AimiImage from './images/Aimi.png'
import StocksImage from './images/Stocks.png'
import IotImage from './images/iot.png'

class PersonalProjects extends React.Component {
  render() {
    return (
      <section className="personal-projects">
        <h2 className="title">Personal Projects</h2>
        <h3 className="subtitle">When I'm not freelancing I'm honing my skills.</h3>
        <ul className="personal-project-list">
          <li className="personal-project">
            <img className="project-image" src={AimiImage} alt="Aimi"/>
            <p className="description">
              AIMI is a conversational AI, built on a sequence to secuence neural network,
              with Python & Tensorflow. It’s trained on subtitles from over 700 movies.
              With my own Natural Language language processing layer.
            </p>
          </li>

          <li className="personal-project">
            <img className="project-image" src={StocksImage} alt="Aimi"/>
            <p className="description">
              I’m attempting to find an advantage in the stock market,
              using my own sentiment analasys neural network to identify positive or negative
              news on large corporations, to correlate with changes in their stock prices.
            </p>
          </li>

          <li className="personal-project">
            <img className="project-image" src={IotImage} alt="Aimi"/>
            <p className="description">
              When I’m not working on other projects, I’m working on creating new smart home devices.
              Whether I’m programming a little rotor to open my curtains in the morning,
              or a camera to turn on when I leave the house. I love home automation devices.
            </p>
          </li>
        </ul>
      </section>
    )
  }
}

export default PersonalProjects
