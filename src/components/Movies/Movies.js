import React from 'react'
import './Movies.css'
import Header from '../Header/Header'
import SearchForm from '../SearchForm/SearchForm'
import MoviesCardList from '../MoviesCardList/MoviesCardList'
import Footer from '../Footer/Footer'


const Movies = () => {

  const navigation = [
    {
      name: 'Фильмы',
      link: '/movies',
      isActive: true,
    },
    {
      name: 'Сохранённые фильмы',
      link: '/saved-movies'
    }
  ]

  return (
    <div className="movies">
      <Header nav={navigation} param="account" mobileVisibility="hide"/>
      <main>
        <SearchForm />
        <MoviesCardList moviesState="all" button/>
      </main>
      <Footer noMargin/>
    </div>
  )
}

export default Movies