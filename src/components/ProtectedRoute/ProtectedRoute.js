import React from 'react';
import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({component: Component, ...props}) => {
  const  { loginChecked, loggedIn } = props;

  return loginChecked && (
    <Route>
      { loggedIn ? <Component {...props} /> : <Redirect to="/sign-in" /> }
    </Route>
  )};

export default ProtectedRoute;