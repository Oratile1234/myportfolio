import React from 'react'
import "./Home.css";
import Me from "../../assets/pic.jpg"
import HeaderSocial from './HeaderSocial';
import ScrollDown from './ScrollDown';



const Home = () => {
  return (
   <section className="home container" id="home">
    <div className="intro">
      <img src={Me} alt="" className="home__img" />
      <h1 className="home__name">Oratile Mabote</h1>
      <span className="home__education">I'm a Full-Stack Developer</span>

      <HeaderSocial />

      <a href="#contact" className="btn">Hire Me</a>

      <ScrollDown />


    </div>
   </section>
  )
}

export default Home
