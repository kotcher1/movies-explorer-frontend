class MainApi {
  
  likeCard(country, director, duration, year, description, image, trailer, nameRU, nameEN, thumbnail, movieId, owner) {
    return fetch(`https://blinov-api.nomoredomains.work/movies`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        "Authorization" : `Bearer ${localStorage.getItem('jwt')}`,
      },
      body: JSON.stringify({
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
        movieId, 
        owner
      })
    })
    .then(res => this._checkAnswer(res))
    .then(res => this._parseResponse(res))
  }

  deleteCard(id) {
    return fetch(`https://blinov-api.nomoredomains.work/movies/${id}`, {
      method: 'DELETE',
      headers: {
        "Content-Type": "application/json",
        "Authorization" : `Bearer ${localStorage.getItem('jwt')}`,
      },
    })
    .then(res => this._checkAnswer(res))
    .then(res => this._parseResponse(res))
  }

  updateUser(name, email) {
    return fetch(`https://blinov-api.nomoredomains.work/users/me`, {
      method: 'PATCH',
      headers: {
        "Content-Type": "application/json",
        "Authorization" : `Bearer ${localStorage.getItem('jwt')}`,
      },
      body: JSON.stringify({
        name,
        email
      })
    })
    .then(res => this._checkAnswer(res))
    .then(res => this._parseResponse(res))
  }

  getMovies() {
    return fetch(`https://blinov-api.nomoredomains.work/movies`, {
      headers: {
        "Content-Type": "application/json",
        "Authorization" : `Bearer ${localStorage.getItem('jwt')}`,
      },
    })
    .then(res => this._checkAnswer(res))
    .then(res => this._parseResponse(res))
  }

  _checkAnswer(res) {
    if(res.ok) {
      return Promise.resolve(res);
    } else {
      return Promise.reject(res);
    }
  }

  _parseResponse(res) {
    return res.json();
  }

}

const mainApi = new MainApi();

export {mainApi}