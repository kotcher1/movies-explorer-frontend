class MainApi {
  
  likeCard(country, director, duration, year, description, image, trailer, nameRU, nameEN, thumbnail, movieId, owner) {
    return fetch(`https://blinov-api.nomoredomains.work/movies`, {
      method: 'POST',
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

}

const mainApi = new MainApi();

export {mainApi}