import React from 'react'
import './review.css'

const Review = ({name, image, text}) => (
  <div className="review">
    <div className="img-container">
      <img src={image} alt="reviewer"/>
    </div>
    <div className="review-content">
      <h4 className="name">{name}</h4>
      <p className="text">{text}</p>
    </div>
  </div>
)

export default Review
