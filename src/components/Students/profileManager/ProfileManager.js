import { Box } from '@mui/material';
import React, { useEffect, useState } from 'react';
import StudentProfileForm from './StudentProfileForm/StudentProfileForm';
import ProfileInfos from './ProfileInfos/ProfileInfos';

function ProfileManager({ profileInfos, userInfos }) {
  const [isProfileComplete, setIsProfileComplete] = useState(false);
  const [profileData, setProfileData] = useState(profileInfos);
  const [userData, setUserData] = useState(userInfos);

  useEffect(() => {
    const checkProfileCompleteness = async () => {
      try {
        const userId = localStorage.getItem('userId');
        console.log('userId in Profile:', userId);

        if (profileData) {
          setIsProfileComplete(true);
          setUserData(userData);
          setProfileData(profileData);
        } else {
          setIsProfileComplete(false);
        }
      } catch (error) {
        // console.error(error);
      }
    };
    checkProfileCompleteness();
  });

  if (profileData === null) {
    return <StudentProfileForm />;
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
