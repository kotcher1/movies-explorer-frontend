export const BASE_URL = 'https://blinov-api.nomoredomains.work';

export const register = (userName, password, email) => {
  return fetch(`${BASE_URL}/sign-up`, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({userName, password, email})
  })
  .then((response) => {
    return response.json();
  })
};

export const login = (email, password) => {
  return fetch(`${BASE_URL}/sign-in`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({email, password})
  })
  .then((response => response.json()))
  .then((data) => {
    if (data.token){
      localStorage.setItem('jwt', data.token);
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
