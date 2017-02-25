import React from 'react'

class Project extends React.Component {
  render() {
    return (
      <div className="project" style={{
        backgroundColor: this.props.color,
        backgroundImage: `url(${this.props.mockup})`
      }}>
        <div className="right" style={{
          backgroundColor: this.props.color2,
        }}>
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default Project
