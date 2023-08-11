import React, { useState, useEffect } from 'react';
// import axios from 'axios';
import { Box, Stack, Typography } from '@mui/material';
import api from '../../../services/api'

function ProfileInfos() {
  
  const [userData, setUserData] = useState(null);
  const [profileData, setProfileData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userId = localStorage.getItem('userId');
        const userResponse = await api.get(`/users/profiles/${userId}`, {
          headers: {
            authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        });

        setUserData(userResponse.data);
      } catch (error) {
        console.error(error);
      }
    };

    const fetchProfileData = async () => {
      try {
        const userId = localStorage.getItem('userId');
        const profileResponse = await api.get(`/students/profile/${userId}`, {
          headers: {
            authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        });

        setProfileData(profileResponse.data);
      } catch (error) {
        console.error(error);
      }
    };

    const fetchData = async () => {
      setIsLoading(true);
      await Promise.all([fetchUserData(), fetchProfileData()]);
      setIsLoading(false);
    };

    fetchData();

  }, []);

  console.log('userData:', userData);
  console.log('profileData:', profileData);

  if (isLoading) {
    return <Typography>Loading</Typography>;
  }

  return (
    <Box>
      <Typography>Mon inormations de profil</Typography>
      <Stack>
        <Typography>Photo de profil</Typography>
        <img src={`http://localhost:3000/images/${profileData.imageUrl}`} alt='ProfileImage' style={{ width: '100px', height: '100px' }} />   
      </Stack>
      <Stack></Stack>
      <Stack>
        <Typography>Nom</Typography>
        <Typography>{userData.user.full_name}</Typography>
      </Stack>
      <Stack>
        <Typography>Email</Typography>
        <Typography>{userData.user.email}</Typography>
      </Stack>  
      <Stack>
        <Typography>Compétences</Typography>
        <Typography>{profileData.skills}</Typography>
      </Stack>
      <Stack>
        <Typography>Expériences</Typography>
        <Typography>{profileData.experience}</Typography>
      </Stack>
      <Stack>
        <Typography>Niveau d'études</Typography>
        <Typography>{profileData.grade_level}</Typography>
      </Stack>
      <Stack>
        <Typography>Domaine d'étude</Typography>
        <Typography>{profileData.major}</Typography>
      </Stack>
      <Stack>
        <Typography>Etablissement</Typography>
        <Typography>{profileData.university}</Typography>
      </Stack>
    </Box>

  );
}

export default ProfileInfos;
