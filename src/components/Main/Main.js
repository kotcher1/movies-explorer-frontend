import React from 'react'
import AboutProject from '../AboutProject/AboutProject'
import Promo from '../Promo/Promo'
import Techs from '../Techs/Techs'
import AboutMe from '../AboutMe/AboutMe'
import Footer from '../Footer/Footer'

const Main = (props) => {

  return (
    <div>
      <Promo activeLink={props.activeLink} nav={props.navigation} param={props.param} mobileVisibility={props.mobileVisibility}/>
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