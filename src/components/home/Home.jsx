import React from 'react'
import "./Home.css";
import Me from "../../assets/pic.jpg"
import HeaderSocial from './HeaderSocial';
import ScrollDown from './ScrollDown';
import { motion } from "framer-motion"




const Home = () => {

  return (
   <section className="home container" id="home">
    <div className="intro">
      <motion.img 
      animate={{
        scale: [2, 1, 1, 2, 1],
        rotate: [0, 0, 270, 270, 0],
        borderRadius: ["20%", "40%", "50%", "20%", "50%"],
      }}
      src={Me} alt="" className="home__img" />
      
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
