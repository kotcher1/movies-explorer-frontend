import React from 'react'
import './Techs.css'
import BlockTitle from '../BlockTitle/BlockTitle'

const Techs = () => {

  const technologies = ['HTML', 'CSS', 'JS', 'React', 'Git', 'Express.js', 'mongoDB']

  return (
    <div className="techs">
      <div className="techs__container">
        <BlockTitle name="Технологии" />
        <h3 className="techs__title">
          7 технологий
        </h3>
        <p className="techs__text">
          На курсе веб-разработки мы освоили технологии, 
          которые применили в дипломном проекте.
        </p>
        <div className="techs__technologies">
          {technologies.map((tech) => {
            return (
              <div className="techs__tech-block" key={tech}>
                <p className="techs__tech-name">
                  {tech}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Techs