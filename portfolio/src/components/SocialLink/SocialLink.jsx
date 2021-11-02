import React from 'react'
import './socialLink.css'

const SocialLink = ({iconImage}) => {
  return (
    <div className="container icon-container">
      <img src={iconImage} alt="" className="icon-image" />
    </div>
  )
}

export default SocialLink
