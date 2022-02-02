import React from 'react'
import './AboutProject.css'
import BlockTitle from '../BlockTitle/BlockTitle'

const AboutProject = () => {
  return (
    <div className="about">
      <div className="about__container">
        <BlockTitle name="О проекте" />
        <div className="about__text">
          <div className="about__text-column">
            <h3 className="about__text-title">
              Дипломный проект включал 5 этапов
            </h3>
            <p className="about__text-description">
              Составление плана, работу над бэкендом, 
              вёрстку, добавление функциональности и 
              финальные доработки.
            </p>
          </div>
          <div className="about__text-column">
            <h3 className="about__text-title">
              На выполнение диплома ушло 5 недель
            </h3>
            <p className="about__text-description">
              У каждого этапа был мягкий и жёсткий дедлайн, 
              которые нужно было соблюдать, чтобы успешно 
              защититься.
            </p>
          </div>
        </div>
        <div className="about__graph">
          <div className="about__graph-segment">
            <div className="about__graph-line about__graph-line_color_green">
              <p className="about__graph-week about__graph-week_color_black">
                1 неделя
              </p>
            </div>
            <p className="about__graph-title">
              Back-end
            </p>
          </div>
          <div className="about__graph-segment">
            <div className="about__graph-line about__graph-line_color_grey">
              <p className="about__graph-week about__graph-week_color_white">
                4 недели
              </p>
            </div>
            <p className="about__graph-title">
              Front-end
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutProject