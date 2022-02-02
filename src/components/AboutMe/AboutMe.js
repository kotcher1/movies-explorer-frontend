import React from 'react'
import './AboutMe.css'
import BlockTitle from '../BlockTitle/BlockTitle'
import Photo from '../../images/photo.jpg'
import Portfolio from '../Portfolio/Portfolio'

const AboutMe = () => {
  return (
    <div className="student">
      <div className="student__container">
        <BlockTitle name="Студент" />
        <div className="student__info">
          <div className="student__history">
            <p className="student__name">
              Виталий
            </p>
            <p className="student__specialization">
              Фронтенд-разработчик, 30 лет
            </p>
            <p className="student__history-text">
              Я родился и живу в Саратове, закончил факультет 
              экономики СГУ. У меня есть жена и дочь. Я 
              люблю слушать музыку, а ещё увлекаюсь бегом. 
              Недавно начал кодить. С 2015 года работал в 
              компании «СКБ Контур». После того, как прошёл 
              курс по веб-разработке, начал заниматься 
              фриланс-заказами и ушёл с постоянной работы.
            </p>
            <div className="student__social-links">
              <a className="student__social-link" href="https://www.facebook.com/">
                Facebook
              </a>
              <a className="student__social-link" href="https://github.com/">
                Github
              </a>
            </div>
          </div>
          <img className="student__photo" src={Photo} alt="user"/>
        </div>
        <Portfolio />
      </div>
    </div>
  )
}

export default AboutMe