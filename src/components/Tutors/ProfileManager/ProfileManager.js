import { Box } from '@mui/material';
import React, { useState, useEffect } from 'react';
import TutorProfileForm from './TutorProfileForm/TutorProfileForm';
import ProfileInfos from './ProfileInfos/ProfileInfos';

function ProfileManager({ profileData, userData }) {
  const [isProfileComplete, setIsProfileComplete] = useState(false);
  const [profileInfos, setProfileInfos] = useState(profileData);
  const [userInfos, setUserInfos] = useState(userData);

  useEffect(() => {
    const checkProfileCompleteness = async () => {
      try {
        if (profileData) {
          setIsProfileComplete(true);
          setUserInfos(userInfos);
          setProfileInfos(profileInfos);
        } else {
          setIsProfileComplete(false);
        }
      } catch (error) {
        console.error(error);
      }
    };
    checkProfileCompleteness();
  });

  if (profileInfos === null) {
    return <TutorProfileForm profileInfos={profileInfos} />;
  }
  // console.log('porfileInfos in profile:',profileInfos)
  // console.log('userInfos  in profile:',userInfos)

  return (
    <Box>
      {isProfileComplete ? (
        <ProfileInfos profileInfos={profileInfos} userInfos={userInfos} />
      ) : (
        <TutorProfileForm />
      )}
    </Box>
  );
}

export default ProfileManager;
