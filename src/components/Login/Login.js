import React from 'react'
import './Login.css'
import Logo from '../Logo/Logo'

const Login = () => {
  return (
    <main className="login">
      <div className="login__container">
        <Logo />
        <h1 className="login__title">
          Рады видеть!
        </h1>
        <form className="login__form">
          <div className="login__form-inputs">
            <div className="login__input-block">
              <span className="login__input-title">
                E-mail
              </span>
              <input className="login__input" onChange id="email" name="email" type="email" value="pochta@yandex.ru" required />
              <span className="login__input-error" id="email-error">
                Что-то пошло не так...
              </span>
            </div>
            <div className="login__input-block">
              <span className="login__input-title">
                Пароль
              </span>
              <input className="login__input" onChange id="password" name="password" type="password" autoComplete="on" required />
              <span className="login__input-error" id="password-error">
                Что-то пошло не так...
              </span>
            </div>
          </div>
          <div className="login__form-buttons">
            <button type="submit" className="login__button">
              Войти
            </button>
            <div className="login__register-line">
              <p className="login__register-title">
                Ещё не зарегистрированы?
              </p>
              <a className="login__register-link" href="/sign-in">
                Регистрация
              </a>
            </div>
          </div>
        </form>
      </div>
    </main>
  )
}

export default Login