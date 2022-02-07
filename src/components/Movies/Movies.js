import React, {useState, useEffect} from 'react'
import './Movies.css'
import Header from '../Header/Header'
import SearchForm from '../SearchForm/SearchForm'
import MoviesCardList from '../MoviesCardList/MoviesCardList'
import Footer from '../Footer/Footer'
import Preloader from '../Preloader/Preloader'


const Movies = ({updateMovies, loading, message}) => {

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

  const [value, setValue] = useState('');
  const [relevantMovies, setRelevantMovies] = useState([]);
  const [check, setCheck] = useState(false);

  function updateValue(currentValue) {
    setValue(currentValue);
  }

  function updateCheck(value) {
    setCheck(value);
  }

  useEffect(() => {
    let movies = [];
    const allMovies = updateMovies()
    if(allMovies) {
          allMovies.forEach(movie => {
      if (movie.nameRU.includes(value) && check) {
        if(movie.duration <= 40) {
          movies.push(movie);
        }
      } else if (movie.nameRU.includes(value)) {
        movies.push(movie);
      }
    })
    }
    setRelevantMovies(movies)
  }, [value, check])

  return (
    <div className="movies">
      <Header nav={navigation} param="account" mobileVisibility="hide"/>
      <main>
        <SearchForm update={updateValue} updateCheck={updateCheck}/>
        {value && (loading ? <Preloader /> : <MoviesCardList message={message}  relevantMovies={relevantMovies} searchValue={value} moviesState="all" button/>)}
      </main>
      <Footer noMargin/>
    </div>
  )
}

export default Movies