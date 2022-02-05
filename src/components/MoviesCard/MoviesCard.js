import React from 'react'
import './MoviesCard.css'

const MoviesCard = (props) => {
  return (
    <div className="card">
      <img className="card__image" src={props.info.image} alt="cover"/>
      <div className="card__info">
        <div className="card__info-line">
          <p className="card__title">
            {props.info.title}
          </p>
          <button type="button" className={!props.delete ? `card__like ${props.info.liked ? 'card__like_liked' : ''}` : `card__close`} />
        </div>
        <p className="card__time">
          {props.info.time}
        </p>
      </div>
    </div>
  )
}

export default MoviesCard