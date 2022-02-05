import React from 'react'
import './BlockTitle.css'

const BlockTitle = (props) => {
  return (
    <div>
      <h2 className="block-title">
        {props.name}
      </h2>
      <div className="block-title__line" />
    </div>
  )
}

export default BlockTitle