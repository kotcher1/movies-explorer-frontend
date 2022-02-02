import './App.css';
import Main from '../Main/Main'
import Movies from '../Movies/Movies'
import SavedMovies from '../SavedMovies/SavedMovies'
import Profile from '../Profile/Profile'
import Register from '../Register/Register'
import Login from '../Login/Login'
import Page404 from '../Page404/Page404' 
import React from 'react'
import { Route, Switch, withRouter } from 'react-router-dom';

function App() {
  return (
    <div className="page">
      <main>
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route exact path="/movies">
            <Movies />
          </Route>
          <Route exact path="/saved-movies">
            <SavedMovies />
          </Route>
          <Route exact path="/profile">
            <Profile />
          </Route>
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
  );
}

export default withRouter(App);
