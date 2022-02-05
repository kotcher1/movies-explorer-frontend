import React from 'react'
import './SavedMovies.css'
import Header from '../Header/Header'
import SearchForm from '../SearchForm/SearchForm'
import MoviesCardList from '../MoviesCardList/MoviesCardList'
import Footer from '../Footer/Footer'


const Movies = () => {

  const navigation = [
    {
      name: 'Фильмы',
      link: '/movies'
    },
    {
      name: 'Сохранённые фильмы',
      link: '/saved-movies',
      isActive: true,
    }
  ]

  return (
    <div className="saved-movies">
      <Header nav={navigation} param="account" mobileVisibility="hide"/>
      <main>
        <SearchForm />
        <MoviesCardList moviesState="saved"/>
      </main>
      <Footer noMargin/>
    </div>
  )
}

export default Movies