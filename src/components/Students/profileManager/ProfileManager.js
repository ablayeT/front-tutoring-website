import { Box, CircularProgress } from '@mui/material';
import React, { useEffect, useState } from 'react';
import StudentProfileForm from './StudentProfileForm/StudentProfileForm';
import ProfileInfos from './ProfileInfos/ProfileInfos';
import api from '../../../services/api';
// import CircularProgress from '@mui/icons-material';

function ProfileManager() {
  const [isProfileComplete, setIsProfileComplete] = useState(false);
  const [isProfileLoading, setIsProfileLoading] = useState(true);
  const [profileData, setProfileData] = useState(null);
  const [userData, setUserData] = useState(null);
  const userId = localStorage.getItem('userId');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [userDataResponse, profileDataResponse] = await Promise.all([
          api.get(`/users/profiles/${userId}`),
          api.get(`/students/profile/${userId}`),
        ]);

        setUserData(userDataResponse.data);
        setProfileData(profileDataResponse.data);
        setIsProfileComplete(profileDataResponse.data ? true : false);
      } catch (error) {
        console.error(error);
      } finally {
        setIsProfileLoading(false);
      }
    };

    fetchData();
  }, [userId]);

  if (isProfileLoading) {
    return <CircularProgress />;
  }

  return (
    <Box width="100%">
      {isProfileComplete ? (
        <ProfileInfos profileData={profileData} userData={userData} />
      ) : (
        <StudentProfileForm />
      )}
    </Box>
  );
}

export default ProfileManager;
