import React from 'react';
import './UserCard.sass';
// import Title from "./atoms/Title"
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { useDispatch } from 'react-redux';
import { removeUser } from '../../../store/users/usersSlice';
const UserCard = ({ user }: any) => {
  const { first_name, last_name, email, avatar } = user;
  const full_name = first_name + ' ' + last_name;
  const dispatch = useDispatch();

  const handleDeleteUser = () => {
    dispatch(removeUser(user));
  };

  return (
    <Card className="card">
      <div className="card-content">
        <div>
          <CardHeader title={full_name} />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              <a href={`mailto: ${email}`}>{email}</a>
            </Typography>
          </CardContent>
        </div>
        <CardContent>
          <CardMedia
            sx={{ width: 128, height: 128 }}
            image={avatar}
            title={avatar}
          />
        </CardContent>
      </div>

      <CardActions>
        <Button variant="contained" onClick={handleDeleteUser}>
          Delete
        </Button>
      </CardActions>
    </Card>
  );
};

export default UserCard;
