import React, {useState, useCallback, useEffect} from 'react'
import './Login.css'
import Logo from '../Logo/Logo'
import { login } from '../../utils/Auth';
import { withRouter, useHistory } from 'react-router-dom';
import FormValidator from '../../utils/FormValidator';

const Login = (props) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChangeEmail = (e) => {
    const {value} = e.target;
    setEmail(value);
  }

  const handleChangePassword = (e) => {
    const {value} = e.target;
    setPassword(value);
  }

  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password){
      return;
    }
    login(email, password)
    .then((data) => {
      if (data) {
        props.handleEmail(email);
        setPassword('');
        setEmail('');
        props.handleLogin();
        history.push('/movies');
      }
    })
    .catch(err => console.log(err));
  }

  const formParameters = {
    inputSelector: '.login__input',
    submitButtonSelector: '.login__button',
    inactiveButtonClass: 'login__button_disable',
    errorClass: '.login__input-error',
    inputErrorClass: 'login__input_state_error',
    errorVisibleClass: 'login__input-error_visible'
  };

  useEffect(() => {
    if(document.querySelector('.login__form')) {
      const loginFormValidator = new FormValidator(formParameters, document.querySelector('.login__form'))
      loginFormValidator.enableValidation()
    }
  }, [email, password])

  return (
    <main className="login">
      <div className="login__container">
        <Logo />
        <h1 className="login__title">
          Рады видеть!
        </h1>
        <form className="login__form" onSubmit={handleSubmit}>
          <div className="login__form-inputs">
            <div className="login__input-block">
              <span className="login__input-title">
                E-mail
              </span>
              <input className="login__input" onChange={handleChangeEmail} id="email" name="email" type="email" required/>
              <span className="login__input-error" id="email-error">
                Что-то пошло не так...
              </span>
            </div>
            <div className="login__input-block">
              <span className="login__input-title">
                Пароль
              </span>
              <input className="login__input" onChange={handleChangePassword} id="password" name="password" type="password" autoComplete="on" required minLength="8"/>
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
              <a className="login__register-link" href="/sign-up">
                Регистрация
              </a>
            </div>
          </div>
        </form>
      </div>
    </main>
  )
}

export default withRouter(Login)