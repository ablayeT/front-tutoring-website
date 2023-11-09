import React, { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import TutorProfileForm from './TutorProfileForm';
import ProfileInfos from './ProfileInfos/ProfileInfos';
import useStyles from './style';
import api from '../../../services/api';
import CircularProgress from '@mui/material/CircularProgress';

function ProfileManager() {
  const { classes } = useStyles();
  const [userData, setUserData] = useState(null);
  const [profileData, setProfileData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isProfileComplete, setIsProfileComplete] = useState(false);
  const userId = localStorage.getItem('userId');

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const [userResponse, profileResponse] = await Promise.all([
          api.get(`/users/profiles/${userId}`),
          api.get(`/tutors/profile/${userId}`),
        ]);

        setUserData(userResponse.data);
        console.log('profileResponse.data:', profileResponse.data);

        setProfileData(profileResponse.data);

        // Vérifier si le profil est complet ou non
        if (
          profileResponse.data &&
          Object.keys(profileResponse.data).length > 0
        ) {
          setIsLoading(false);
          setIsProfileComplete(true);
        } else {
          setIsLoading(false);
          setIsProfileComplete(false); // Définir setIsProfileComplete sur true si le profil est vide
        }
      } catch (error) {
        console.error(error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, [userId]);

  if (isLoading) {
    return <CircularProgress />;
  }

  return (
    <Box className={classes.profileManager}>
      {isProfileComplete ? (
        <ProfileInfos profileInfos={profileData} userInfos={userData} />
      ) : (
        <TutorProfileForm />
      )}
    </Box>
  );
}

export default ProfileManager;
