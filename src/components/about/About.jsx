import React from 'react'
import "./About.css"
import Image from "../../assets/pic.jpg";


const About = () => {
  return (
    <section className="about container section" id='about'>
      <h2 className="section__title">About Me</h2>

      <div className="about__container grid">
        <img src={Image} alt="" className="about__img" />

        <div className="about__data grid">
          <div className="about__info">
            <p className="about__description">
              tyuiortryuiyuioxjewmxejilwkxrmrjeknmlrkejc
              xebuwhiexuexrqemrimeq\
              rmjieicerjcie
              krecor
            </p>
            <a href="" className="btn"> Download CV </a>
          </div>

          <div className="about__skills grid">

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name"> Development</h3>
                {/* <span className="skills__number "> 90%</span> */}
              </div>

              <div className="skills__bar">
                <span className="skills__percentage development"></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">UI/UX design</h3>
                {/* <span className="skills__number"> 80%</span> */}
              </div>

              <div className="skills__bar">
                <span className="skills__percentage ui__design"></span>
              </div>

            </div>

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">HTML & CSS</h3>
                {/* <span className="skills__number">80%</span> */}
              </div>

              <div className="skills__bar">
                <span className="skills__percentage html"></span>
              </div>

            </div>

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name"> Node.js</h3>
                {/* <span className="skills__number">75%</span> */}
              </div>

              <div className="skills__bar">
                <span className="skills__percentage node"></span>
              </div>

            </div>

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Angular2+</h3>
                {/* <span className="skills__number">70%</span> */}
              </div>

              <div className="skills__bar">
                <span className="skills__percentage angular"></span>
              </div>

            </div>

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Docker</h3>
                {/* <span className="skills__number">60%</span> */}
              </div>

              <div className="skills__bar">
                <span className="skills__percentage docker"></span>
              </div>

            </div>

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Git</h3>
                {/* <span className="skills__number">65%</span> */}
              </div>

              <div className="skills__bar">
                <span className="skills__percentage git"></span>
              </div>

            </div>

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">PostgreSQL</h3>
                {/* <span className="skills__number">80%</span> */}
              </div>

              <div className="skills__bar">
                <span className="skills__percentage PostgreSQL"></span>
              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default About
