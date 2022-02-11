import React, {useState, useEffect} from 'react'
import './Register.css'
import Logo from '../Logo/Logo'
import { withRouter } from 'react-router-dom';
import { login, register } from '../../utils/Auth';
import { useHistory } from "react-router";
import FormValidator from '../../utils/FormValidator';

const Register = (props) => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleChangeName = (e) => {
    const {value} = e.target;
    setName(value);
  }

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
    register(name, password, email)
    .then((res) => {
      if(!res.error && !res.message){
        setMessage('');
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
      } else {
        setMessage(res.message);
      }
    })
    .catch(err => {
      console.log(err);
    })
 }

 const formParameters = {
  inputSelector: '.register__input',
  submitButtonSelector: '.register__button',
  inactiveButtonClass: 'register__button_disable',
  errorClass: '.register__input-error',
  inputErrorClass: 'register__input_state_error',
  errorVisibleClass: 'register__input-error_visible'
};

useEffect(() => {
  if(document.querySelector('.register__form')) {
    const registerFormValidator = new FormValidator(formParameters, document.querySelector('.register__form'))
    registerFormValidator.enableValidation()
  }
}, [email, password, name])

  return (
    <main className="register">
      <div className="register__container">
        <Logo />
        <h1 className="register__title">
          Добро пожаловать!
        </h1>
        <form className="register__form" onSubmit={handleSubmit}>
          <div className="register__form-inputs">
            <div className="register__input-block">
              <span className="register__input-title">
                Имя
              </span>
              <input className="register__input" id="name" name="name" type="text" minLength="2" maxLength="30" required onChange={handleChangeName}/>
              <span className="register__input-error" id="name-error">
                Что-то пошло не так...
              </span>
            </div>
            <div className="register__input-block">
              <span className="register__input-title">
                E-mail
              </span>
              <input className="register__input" id="email" name="email" type="email" required onChange={handleChangeEmail}/>
              <span className="register__input-error" id="email-error">
                Что-то пошло не так...
              </span>
            </div>
            <div className="register__input-block">
              <span className="register__input-title">
                Пароль
              </span>
              <input className="register__input" id="password" name="password" type="password" autoComplete="on" required onChange={handleChangePassword} minLength="8"/>
              <span className="register__input-error" id="password-error">
                Что-то пошло не так...
              </span>
            </div>
          </div>
          <p className="register__error-messsage">
            {message ? message : ''}
          </p>
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

export default withRouter(Register)
