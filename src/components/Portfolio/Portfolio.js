import React from 'react'
import './Portfolio.css'


const Portfolio = () => {
  return (
    <div className="portfolio">
      <h3 className="portfolio__title">
        Портфолио
      </h3>
      <div className="portfolio__links-block">
        <div className="portfolio__link-line">
          <p className="portfolio__link-title">
            Статичный сайт
          </p>
          <a className="portfolio__link" href="https://github.com/">
            ↗
          </a>
        </div>
        <div className="portfolio__link-line">
          <p className="portfolio__link-title">
            Адаптивный сайт
          </p>
          <a className="portfolio__link" href="https://github.com/">
            ↗
          </a>
        </div>
        <div className="portfolio__link-line">
          <p className="portfolio__link-title">
            Одностраничное приложение
          </p>
          <a className="portfolio__link" href="https://github.com/">
            ↗
          </a>
        </div>
      </div>
    </div>
  )
}

export default Portfolio