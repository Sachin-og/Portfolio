import React from 'react'
import skills from "../skill"
import SkillCard from './skillCard';
import './Homepage.css'

function Skills() {
  const {Languages, Software, Hardware} = skills;
  return (
    <div style={{marginTop:"5rem"}}>
    <h2 style={{color:"#071952"}}>Coding Languages</h2>
    <div className="skills-grid my-3">
     { Languages.map((item) => <SkillCard
     key = {item.id}
      title = {item.title}
      imgUrl = {item.imgIcon}
      sourceUrl ={item.sourceUrl}
      progress={item.progress}
      />)}
      
    </div>
    <h2 style={{color:"#071952"}}>Conceptual Skills</h2>
    <div className="skills-grid my-3">
     { Software.map((item) => <SkillCard
     key = {item.id}
      title = {item.title}
      imgUrl = {item.imgIcon}
      sourceUrl ={item.sourceUrl}
      progress = {item.progress}
      />)}
      
    </div>
    <h2 style={{color:"#071952"}}>Software Specefics</h2>
    <div className="skills-grid my-3">
     { Hardware.map((item) => <SkillCard
      key = {item.id}
      title = {item.title}
      imgUrl = {item.imgIcon}
      sourceUrl ={item.sourceUrl}
      progress={item.progress}
      />)}
      
    </div>
    </div>
  )
}

export default Skills
