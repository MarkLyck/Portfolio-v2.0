import React from 'react'
import $ from 'jquery'
import _ from 'lodash'
import './toolbelt.css'

import skills from './skills'

class Toolbelt extends React.Component {
  constructor(props) {
    super(props)

    this.hoverEffect = this.hoverEffect.bind(this)
    this.cancelHoverEffect = this.hoverEffect.bind(this)

    this.state = { resized: false, hoverEffect:false, windowWidth: $(window).width() }
  }

  componentDidMount() {
    $(window).resize(() => {
      this.setState({ resize: true, windowWidth: $(window).width() })
    })
  }

  componentWillUnmount() {
    $(window).off('resize')
  }

  hoverEffect(i) {
    this.setState({ hoverEffect: this.state.hoverEffect !== i ? i : false })
  }

  render() {
    const skillWidth = 111
    let maxSkillsInOneList = Math.floor(((this.state.windowWidth - 160) / skillWidth))

    let skillsetItems = skills.map((skill, i) => {
      if (this.state.hoverEffect === i) {
        return (<li key={i} className="skill hover"
                data-name={skill.name}
                onMouseLeave={this.hoverEffect.bind(this, i)}>
                  <img src={skill.img} alt="skill"/>
                </li>)
      } else if (this.state.hoverEffect !== false) {
        return (<li key={i} className="skill unselected"
                data-name={skill.name}
                onMouseOver={this.hoverEffect.bind(this, i)}>
                  <img src={skill.img} alt="skill"/>
                </li>)
      } else {
        return (<li key={i} className="skill"
                data-name={skill.name}
                onMouseOver={this.hoverEffect.bind(this, i)}>
                  <img src={skill.img} alt="skill"/>
                </li>)
      }
    })

    let skillLists = []

    let numberOfLists = Math.ceil(skillsetItems.length / (maxSkillsInOneList - 0.5))

    console.log('number of lists: ', numberOfLists)

    if (numberOfLists === 8 && skillsetItems.length === 25) {
      numberOfLists--
    }

    while (skillLists.length < numberOfLists) { skillLists.push('list') }

    let currentSkill = 0;

    skillLists = skillLists.map((skillList, i) => {
      let skillsInList = [];
      if(i % 2 === 0) {
        while (skillsInList.length < maxSkillsInOneList) {
          skillsInList.push(skillsetItems[currentSkill]);
          currentSkill++;
        }
      } else {
        while (skillsInList.length < (maxSkillsInOneList - 1)) {
          skillsInList.push(skillsetItems[currentSkill]);
          currentSkill++;
        }
      }

      skillsInList = _.without(skillsInList, undefined);

      let skillsInAboveList = maxSkillsInOneList
      if ((numberOfLists - 2) % 2 !== 0) { skillsInAboveList = maxSkillsInOneList - 1 }

      let aboveListIsEven = true;
      if (skillsInAboveList % 2 !== 0) { aboveListIsEven = false; }

      let lastListIsEven = true;
      if ((skillsInList.length) % 2 !== 0) { lastListIsEven = false; }

      if (currentSkill >= skillsetItems.length && aboveListIsEven === lastListIsEven) {
        return (<ul className="skill-list" key={i} style={{marginRight: "110px"}}>{skillsInList}</ul>);
      } else {
        return (<ul className="skill-list" key={i}>{skillsInList}</ul>);
      }
    })


    return (
      <section className="toolbelt">
        <h2 className="title">My Toolbelt</h2>
        <h3 className="subtitle">These are some of the tools I use to build websites</h3>
        <div className="skills-container">
          {skillLists}
        </div>
      </section>
    )
  }
}

export default Toolbelt
