import React from 'react'
import './work.css'
import projects from './projects'
import Review from './Review'

class Work extends React.Component {
  render() {
    return (
      <section className="work">
        <h2 className="title">My Work</h2>
        <h3 className="subtitle">Want to see more examples? <a href="mailto:hello@markdid.it">Email me</a>.</h3>
        <ul className="projects">
        {projects.map((project, i) => (
          <li className="project" key={i}>
            <div className="project-container">
              <div className="content">
                <h2 className="project-title">{project.title}</h2>
                <h3 className="project-task">{project.task}</h3>
                <p className="project-desc">{project.description}</p>
                <ul className="cta-list">
                  {project.website ? <a href={project.website} className="CTA">Visit Website</a> : '' }
                  {project.caseStudy ? <a href={project.caseStudy} className="CTA">Case Study</a> : '' }
                  {project.github ? <a href={project.github} className="CTA"><i className="fa fa-github" aria-hidden="true"></i> GitHub</a> : '' }
                </ul>
              </div>
              <div className="mockup">
                <img src={project.image} alt="website screenshot"/>
              </div>
            </div>
            <Review name={project.review.name} image={project.review.image} text={project.review.text} />
            <div className="line"/>
          </li>
        ))}
        </ul>
      </section>
    )
  }
}

export default Work
