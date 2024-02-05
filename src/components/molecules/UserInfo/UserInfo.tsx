import React from 'react'
import PropTypes from 'prop-types'

import './UserInfo.sass'

import AvatarImage from '../../atoms/AvatarImage'

function UserInfo(props:any) {
  const { avatarUrl, username } = props

  return (
    <span className="user-info">
      <AvatarImage url={avatarUrl} />
      <span>{username}</span>
    </span>
  )
}

UserInfo.propTypes = {
  avatarUrl: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired
}

export default UserInfo
