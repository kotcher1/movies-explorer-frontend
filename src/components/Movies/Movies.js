import React, {useState, useEffect} from 'react'
import './Movies.css'
import Header from '../Header/Header'
import SearchForm from '../SearchForm/SearchForm'
import MoviesCardList from '../MoviesCardList/MoviesCardList'
import Footer from '../Footer/Footer'
import Preloader from '../Preloader/Preloader'


const Movies = ({activeLink, navigation, loading, message, param, mobileVisibility, saveMovie, deleteMovie, savedMovies, moviesList, loadingStatus }) => {

  const [value, setValue] = useState(localStorage.getItem('moviesSearchValue') || '');
  const [relevantMovies, setRelevantMovies] = useState([]);
  const [check, setCheck] = useState(false);

  function updateValue(currentValue) {
    setValue(currentValue);
    localStorage.setItem('moviesSearchValue', currentValue);
  }

  function updateCheck(value) {
    setCheck(value.toLowerCase());
  }

  useEffect(() => {
    loadingStatus(true);
    let currentMovies = [];
    if(moviesList) {
          moviesList.forEach(movie => {
      if (movie.nameRU.toLowerCase().includes(value) && check) {
        if(movie.duration <= 40) {
          currentMovies.push(movie);
        }
      } else if (movie.nameRU.toLowerCase().includes(value)) {
        currentMovies.push(movie);
      }
    })
    }
    setRelevantMovies(currentMovies)
    loadingStatus(false);
  }, [value, check])


  return (
    <div className="movies">
      <Header nav={navigation} param={param} mobileVisibility={mobileVisibility} activeLink={activeLink}/>
      <main>
        <SearchForm update={updateValue} page="movies" updateCheck={updateCheck}/>
        {value && (loading ? <Preloader /> : <MoviesCardList deleteMovie={deleteMovie} saveMovie={saveMovie} message={message}  relevantMovies={relevantMovies} searchValue={value} moviesState="all" button savedMovies={savedMovies}/>)}
      </main>
      <Footer noMargin/>
    </div>
  )
}

export default Movies