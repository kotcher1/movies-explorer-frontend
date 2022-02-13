import React, {useEffect, useState, useContext} from 'react'
import './MoviesCard.css'
import { CurrentUserContext } from '../../contexts/CurrentUserContext'

const MoviesCard = (props) => {

  const currentUser = useContext(CurrentUserContext);

  const [isLiked, setIsLiked] = useState(false);

  const handleLike = (e) => {
    if(e.target.classList.contains('card__close')) {
      props.deleteMovie(props.info._id);
    } else {
      if(!isLiked) {
        setIsLiked(true);
        props.saveMovie(
          props.info.country,
          props.info.director, 
          props.info.duration, 
          props.info.year, 
          props.info.description, 
          `https://api.nomoreparties.co${props.info.image.url}`, 
          props.info.trailerLink, 
          props.info.nameRU, 
          props.info.nameEN, 
          `https://api.nomoreparties.co${props.info.image.formats.thumbnail.url}`, 
          props.info.id, 
        )
      } else {
        setIsLiked(false);
        let deletedMovie;
        props.savedMovies.forEach(movie => {
          if (movie.movieId === props.info.id) {
            deletedMovie = movie
          }
        })
        props.deleteMovie(deletedMovie._id);
      }
    }
  }

  const handleCheckLike = () => {
    if(props.savedMovies) {
      props.savedMovies.forEach(movie => {
        if (movie.movieId === props.info.id && movie.owner === currentUser._id) {
          setIsLiked(true);
        }
      })
    }
  }

  const handleClickCard = (e) => {
    if(!e.target.classList.contains('card__like') && !e.target.classList.contains('card__close')) {
      window.open(props.info.trailerLink || props.info.trailer, '_blank');
    }
  }

  useEffect(() => {
    handleCheckLike()
  }, [])

  return (
    <div className="card" onClick={handleClickCard}>
      <div className="card__image-container">
        <img className="card__image" src={props.moviesState === "saved" ? props.info.image : `https://api.nomoreparties.co/${props.info.image.url}`} alt="cover"/>
      </div>
      <div className="card__info">
        <div className="card__info-line">
          <p className="card__title">
            {props.info.nameRU}
          </p>
          <button type="button" className={!props.delete ? `card__like ${isLiked ? 'card__like_liked' : ''}` : `card__close`} onClick={handleLike}/>
        </div>
        <p className="card__time">
          {`${Math.floor(props.info.duration / 60)}ч ${props.info.duration % 60}м`}
        </p>
      </div>
    </div>
  )
}

export default MoviesCard