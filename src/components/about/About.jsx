import React from 'react'
import "./About.css"
import Image from "../../assets/pic.jpg";
import CV from "../../assets/cv.pdf";


const About = () => {
  return (
    <section className="about container section" id='about'>
      <h2 className="section__title">About Me</h2>

      <div className="about__container grid">
        <img src={Image} alt="" className="about__img" />

        {/* <div className="about__data grid"> */}
          <div className="about__info">
            <p className="about__description">
            I am an open-minded, technical person that enjoys working with computers and learning new technologies. I have
experience working with SQL and databases. I have a passion to learn programming and I want to grow my skills as a
software developer.
            </p>
            <a href={CV} className="btn"> Download CV </a>
          </div>

        
        {/* </div> */}
      </div>
    </section>
  )
}

export default About
