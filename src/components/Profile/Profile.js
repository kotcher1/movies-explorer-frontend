import React from 'react'
import './Profile.css'
import Header from '../Header/Header'


const Movies = () => {

  const navigation = [
    {
      name: 'Фильмы',
      link: '/movies'
    },
    {
      name: 'Сохранённые фильмы',
      link: '/saved-movies'
    }
  ]

  return (
    <div className="profile">
      <Header nav={navigation} param="account" mobileVisibility="hide"/>
      <main className="profile__container">
        <div className="profile__user">
          <h2 className="profile__name">
            Привет, Виталий!
          </h2>
          <div className="profile__info">
            <div className="profile__info-line">
              <p className="profile__info-line-name">
                Имя
              </p>
              <p className="profile__info-value">
                Виталий
              </p>
            </div>
            <div className="profile__info-line">
              <p className="profile__info-line-name">
                E-mail
              </p>
              <p className="profile__info-value">
                pochta@yandex.ru
              </p>
            </div>
          </div>
        </div>
        <div className="profile__buttons">
          <button className="profile__edit">
            Редактировать
          </button>
          <button className="profile__logout">
            Выйти из аккаунта
          </button>
        </div>
      </main>
    </div>
  )
}

export default Movies