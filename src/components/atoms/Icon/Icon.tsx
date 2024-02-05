import React from 'react'
import PropTypes from 'prop-types'

import './Icon.sass'
import home from './home.svg'
import question from './question-circle.svg'
import signout from './sign-out-alt.svg'
import sun from './sun.svg'

const Icon = (props:any) =>{
  const { name } = props;
  let src

  switch (name) {
    case 'home':
      src = home
      break
    case 'question':
      src = question
      break
    case 'signout':
      src = signout
      break
    case 'sun':
      src = sun
      break
  }

  return (
    <img className="icon" src={src} />
  )
}

Icon.propTypes = {
  name: PropTypes.oneOf(['home', 'question', 'signout', 'sun']).isRequired
}

export default Icon
