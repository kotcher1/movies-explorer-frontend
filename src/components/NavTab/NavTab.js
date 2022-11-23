import React, {useState} from 'react'
import Navigation from '../Navigation/Navigation'
import './NavTab.css'
import AccountImage from '../../images/account-image.svg'

const NavTab = (props) => {

  
  const [isMenuOpen, setMenuOpen] = useState(false);

  function toggleMenu() {
    setMenuOpen(!isMenuOpen);
  }

  return (
    <div className={`navigation-tab`}>
      <div className={`navigation-tab__container ${props.mobileVisibility === 'hide' ? 'navigation-tab__container_view_mobile' : ''} ${!isMenuOpen && props.mobileVisibility === 'hide' ? 'navigation-tab__container_visibility_hidden' : ''}`}>
        <Navigation activeLink={props.activeLink} nav={props.nav} mobileVisibility={props.mobileVisibility}/>
        {props.param === 'button' && (
          <a className="navigation-tab__button" href="/sign-in">
            Войти
          </a>
        )}
        {props.param === 'account' && (
          <a className={`navigation-tab__account-block ${props.mobileVisibility === 'hide' ? 'navigation-tab__account-block_hidden' : ''} `} href="/profile">
            <p className="navigation-tab__account-text">
              Аккаунт
            </p>
            <div className="navigation-tab__account-image-container">
              <img className="navigation-tab__account-image" alt="account" src={AccountImage}/>
            </div>
          </a>
        )
        }
      </div>
      {props.mobileVisibility === 'hide' && (
        <button type="button" onClick={toggleMenu} aria-label="toggleMenu" className={`navigation-tab__menu-button ${isMenuOpen ? 'navigation-tab__menu-button_type_close' : ''}`} />
      )}
      <div className={`navigation-tab__overlay ${isMenuOpen ? 'navigation-tab__overlay_visible' : ''}`} />
    </div>
  )
}

export default NavTab

