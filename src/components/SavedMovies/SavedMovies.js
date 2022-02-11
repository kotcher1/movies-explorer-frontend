import React, {useState, useEffect, useContext} from 'react'
import './SavedMovies.css'
import Header from '../Header/Header'
import SearchForm from '../SearchForm/SearchForm'
import MoviesCardList from '../MoviesCardList/MoviesCardList'
import Footer from '../Footer/Footer'
import Preloader from '../Preloader/Preloader'
import { CurrentUserContext } from '../../contexts/CurrentUserContext'


const SavedMovies = ({activeLink, navigation, loading, message, param, mobileVisibility, moviesList, deleteMovie, loadingStatus}) => {

  const currentUser = useContext(CurrentUserContext);

  const [value, setValue] = useState(localStorage.getItem('savedMoviesSearchValue') || '');
  const [relevantMovies, setRelevantMovies] = useState(moviesList);
  const [check, setCheck] = useState(false);
  

  function updateValue(currentValue) {
    setValue(currentValue);
    localStorage.setItem('savedMoviesSearchValue', currentValue);
  }

  function updateCheck(value) {
    setCheck(value);
  }

  useEffect(() => {
    loadingStatus(true);
    let movies = [];
    const allMovies = moviesList;
    if(allMovies) {
        allMovies.forEach(movie => {
          if(movie.owner === currentUser._id) {
            if (movie.nameRU.includes(value) && check) {
              if(movie.duration <= 40) {
                movies.push(movie);
              }
            } else if (movie.nameRU.includes(value)) {
              movies.push(movie);
            }
          }
        })
      }
    setRelevantMovies(movies);
    loadingStatus(false);
  }, [value, check, moviesList])

  return (
    <div className="saved-movies">
      <Header nav={navigation} param={param} mobileVisibility={mobileVisibility} activeLink={activeLink}/>
      <main>
        <SearchForm update={updateValue} updateCheck={updateCheck}/>
        {loading ? <Preloader /> : <MoviesCardList message={message} deleteMovie={deleteMovie} relevantMovies={relevantMovies} searchValue={value} moviesState="saved"/>}
      </main>
      <Footer noMargin/>
    </div>
  )
}

export default SavedMovies