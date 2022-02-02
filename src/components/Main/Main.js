import React from 'react'
import AboutProject from '../AboutProject/AboutProject'
import Promo from '../Promo/Promo'
import Techs from '../Techs/Techs'
import AboutMe from '../AboutMe/AboutMe'
import Footer from '../Footer/Footer'

const Main = () => {

  const navigation = [
    {
      name: 'Регистрация',
      link: '/sign-up',
    }
  ]

  return (
    <div>
      <Promo nav={navigation} param='button'/>
      <main>
        <AboutProject />
        <Techs />
        <AboutMe />
      </main>
      <Footer />
    </div>
  )
}

export default Main