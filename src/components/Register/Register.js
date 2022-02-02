import React from 'react'
import './Register.css'
import Logo from '../Logo/Logo'

const Register = () => {
  return (
    <main className="register">
      <div className="register__container">
        <Logo />
        <h1 className="register__title">
          Добро пожаловать!
        </h1>
        <form className="register__form">
          <div className="register__form-inputs">
            <div className="register__input-block">
              <span className="register__input-title">
                Имя
              </span>
              <input className="register__input" onChange id="name" name="name" type="text" value="Виталий" minLength="2" maxLength="20" required />
              <span className="register__input-error" id="name-error">
                Что-то пошло не так...
              </span>
            </div>
            <div className="register__input-block">
              <span className="register__input-title">
                E-mail
              </span>
              <input className="register__input" onChange id="email" name="email" type="email" value="pochta@yandex.ru" required />
              <span className="register__input-error" id="email-error">
                Что-то пошло не так...
              </span>
            </div>
            <div className="register__input-block">
              <span className="register__input-title">
                Пароль
              </span>
              <input className="register__input register__input_state_error" onChange id="password" name="password" type="password" value="••••••••••••••"  autoComplete="on" required />
              <span className="register__input-error register__input-error_visible" id="password-error">
                Что-то пошло не так...
              </span>
            </div>
          </div>
          <div className="register__form-buttons">
            <button type="submit" className="register__button">
              Зарегистрироваться
            </button>
            <div className="register__sign-in-line">
              <p className="register__sign-in-title">
                Уже зарегистрированы?
              </p>
              <a className="register__sign-in-link" href="/sign-in">
                Войти
              </a>
            </div>
          </div>
        </form>
      </div>
    </main>
  )
}

export default Register
