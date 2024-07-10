import React from 'react'
import Card from "./Card"
import HandymanIcon from '@mui/icons-material/Handyman';
import items from "../projectItems"
function Projects() {
  return (
    <div className="container text-center">


      <h2 style ={{marginTop : "5rem", color:"black"}}>
        <HandymanIcon/>  My Projects  <HandymanIcon/> </h2>
   
    <div className="row">
        <div className="col mx-3 my-3">
        <Card
        key = {items[0].id}
        title = {items[0].title}
        text = {items[0].text}
        imgUrl = {items[0].imgUrl}
        sourceUrl = {items[0].sourceUrl}

        />
        </div>
        <div className="col mx-3 my-3"> 
        <Card
        key = {items[1].id}
        title = {items[1].title}
        text = {items[1].text}
        imgUrl = {items[1].imgUrl}
        sourceUrl = {items[1].sourceUrl}

        />
        </div>
        <div className="col mx-3 my-3">
        <Card
        key = {items[2].id}
        title = {items[2].title}
        text = {items[2].text}
        imgUrl = {items[2].imgUrl}
        sourceUrl = {items[2].sourceUrl}

        />
        </div>
    </div>
    <div className="row">
        <div className="col mx-3 my-3">
        <Card
        key = {items[3].id}
        title = {items[3].title}
        text = {items[3].text}
        imgUrl = {items[3].imgUrl}
        sourceUrl = {items[3].sourceUrl}

        />
        </div>
        <div className="col mx-3 my-3">
        <Card
        key = {items[4].id}
        title = {items[4].title}
        text = {items[4].text}
        imgUrl = {items[4].imgUrl}
        sourceUrl = {items[4].sourceUrl}

        />
        </div>
        <div className="col mx-3 my-3">
        <Card
        key = {items[5].id}
        title = {items[5].title}
        text = {items[5].text}
        imgUrl = {items[5].imgUrl}
        sourceUrl = {items[5].sourceUrl}

        />
        </div>
    </div>
    </div>

  )
}

export default Projects
