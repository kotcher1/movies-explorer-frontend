import React from 'react'
import './Footer.css'

const Footer = (props) => {
  return (
    <footer className={`footer ${props.noMargin ? 'footer__width_narrow' : ''}`}>
      <div className="footer__container">
        <p className="footer__text">
          Учебный проект Яндекс.Практикум х BeatFilm.
        </p>
        <div className="footer__navigation-line">
          <p className="footer__year">
            © 2020
          </p>
          <nav className="footer__navigation">
            <ul className="footer__navigation-list">
              <li className="footer__navigation-item">
                <a className="footer__navigation-link" href="https://practicum.yandex.ru/" target="_blank" rel="noreferrer">
                  Яндекс.Практикум
                </a>
              </li>
              <li className="footer__navigation-item">
                <a className="footer__navigation-link" href="https://github.com/" target="_blank" rel="noreferrer">
                  Github
                </a>
              </li>
              <li className="footer__navigation-item">
                <a className="footer__navigation-link" href="https://www.facebook.com/" target="_blank" rel="noreferrer">
                  Facebook
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  )
}

export default Footer