import './App.css';
import Main from '../Main/Main'
import Movies from '../Movies/Movies'
import SavedMovies from '../SavedMovies/SavedMovies'
import Profile from '../Profile/Profile'
import Register from '../Register/Register'
import Login from '../Login/Login'
import Page404 from '../Page404/Page404' 
import React, {useState, useEffect} from 'react'
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
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
  const [loginChecked, setLoginChecked] = useState(false);
  const [buttonStatus, setButtonStatus] = useState("button");
  const [navigation, setNavigation] = useState([]);
  const [mobileVisibility, setMobileVisibility] = useState('');
  const [savedMovies, setSavedMovies] = useState([]);
  const [successUpdate, setSuccessUpdate] = useState(false);

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
      .catch(err => {
        alert("Возникла ошибка");
        console.log(err)
      })
      .finally(() =>  {
        setLoginChecked(true);
      })
    } else {
      setLoginChecked(true);
    }
  }

  const handleGetMovies = () => {
    mainApi.getMovies()
    .then((res) => {
      setIsLoading(true);
      setSavedMovies(res.data);
    })
    .catch(err => {
      alert("Возникла ошибка");
      console.log(err)
    })
    .finally(() =>  setIsLoading(false))
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
    .catch(err => {
      alert("Возникла ошибка");
      console.log(err)
    })
  }

  const handleDeleteMovie = (id) => {
    mainApi.deleteCard(id)
    .then((res) => {
      let updatedMovies = [...savedMovies];
      let movieIndex;
      updatedMovies.forEach((movie, index) => {
        if(movie.movieId === res.data.movieId) {
          movieIndex = index;
        }
      })
      updatedMovies.splice(movieIndex, 1);
      setSavedMovies(updatedMovies);
    })
    .catch(err => {
      alert("Возникла ошибка");
      console.log(err)
    })
  }

  const handleUpdateInfo = (newName, newEmail) => {
    mainApi.updateUser(newName, newEmail)
    .then((res) => {
      if(res){
        setEmail(res.data.email);
        setUser(res.data.name);
        setCurrentUser({
          name: newName,
          email: newEmail,
        })
        setSuccessUpdate(true);
      }
    })
    .catch(err => {
      alert("Возникла ошибка");
      console.log(err)
    })
  }

  const getMoviesInfo = () => {
    setNotFoundMessage('Ничего не найдено');
    moviesApi.getMovies()
    .then(info => {
      setIsLoading(true);
      setMovies(info)
    })
    .catch((err) => {
      setNotFoundMessage('Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз');
      console.log(err);
    })
    .finally(() =>  setIsLoading(false))
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
    setLoginChecked(true);
  }

  const handleEmail = (email) => {
    setEmail(email);
  }

  const handleOut = () => {
    localStorage.removeItem('jwt');
    localStorage.removeItem('shortMoviesChecked');
    localStorage.removeItem('moviesSearchValue');
    localStorage.removeItem('shortSavedMoviesChecked');
    localStorage.removeItem('savedMoviesSearchValue');
    setEmail('');
    setLoggedStatus(false);
    history.push("/");
  }

  const handleChangeSuccessUpdate = () => {
    setSuccessUpdate(false);
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <main>
          <Switch>
            <Main navigation={navigation} param={buttonStatus} exact path="/" loggedIn={loggedStatus}  mobileVisibility={mobileVisibility} activeLink='/'/>
            <ProtectedRoute exact path="/movies" navigation={navigation} param={buttonStatus} activeLink='/movies' loggedIn={loggedStatus} loginChecked={loginChecked} mobileVisibility={mobileVisibility} component={Movies} message={notFoundMessage} deleteMovie={handleDeleteMovie} moviesList={movies} saveMovie={handleAddMovie} savedMovies={savedMovies} loading={isLoading}>
            </ProtectedRoute>
            <ProtectedRoute component={SavedMovies} navigation={navigation} param={buttonStatus} activeLink='/saved-movies' loggedIn={loggedStatus} loginChecked={loginChecked} mobileVisibility={mobileVisibility} exact path="/saved-movies" message={notFoundMessage} deleteMovie={handleDeleteMovie} moviesList={savedMovies} loading={isLoading}>
            </ProtectedRoute>
            <ProtectedRoute exact path="/profile" updateText={successUpdate} hideUpdateText={handleChangeSuccessUpdate} update={handleUpdateInfo} navigation={navigation} param={buttonStatus} loggedIn={loggedStatus} loginChecked={loginChecked} mobileVisibility={mobileVisibility} component={Profile} handleOut={handleOut} name={user} email={email}>
            </ProtectedRoute>
            <Route exact path="/sign-up">
              {loggedStatus ? <Redirect to="/"/> : <Register handleEmail={handleEmail} handleLogin={handleLogin}/>}
            </Route>
            <Route exact path="/sign-in">
              {loggedStatus ? <Redirect to="/"/> : <Login handleLogin={handleLogin} handleEmail={handleEmail}/>}
            </Route>
            <Route path="*">
              <Page404 />
            </Route>
          </Switch>
        </main>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default withRouter(App);
