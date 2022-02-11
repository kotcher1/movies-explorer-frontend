export const BASE_URL = 'https://blinov-api.nomoredomains.work';

export const register = (name, password, email) => {
  console.log(
    'fetch'
  )
  return fetch(`${BASE_URL}/signup`, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({name, password, email})
  })
  .then((response) => {
    return response.json();
  })
};

export const login = (email, password) => {
  return fetch(`${BASE_URL}/signin`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({email, password})
  })
  .then((response => response.json()))
  .then((data) => {
    if (data.jwt){
      localStorage.setItem('jwt', data.jwt);
      return data;
    } 
  })
};

export const checkToken = (jwt) => {
  return fetch(`${BASE_URL}/users/me`, {
    headers: {
      "Content-Type": "application/json",
      "Authorization" : `Bearer ${jwt}`,
    },
  })
  .then(res => res.json())
};
