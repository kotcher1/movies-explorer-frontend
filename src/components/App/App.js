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

import {moviesApi} from '../../utils/MoviesApi'
import { checkToken } from '../../utils/Auth';
import { CurrentUserContext } from '../../contexts/CurrentUserContext'
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute'

function App() {

  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [notFoundMessage, setNotFoundMessage] = useState('');

  
  const handleTokenCheck = () => {
    if (localStorage.getItem('jwt')){
      const jwt = localStorage.getItem('jwt');
      checkToken(jwt)
      .then((res) => {
        if (res){
          this.setState({
            loggedIn: true,
            email: res.data.email,
          }, () => {
            this.props.history.push("/");
          });
        }
        console.log(res)
      })
      .catch(err => console.log(err))
    }
  }

  const getMoviesInfo = () => {
    setNotFoundMessage('Ничего не найдено');
    setIsLoading(true);
    moviesApi.getMovies()
    .then(info => {
     setMovies(info)
     console.log(info)
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
    console.log(notFoundMessage, 'd')
    return movies;
  } 

  useEffect(() => {
    getMoviesInfo();
  }, [])

  return (
    <CurrentUserContext.Provider>
      <div className="page">
        <main>
          <Switch>
            <ProtectedRoute component={Main} exact path="/">
            </ProtectedRoute>
            <ProtectedRoute exact path="/movies" component={Movies} message={notFoundMessage} updateMovies={handleUpdateMovies} moviesList={movies} loading={isLoading}>
            </ProtectedRoute>
            <ProtectedRoute component={SavedMovies} exact path="/saved-movies">
            </ProtectedRoute>
            <ProtectedRoute exact path="/profile" component={Profile}>
            </ProtectedRoute>
            <Route exact path="/sign-up">
              <Register />
            </Route>
            <Route exact path="/sign-in">
              <Login />
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
