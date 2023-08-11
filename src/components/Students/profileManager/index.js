import api from '../../../services/api';
import { Box, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import StudentProfileForm from './StudentProfileForm';
import ProfileInfos from './ProfileInfos';

function Profile() {
  const [isProfileComplete, setIsProfileComplete] = useState(false);
  const [profileData, setProfileData] = useState(null);

  useEffect(() => {
    const checkProfileCompleteness = async () => {
      try {
        const userId = localStorage.getItem('userId');
        console.log('userId in Profile:', userId);

        const response = await api.get(`/students/profile/${userId}`, {
          headers: {
            authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        });

        if (response.data) {
          setIsProfileComplete(true);
          setProfileData(response.data);
        } else {
          setIsProfileComplete(false);
        }
      } catch (error) {
        // console.error(error);
      }
    };
    checkProfileCompleteness();
  }, []);

  if (profileData === null) {
    return <StudentProfileForm />;
  }

  return (
    <Box>
      <Typography>Profile et manipulation du Profile</Typography>
      {isProfileComplete ? <ProfileInfos profileData={profileData} /> : <StudentProfileForm />}
    </Box>
  );
}

export default Profile;
