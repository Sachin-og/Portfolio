import React from 'react'
import { Link } from 'react-router-dom'
import './Homepage.css';
function SkillCard(props) {
  return (
          <Link target='_blank' to={props.sourceUrl}>
          <div className="skill-item">
            <img src={props.imgUrl} alt={props.title} className="skill-icon" />
            <p>{props.title}</p>
          </div>
          </Link>
  )
}

export default SkillCard
