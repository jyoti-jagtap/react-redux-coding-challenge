import React from 'react';
import PropTypes from 'prop-types';
import Avatar from '@mui/material/Avatar';
import './UserInfo.sass';
function UserInfo(props: any) {
  const { avatarUrl, username } = props;
  return (
    <span className="user-info">
      <Avatar
        className="avatar"
        alt={username}
        src={avatarUrl}
        sx={{ width: 30, height: 30 }}
      />
      <span>{username}</span>
    </span>
  );
}

UserInfo.propTypes = {
  avatarUrl: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired
};

export default UserInfo;
