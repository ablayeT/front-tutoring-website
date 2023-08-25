import { Box, Typography } from '@mui/material';
import React, {  useState, useEffect } from 'react';
import TutorProfileForm from './TutorProfileForm';
import ProfileInfos from './ProfileInfos';

function Profile({profileData, userData}) {
  const [isProfileComplete, setIsProfileComplete] = useState(false);
  const [profileInfos, setProfileInfos] = useState(profileData);
  const [userInfos, setUserInfos] = useState( userData);

  useEffect(() => {
    const checkProfileCompleteness = async () => {
      try {

        if(profileData) {
          setIsProfileComplete(true);
          setUserInfos(userInfos);
          setProfileInfos(profileInfos);
        }else {
          setIsProfileComplete(false)
        }
      } catch (error) {
        console.error(error);
      }
    };
    checkProfileCompleteness();
  });


  if (profileInfos === null) {
    return <TutorProfileForm profileInfos={profileInfos}/>;
  }
  // console.log('porfileInfos in profile:',profileInfos)
  // console.log('userInfos  in profile:',userInfos)

  return (
    <Box>
      <Typography>Profile et manipulation du Profile</Typography>
      {isProfileComplete ? <ProfileInfos profileInfos={profileInfos} userInfos={userInfos}/> : <TutorProfileForm />}
    </Box>
  );
}

export default Profile;
