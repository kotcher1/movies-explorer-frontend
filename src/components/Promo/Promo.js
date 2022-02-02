import React from 'react'
import './Promo.css'
import Header from '../Header/Header'

const Promo = (props) => {
  return (
    <div className="banner">
      <Header nav={props.nav} param={props.param}/>
      <div className="banner__container">
        <h1 className="banner__title">
          Учебный проект студента факультета Веб-разработки.
        </h1>
      </div>
    </div>
  )
}

export default Promo