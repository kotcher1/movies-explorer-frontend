import React from 'react'
import './SearchForm.css'

const SearchForm = () => {
  return (
    <div className="search-form">
      <div className="search-form__container">
        <div className="search-form__search-line">
          <input className="search-form__search-input" type="text" placeholder="Фильм" />
          <button className="search-form__search-button" type="button" />
        </div>
        <div className="search-form__sorting">
          <p className="search-form__sotring-type">
            Короткометражки
          </p>
          <input className="search-form__checkbox" type="checkbox"/>
        </div>
      </div>
    </div>
  )
}

export default SearchForm