import React from 'react'
import MoviesCard from '../MoviesCard/MoviesCard'
import './MoviesCardList.css'
import Movie1 from '../../images/movie1.jpg'
import Movie2 from '../../images/movie2.jpg'
import Movie3 from '../../images/movie3.jpg'
import Movie4 from '../../images/movie4.jpg'
import Movie5 from '../../images/movie5.jpg'
import Movie6 from '../../images/movie6.jpg'
import Movie7 from '../../images/movie7.jpg'
import Movie8 from '../../images/movie8.jpg'
import Movie9 from '../../images/movie9.jpg'
import Movie10 from '../../images/movie10.jpg'
import Movie11 from '../../images/movie11.jpg'
import Movie12 from '../../images/movie12.jpg'

const MoviesCardList = (props) => {

  const cards = [
    {
      image: Movie1,
      title: '33 слова о дизайне',
      liked: true,
      time: '1ч 47м',
    },
    {
      image: Movie2,
      title: 'Киноальманах «100 лет дизайна»',
      liked: false,
      time: '1ч 3м',
    },
    {
      image: Movie3,
      title: 'В погоне за Бенкси',
      liked: false,
      time: '1ч 42м',
    },
    {
      image: Movie4,
      title: 'Баския: Взрыв реальности',
      liked: false,
      time: '1ч 21м',
    },
    {
      image: Movie5,
      title: 'Бег это свобода',
      liked: false,
      time: '1ч 44м',
    },
    {
      image: Movie6,
      title: 'Книготорговцы',
      liked: true,
      time: '1ч 37м',
    },
    {
      image: Movie7,
      title: 'Когда я думаю о Германии ночью',
      liked: false,
      time: '1ч 56м',
    },
    {
      image: Movie8,
      title: 'Gimme Danger: История Игги и The Stooge...',
      liked: false,
      time: '1ч 59м',
    },
    {
      image: Movie9,
      title: 'Дженис: Маленькая девочка грустит',
      liked: true,
      time: '1ч 42м',
    },
    {
      image: Movie10,
      title: 'Соберись перед прыжком',
      liked: true,
      time: '1ч 10м',
    },
    {
      image: Movie11,
      title: 'Пи Джей Харви: A dog called money',
      liked: false,
      time: '1ч 4м',
    },
    {
      image: Movie12,
      title: 'По волнам: Искусство звука в кино',
      liked: false,
      time: '1ч 7м',
    }
  ]

  const savedCards = [
    {
      image: Movie1,
      title: '33 слова о дизайне',
      time: '1ч 47м',
    },
        {
      image: Movie2,
      title: 'Киноальманах «100 лет дизайна»',
      time: '1ч 3м',
    },
    {
      image: Movie3,
      title: 'В погоне за Бенкси',
      time: '1ч 42м',
    },

  ]

  return (
    <div className="card-list">
      <div className="card-list__container">
        {props.moviesState === 'all' && cards.map(card => {
          return <MoviesCard info={card} key={card.title}/>
        })}
        {props.moviesState === 'saved' && savedCards.map(card => {
          return <MoviesCard info={card} key={card.title} delete/>
        })}
      </div>
      <button className={`card-list__more ${!props.button ? 'card-list__more_hidden' : ''}`}>
        Ещё
      </button>
    </div>
  )
}

export default MoviesCardList