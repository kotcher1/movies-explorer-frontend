import React, {useState} from 'react'
import './SearchForm.css'

const SearchForm = (props) => {

  const [searchValue, setSearchValue] = useState('');

  function handleChange(e) {
    setSearchValue(e.target.value);
  }

  function handleClick() {
    props.update(searchValue);
  }

  function handleClickCheckbox(e) {
    props.updateCheck(e.target.checked);
  }

  return (
    <div className="search-form">
      <div className="search-form__container">
        <div className="search-form__search-line">
          <input className="search-form__search-input" defaultValue={props.page === "movies" ? localStorage.getItem('moviesSearchValue') : localStorage.getItem('savedMoviesSearchValue')} type="text" placeholder="Фильм" onChange={handleChange} minLength="1" required/>
          <span className="search-form__input-error" id="name-error">
                Что-то пошло не так...
          </span>
          <button className="search-form__search-button" type="button" onClick={handleClick}/>
        </div>
        <div className="search-form__sorting">
          <p className="search-form__sotring-type">
            Короткометражки
          </p>
          <input className="search-form__checkbox" type="checkbox" onClick={handleClickCheckbox}/>
        </div>
      </div>
    </div>
  )
}

export default SearchForm