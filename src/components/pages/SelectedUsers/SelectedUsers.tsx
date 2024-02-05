import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import UserCard from '../../molecules/UserCard';
import Title from '../../atoms/Title';
import Button from '@mui/material/Button';
import WestIcon from '@mui/icons-material/West';
import { useSelector } from 'react-redux';
import './SelectedUsers.sass';

import Rolodex from '../../molecules/Rolodex';
const SelectedUsers = () => {
  const navigate = useNavigate();
  //const { state } = useLocation();
  //const [user, setUser] = useState(state);
  const [filteredUsers, setFilteredUsers] = useState<any>([]);
  const [alphabet, setAlphabet] = useState('');
  const [selectedAlphabet, setSelectedAlphabet] = useState<String[]>([]);
  const users = useSelector((state: any) => state.users);
  const [alphabetMapUsers, setAlphabetMapUsers] = useState<any>([]);
  const handleAlphabet = (alphabet: string) => {
    setAlphabet(alphabet);
  };
  useEffect(() => {
    if (alphabet !== null) {
      let result = [];
      if (users && alphabet) {
        result = users.filter((element: any) => {
          return (
            element.first_name.charAt(0).toLowerCase() ===
            alphabet.toLowerCase()
          );
        });
      } else {
        result = users;
      }
      setFilteredUsers(result);
    }
  }, [alphabet, users]);

  const getFilteredArr = (users: any) => {
    return users.reduce((acc: any, curr: any) => {
      let nameFirstChar: string = curr.first_name.charAt(0).toLowerCase();
      if (nameFirstChar) {
        const currentItems = acc[nameFirstChar];
        return {
          ...acc,
          [nameFirstChar]: currentItems ? [...currentItems, curr] : [curr]
        };
      }
      return acc;
    }, []);
  };

  useEffect(() => {
    if (users) {
      let newdata = getFilteredArr(users);
      console.log(newdata);
      setAlphabetMapUsers(newdata);
      let alphabetList: String[] = [];
      Object.keys(newdata).map((alphabet) => {
        return alphabetList.push(alphabet.toUpperCase());
      });
      setSelectedAlphabet(alphabetList);
    }
  }, [users]);

  return (
    <>
      <Title heading='Selected Users' />
      <Button
        onClick={() => navigate(-1)}
        variant='text'
        startIcon={<WestIcon />}
      >
        Back
      </Button>
      <Rolodex
        handleAlphabet={handleAlphabet}
        selectedAlphabet={selectedAlphabet}
      />
      <div className='users'>
        {filteredUsers?.map((user: any) => (
          <UserCard className='user' key={user.id} user={user} />
        ))}
      </div>

      {/* <div className='users'>
        {Object.keys(alphabetMapUsers).map((key) => {
          return (
            <div className='user' key={key}>
              {alphabetMapUsers[key]?.map((user: any) => (
                <UserCard key={user.id} user={user} />
              ))}
            </div>
          );
        })}
      </div> */}
    </>
  );
};

export default SelectedUsers;
