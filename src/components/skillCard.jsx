import React from 'react'
import { Link } from 'react-router-dom'
import './Homepage.css';
function SkillCard(props) {
  return (
          <Link target='_blank' to={props.sourceUrl}>
          <div className="skill-item">
            <img src={props.imgUrl} alt={props.title} className="skill-icon" />
            <p>{props.title}</p>
            <div style = {{height : "10px"}}className="progress">
  <div className="progress-bar" role="progressbar" style={{width: props.progress}} aria-valuenow="10" aria-valuemin="0" aria-valuemax="100">{props.progress}</div>
</div>
          </div>
          </Link>
  )
}

export default SkillCard
