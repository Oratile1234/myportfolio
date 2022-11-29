import React from 'react'
import "./Services.css"
import Image1 from '../../assets/service-1.svg'
import Image2 from '../../assets/service-2.svg'
import Image3 from '../../assets/service-3.svg'

const data = [

  {
    id:1,
    image: Image1,
    title: "Backend ",
    description:<ol>
    <ul>PostgreSQL</ul>
    <ul>Node.js</ul>
  </ol>

  },
  {
    id:2,
    image: Image2,
    title: "Frontend ",
    description: <ol>
    <ul>Angular2+</ul>
    <ul>HTML & CSS</ul>
    <ul>JavaScript</ul>
    <ul>TypeScript</ul>
  </ol>

  },
  {
    id:3,
    image: Image3,
    title: "Design",
    description:<ol>
    <ul>Figma</ul>
   
  </ol>

  }
]

const Services = () => {
  return (
    <section className="services container section" id="services">
      <h2 className="section__title">Skills</h2>

      <div className="services__container grid">
        {data.map(({id,image,title,description}) => {
          return (
              <div className="services__card" key={id}>
                <img src={image} alt="" className="services__img" />

                <h3 className="services__title">{title}</h3>
                <p className="services__description">{description}</p>
              </div>
          )
        })}
      </div>
    </section>
  )
}


export default Services
