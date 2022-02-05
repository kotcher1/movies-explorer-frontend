import React from 'react'
import './Page404.css'

const Page404 = () => {
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
      <a className="error__link" href="/">
        Назад
      </a>
    </main>
  )
}

export default Page404