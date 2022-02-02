import React from 'react'
import './Logo.css'
import logo from '../../images/logo.svg'

const Logo = () => {
  return (
    <div>
      <a href="/">
        <img className="logo" src={logo} alt="logo"/>
      </a>
    </div>
  )
}

export default Logo