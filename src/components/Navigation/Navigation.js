import React from 'react'
import './Navigation.css'

const Navigation = (props) => {

  return (
    <div>
      <nav className="navigation">
        <ul className={`navigation__list ${props.mobileVisibility === 'hide' ? 'navigation__list_view_mobile' : ''}`}>
          {props.mobileVisibility === 'hide' && (
            <li className="navigation__item navigation__item_hidden" key="Главная">
              <a className="navigation__item-link" href="/">
                Главная
              </a>
            </li>
          )}
          {props.nav.map(item => {
            return (
              <li className="navigation__item" key={item.name}>
                <a className={`navigation__item-link ${item.isActive ? 'navigation__item-link_active' : ''}`} href={item.link}>
                  {item.name}
                </a>
              </li>
            )
          })}
        </ul>
      </nav>
    </div>
  )
}

export default Navigation