import React,{ useContext } from 'react';
import Marquee from "react-fast-marquee";

import './skills.css'

import { ThemeContext } from './ThemeContext';
import { skillsData } from './skillsData'
import { skillsImage } from './skillsImage'

function Skills() {

    const { Theme } = useContext(ThemeContext);

    const skillBoxStyle = {
        // backgroundColor: theme.secondary,
        // boxShadow: 0px 0px 30px ${theme.primary30}
    }

    return (
        <div id ="skills"className="skills" >
            <div className="skillsHeader">
                <h2 style={{}}>Skills</h2>
            </div>
            <div className="skillsContainer">
                <div className="skill--scroll">
                    <Marquee 
                        gradient={false} 
                        speed={80} 
                        pauseOnHover={true}
                        pauseOnClick={true} 
                        delay={0}
                        play={true} 
                        direction="left"
                    >
                        {skillsData.map((skill, id) => (
                            <div className="skill--box" key={id} style={skillBoxStyle}>
                                <img src={skillsImage(skill)} alt={skill} />
                                <h3 style={{}}>
                                    {skill}
                                </h3>
                            </div>
                        ))}
                    </Marquee>
                </div>
            </div>
        </div>
    )
}

export default Skills