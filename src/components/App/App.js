import './App.css';
import Main from '../Main/Main'
import Movies from '../Movies/Movies'
import SavedMovies from '../SavedMovies/SavedMovies'
import Profile from '../Profile/Profile'
import Register from '../Register/Register'
import Login from '../Login/Login'
import Page404 from '../Page404/Page404' 
import React, {useState, useEffect} from 'react'
import { Route, Switch, withRouter } from 'react-router-dom';
import { useHistory } from "react-router";

import {moviesApi} from '../../utils/MoviesApi'
import { mainApi } from '../../utils/MainApi'
import { checkToken } from '../../utils/Auth';
import { CurrentUserContext } from '../../contexts/CurrentUserContext'
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

function App() {

  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [notFoundMessage, setNotFoundMessage] = useState('');
  const [currentUser, setCurrentUser] = useState([]);
  const [email, setEmail] = useState('');
  const [user, setUser] = useState('');
  const [loggedStatus, setLoggedStatus] = useState(false);
  const [allReady, setAllReady] = useState(false);
  const [buttonStatus, setButtonStatus] = useState("button");
  const [navigation, setNavigation] = useState([]);
  const [mobileVisibility, setMobileVisibility] = useState('');
  const [savedMovies, setSavedMovies] = useState([]);

  const history = useHistory();
  
  const handleTokenCheck = () => {
    const jwt = localStorage.getItem('jwt');
    if (jwt){
      checkToken(jwt)
      .then((res) => {
        if (res){
          setCurrentUser(res.data);
          setLoggedStatus(true);
          setEmail(res.data.email);
          setUser(res.data.name);
        }
      })
      .catch(err => console.log(err))
      .finally(() =>  setAllReady(true))
    }
  }

  const handleGetMovies = () => {
    mainApi.getMovies()
    .then((res) => {
      setSavedMovies(res.data);
    })
    .catch(err => console.log(err))
  }

  const handleAddMovie = (
    country,
    director, 
    duration, 
    year, 
    description, 
    image, 
    trailer, 
    nameRU, 
    nameEN, 
    thumbnail, 
    movieId
  ) => {
    mainApi.likeCard(
      country,
      director, 
      duration, 
      year, 
      description, 
      image, 
      trailer, 
      nameRU, 
      nameEN, 
      thumbnail, 
      movieId
    )
    .then((res) => {
      setSavedMovies(state => [...state, res.data])
    })  
    .catch(err => console.log(err))
  }

  const handleDeleteMovie = (id) => {
    mainApi.deleteCard(id)
    .then((res) => {
      let updatedMovies = savedMovies;
      let movieIndex;
      savedMovies.forEach((movie, index) => {
        if(movie.movieId === res.data.movieId) {
          movieIndex = index;
        }
      })
      updatedMovies.splice(movieIndex, 1);
      setSavedMovies(updatedMovies);
    })
    .catch(err => console.log(err))
  }

  const handleUpdateInfo = (name, email) => {
    mainApi.updateUser(name, email)
    .then((res) => {
      if(res){
        setEmail(res.data.email);
        setUser(res.data.name);
      }
    })
    .catch(err => console.log(err))
  }

  const getMoviesInfo = () => {
    setNotFoundMessage('Ничего не найдено');
    setIsLoading(true);
    moviesApi.getMovies()
    .then(info => {
     setMovies(info)
    })
    .catch((err) => {
      setNotFoundMessage('Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз');
      console.log(err);
    })
    .finally(() => {
      setIsLoading(false);
    });
  }

  const handleUpdateMovies = () => {
    getMoviesInfo();
    return movies;
  } 

  useEffect(() => {
    handleTokenCheck();
  }, [])

  useEffect(() => {
    if(loggedStatus) {
      getMoviesInfo();
      handleGetMovies();
    }
  }, [loggedStatus])

  const navigationOut = [
    {
      name: 'Регистрация',
      link: '/sign-up',
    }
  ]

  const navigationIn = [
    {
      name: 'Фильмы',
      link: '/movies',
    },
    {
      name: 'Сохранённые фильмы',
      link: '/saved-movies'
    }
  ]

  useEffect(() => {
    if(loggedStatus) {
      setButtonStatus('account');
      setNavigation(navigationIn);
      setMobileVisibility('hide');
    } else {
      setButtonStatus('button');
      setNavigation(navigationOut);
      setMobileVisibility('');
    }
  }, [loggedStatus])

  const handleLogin = () => {
    setLoggedStatus(true);
  }

  const handleEmail = (email) => {
    setEmail(email);
  }

  const handleOut = () => {
    localStorage.removeItem('jwt');
    setEmail('');
    setLoggedStatus(false);
    history.push("/sign-in");
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <main>
          <Switch>
            <Main navigation={navigation} param={buttonStatus} exact path="/" loggedIn={loggedStatus}  mobileVisibility={mobileVisibility} activeLink='/'/>
            {allReady && (
              <ProtectedRoute exact path="/movies" navigation={navigation} param={buttonStatus} activeLink='/movies'  loggedIn={loggedStatus}  mobileVisibility={mobileVisibility} component={Movies} message={notFoundMessage} updateMovies={handleUpdateMovies} deleteMovie={handleDeleteMovie} moviesList={movies} loading={isLoading} saveMovie={handleAddMovie} savedMovies={savedMovies}>
              </ProtectedRoute>
            )}
            {allReady && (
              <ProtectedRoute component={SavedMovies} navigation={navigation} param={buttonStatus} activeLink='/saved-movies' loggedIn={loggedStatus}  mobileVisibility={mobileVisibility} exact path="/saved-movies" message={notFoundMessage} updateMovies={handleUpdateMovies} deleteMovie={handleDeleteMovie} loading={isLoading} moviesList={savedMovies}>
              </ProtectedRoute>
            )}
            {allReady && (
              <ProtectedRoute exact path="/profile" update={handleUpdateInfo} navigation={navigation} param={buttonStatus} loggedIn={loggedStatus} mobileVisibility={mobileVisibility} component={Profile} handleOut={handleOut} name={user} email={email}>
              </ProtectedRoute>
            )}
            <Route exact path="/sign-up">
              <Register handleEmail={handleEmail} handleLogin={handleLogin}/>
            </Route>
            <Route exact path="/sign-in">
              <Login handleLogin={handleLogin} handleEmail={handleEmail}/>
            </Route>
            {allReady && (
              <Route path="*">
                <Page404 />
              </Route>
            )}
          </Switch>
        </main>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default withRouter(App);
