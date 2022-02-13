import './Header.css'
import NavTab from '../NavTab/NavTab'
import Logo from '../Logo/Logo'

const Header = (props) => {
  return (
    <header className="header">
      <div className="header__container">
        <Logo />
        <NavTab activeLink={props.activeLink} mobileVisibility={props.mobileVisibility} nav={props.nav} param={props.param}/>
      </div>
    </header>
  )
}

export default Header