import React from 'react'
import PropTypes from 'prop-types'

import './AvatarImage.sass'
import defaultUrl from './avatar.jpg'

const AvatarImage = (props:any) => {
  const { url } = props;

  return (
    <img className="avatar" src={url || defaultUrl} alt="Avatar"/>
  )
}

AvatarImage.propTypes = {
  url: PropTypes.string
}

export default AvatarImage
