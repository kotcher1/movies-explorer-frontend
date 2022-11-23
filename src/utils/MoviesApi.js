class MoviesApi {

  getMovies() {
    return fetch(`https://api.nomoreparties.co/beatfilm-movies`)
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

const moviesApi = new MoviesApi();

export {moviesApi};