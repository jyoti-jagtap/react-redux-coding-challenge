import React from 'react';
import { useState} from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import UserCard from '../../molecules/UserCard';
import Button from '@mui/material/Button';
import WestIcon from '@mui/icons-material/West';
import './UserDetails.sass';
import Title from '../../atoms/Title';
const UserDetails = () => {
  const navigate = useNavigate();
  const {state}  = useLocation();
  const user = useState(state)[0];
   console.log('User details component rendered');
  return (
    <>
      <Title>User Details</Title>
      <Button
        onClick={() => navigate(-1)}
        variant="text"
        startIcon={<WestIcon />}
      >
        Back
      </Button>
      <div className="user">
        <UserCard className="user" user={user} />
      </div>
    </>
  );
};
export default UserDetails;