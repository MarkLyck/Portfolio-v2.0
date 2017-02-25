import React from 'react'
import $ from 'jquery'
import _ from 'lodash'
import { Element } from 'react-scroll'
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

    const project1 = $('.toolbelt').offset().top;
    const screen_height = $(window).height();
    const activation_offset = 0.5;
    const activation_point1 = project1 - (screen_height * activation_offset);

    $(window).on('scroll', () => {
        const y_scroll_pos = window.pageYOffset;
        const project1_in_view = y_scroll_pos > activation_point1 && y_scroll_pos - screen_height/1.5 < activation_point1;
        if (project1_in_view) { this.props.setPage(5) }
    })
  }

  componentWillUnmount() {
    $(window).off('resize')
  }

  hoverEffect(i) {
    this.setState({ hoverEffect: this.state.hoverEffect !== i ? i : false })
  }

  render() {
    let skillWidth = 110
    let margin = 120
    let maxSkillsInOneList = Math.floor(((this.state.windowWidth - (margin * 2)) / skillWidth))

    const cutoffpoint = 641

    if (this.state.windowWidth < cutoffpoint) {
      skillWidth = 64
      margin = 64
      maxSkillsInOneList = Math.floor(((this.state.windowWidth - (margin * 2)) / skillWidth))
    }

    let skillsetItems = skills.map((skill, i) => {
      let skillClasses = 'skill'
      if (this.state.hoverEffect === i) {
         skillClasses += ' hover'
         return (<li key={i} className={skillClasses}
                 data-name={skill.name}
                 onMouseLeave={this.hoverEffect.bind(this, i)}>
                   <img src={skill.img} alt="skill"/>
                 </li>)
      } else if (this.state.hoverEffect !== false) { skillClasses += ' unselected' }

      return (<li key={i} className={skillClasses}
              data-name={skill.name}
              onMouseOver={this.hoverEffect.bind(this, i)}>
                <img src={skill.img} alt="skill"/>
              </li>)
    })

    let skillLists = []
    let numberOfLists = Math.round(skillsetItems.length / (maxSkillsInOneList - 0.5))

    while (skillLists.length < numberOfLists) { skillLists.push('list') }

    let currentSkill = 0

    let numberOfSkillsInLastList = 0
    let numberOfSkillsInThisList = 0

    skillLists = skillLists.map((skillList, i) => {
      numberOfSkillsInThisList = 0

      let maxNumberOfSkillsInThisList = maxSkillsInOneList
      if(i % 2 !== 0) { maxNumberOfSkillsInThisList-- }

      let skillsInList = []
      while (skillsInList.length <= maxNumberOfSkillsInThisList) {
        skillsInList.push(skillsetItems[currentSkill])
        if (skillsetItems[currentSkill]) {
          numberOfSkillsInThisList++
        }
        currentSkill++
      }


      skillsInList = _.without(skillsInList, undefined)

      // If they are both even or uneven.
      if ((numberOfSkillsInLastList % 2 === 0 && numberOfSkillsInThisList % 2 === 0) || (numberOfSkillsInLastList % 2 !== 0 && numberOfSkillsInThisList % 2 !== 0)) {
        // if it's the last list
        if (i === skillLists.length - 1) {
          return <ul className="skill-list" key={i} style={{marginRight: `${skillWidth}px`}}>{skillsInList}</ul>
        }
      }

      numberOfSkillsInLastList = numberOfSkillsInThisList
      return (<ul className="skill-list" key={i}>{skillsInList}</ul>)
    })


    return (
      <section className="toolbelt">
        <Element name="toolbelt"/>
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
