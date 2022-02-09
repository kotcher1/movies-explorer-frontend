import React from 'react'
import './Page404.css'
import { useHistory } from "react-router-dom";

const Page404 = () => {

  let history = useHistory();

  const handleClick = (e) => {
    e.preventDefault();
    history.goBack()
  }

  return (
    <main className="error">
      <div className="error__container">
        <h1 className="error__title">
          404
        </h1>
        <p className="error__subtitle">
          Страница не найдена
        </p>
      </div>
      <a className="error__link" href="/" onClick={handleClick}>
        Назад
      </a>
    </main>
  )
}

export default Page404