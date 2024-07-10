import React from 'react';
import './about.css';
import aboutPic from "../images/aboutPic.jpg";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
function AboutPage(){
  return (
    <div className="about-container">
      <header className="header">
        <h1>
        <ArrowBackIosNewIcon/>
        </h1>
        <h1 className="title"> About Me   </h1>
        <h1>
        <ArrowForwardIosIcon/>
        </h1>
      </header>
      <section className="about-content">
        <div className="about-text">
          <h2>Hi, I'm <b style={{color:"#071952"}}>Sachin</b></h2>
          <p>
            I am a B.Tech student with a strong foundation in Computer Science. I have a deep passion for Data Structures and Algorithms, Computer Networking, Database Management Systems, and Web Development. My journey in technology started from a young age, and over the years, I have honed my skills through various projects and collaborations.
          </p>
          <p>
            Apart from my technical skills, I have also volunteered and participated in numerous conferences and events organized by my department. I believe in continuous learning and am always eager to take on new challenges.
          </p>
          <p>
            In my free time, I enjoy reading, exploring new technologies, and contributing to open-source projects. I am enthusiastic about applying my knowledge and skills to solve real-world problems and make a positive impact.
          </p>
        </div>
        <div className="about-photo">
          <img src={aboutPic} alt="Sachin Aggarwal" />
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
