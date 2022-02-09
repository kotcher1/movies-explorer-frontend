import React, {useState, useEffect} from 'react'
import './Profile.css'
import Header from '../Header/Header'
import FormValidator from '../../utils/FormValidator';


const Profile = (props) => {

  const [isEdit, setIsEdit] = useState(false);
  const [name, setName] = useState(props.name);
  const [email, setEmail] = useState(props.email);

  const handlerEditClick = (e) => {
    e.preventDefault();
    if (e.target.type === "submit") {
      props.update(name, email)
      setIsEdit(false);
    } else {
      setIsEdit(true);
    }
  }

  const handleChangeName = (e) => {
    setName(e.target.value);
  }

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  }

  const formParameters = {
    inputSelector: '.profile__input',
    submitButtonSelector: '.profile__edit_type_submit',
    inactiveButtonClass: 'profile__edit_state_disable',
    errorClass: '.profile__input-error',
    inputErrorClass: 'profile__input_state_error',
    errorVisibleClass: 'profile__input-error_visible'
  };

  useEffect(() => {
    if(document.querySelector('.profile__info') && document.querySelector('.profile__edit_type_submit')) {
      const loginFormValidator = new FormValidator(formParameters, document.querySelector('.profile__info'))
      loginFormValidator.enableValidation()
    }
  }, [email, name])

  return (
    <div className="profile">
      <Header nav={props.navigation} param={props.param} mobileVisibility={props.mobileVisibility}/>
      <main className="profile__container">
        <div className="profile__user">
          <h2 className="profile__name">
            Привет, {name}!
          </h2>
          <form className="profile__info">
            <div className="profile__info-line">
              <p className="profile__info-line-name">
                Имя
              </p>
              {isEdit ? (
                <div className="profile__input-block">
                  <input className="profile__input" id="name" type="text" value={name} minLength="2" name="name" onChange={handleChangeName}/>
                  <span className="profile__input-error" id="name-error">
                    Что-то пошло не так...
                  </span>
                </div>
              ) : (
                <p className="profile__info-value">
                  {name}
                </p>
              )}
            </div>
            <div className="profile__info-line">
              <p className="profile__info-line-name">
                E-mail
              </p>
              {isEdit ? (
                <div className="profile__input-block">
                  <input className="profile__input" type="email" value={email} id="email" name="email" onChange={handleChangeEmail}/>
                  <span className="profile__input-error" id="email-error">
                    Что-то пошло не так...
                  </span>
                </div>
              ) : (
                <p className="profile__info-value">
                  {email}
                </p>
              )}
            </div>
            <div className="profile__buttons">
            {isEdit ? (
              <button className="profile__edit profile__edit_type_submit" type="submit" onClick={handlerEditClick}>
                Сохранить
              </button>
              ) : (
                <button className="profile__edit" type="button" onClick={handlerEditClick}>
                  Редактировать
                </button>
              )
            }
              <button className="profile__logout" onClick={props.handleOut}>
                Выйти из аккаунта
              </button>
          </div>
          </form>
        </div>
      </main>
    </div>
  )
}

export default Profile