import React, {useEffect, useState} from 'react'
import MoviesCard from '../MoviesCard/MoviesCard'
import './MoviesCardList.css'
import NotFound from '../NotFound/NotFound'

const MoviesCardList = (props) => {

  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentWidthIndex, setCurrentWidthIndex] = useState(0);

  const setWidthIndex = () => {
    if (document.body.clientWidth > 900) {
      setCurrentWidthIndex(3);
    } else if (document.body.clientWidth <= 900 && document.body.clientWidth > 640) {
      setCurrentWidthIndex(2);
    } else if (document.body.clientWidth <= 640) {
      setCurrentWidthIndex(2);
    }
  }

  const setIndex = () => {
    if (document.body.clientWidth > 900) {
      setCurrentIndex(12);
    } else if (document.body.clientWidth <= 900 && document.body.clientWidth > 640) {
      setCurrentIndex(8);
    } else if (document.body.clientWidth <= 640) {
      setCurrentIndex(5);
    }
  }

  useEffect(() => {
    setWidthIndex();
    setIndex();
  }, []);

  window.addEventListener('resize', () => {
    setTimeout(() => {
      setWidthIndex()
    }, 1000)
  })
  
  const handleChangeIndex = () => {
    setCurrentIndex((state) => {
      return state + currentWidthIndex
    })
  }

  return (
    <div className="card-list">
      {props.relevantMovies.length === 0 ? <NotFound message={props.message} /> : (
        <div className="card-list__container">
          {props.moviesState === 'all' && props.relevantMovies && props.relevantMovies.map((card, index) => {
            if (index < currentIndex) {
              return <MoviesCard deleteMovie={props.deleteMovie} saveMovie={props.saveMovie} info={card} key={card.nameRU} savedMovies={props.savedMovies}/>
            }
          })}
          {props.moviesState === 'saved' && props.relevantMovies && props.relevantMovies.map(card => {
            return <MoviesCard deleteMovie={props.deleteMovie} moviesState={props.moviesState} info={card} key={card.nameRU} delete/>
          })}
        </div>
      )}
      {props.relevantMovies.length > 3 && currentIndex < props.relevantMovies.length && (
        <button className={`card-list__more ${!props.button ? 'card-list__more_hidden' : ''}`} onClick={handleChangeIndex}>
          Ещё
        </button>
      )}
    </div>
  )
}

export default MoviesCardList