import React from 'react'
import './MoviesCard.css'

const MoviesCard = (props) => {
  return (
    <div className="card">
      <div className="card__image-container">
        <img className="card__image" src={`https://api.nomoreparties.co/${props.info.image.url}`} alt="cover"/>
      </div>
      <div className="card__info">
        <div className="card__info-line">
          <p className="card__title">
            {props.info.nameRU}
          </p>
          <button type="button" className={!props.delete ? `card__like ${props.info.liked ? 'card__like_liked' : ''}` : `card__close`} />
        </div>
        <p className="card__time">
          {`${Math.floor(props.info.duration / 60)}ч ${props.info.duration % 60}м`}
        </p>
      </div>
    </div>
  )
}

export default MoviesCard