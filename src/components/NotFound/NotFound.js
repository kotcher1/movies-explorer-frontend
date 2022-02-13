import React from 'react'
import './NotFound.css'

const NotFound = (props) => {
  return (
    <p className="not-found">
      {props.message}
    </p>
  )
}

export default NotFound