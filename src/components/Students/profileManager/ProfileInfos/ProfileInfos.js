import React, { useState, useEffect } from 'react';
import api from '../../../../services/api';
import { Box, Stack, Typography, TextField, FormLabel } from '@mui/material';
import profileFields from './ProfileInfo.schema';
import MuiButton from '../../../Buttons/Button';
import userFields from './userInfo.schema';
import { orange } from '@mui/material/colors';
import Orangebar from '../../../Assets/OrangeBar';
import useStyles from './style';

function ProfileInfos({ profileData, userData }) {
  const { classes } = useStyles();
  const [isEditing, setIsEditing] = useState(false);
  const [editedProfileData, setEditedProfileData] = useState({
    skills: '',
    experience: '',
    grade_level: '',
    major: '',
    school_name: '',
  });
  const [userInfos, setUserInfos] = useState(userData);
  const [profileInfos, setProfileInfos] = useState(profileData);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        setUserInfos(userInfos);
      } catch (error) {
        console.error(error);
      }
    };

    const fetchProfileData = async () => {
      try {
        setProfileInfos(profileInfos);
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
  }, [profileInfos, userInfos]);

  console.log('userData:', userData);
  console.log('profileData:', profileData);

  if (isLoading) {
    return <Typography>Loading</Typography>;
  }

  const handleEditClick = () => {
    setIsEditing(true);
    setEditedProfileData({
      skills: profileInfos.skills,
      experience: profileInfos.experience,
      grade_level: profileInfos.grade_level,
      major: profileInfos.major,
      school_name: profileInfos.school_name,
    });
  };

  const handleUpdateProfile = async () => {
    try {
      // Send updated profile data to the server
      await api.put(
        `/students/profile/${userInfos.user.id}`,
        editedProfileData,
        {
          headers: {
            authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        },
      );

      const updatedProfileResponse = await api.get(
        `/students/profile/${userInfos.user.id}`,
      );
      setProfileInfos(updatedProfileResponse.data);
      setIsEditing(false);
    } catch (error) {
      console.error(error);
    }
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
  };

  return (
    <Box className={classes.profileContainer}>
      {!isEditing && (
        <Box
          display="flex"
          width="100%"
          gap="20px"
          margin="auto"
          boxShadow="0px 0px 10px 0px rgba(0, 0, 0, 0.6);"
          backgroundColor="white"
          padding="10px"
          borderRadius="10px"
          flexDirection="column"
        >
          <Typography>Mes inoformations de profil</Typography>
          {userFields.map((field) => (
            <Stack key={field.key}>
              <FormLabel sx={{ fontSize: '19px', fontWeight: 'bold' }}>
                {field.label}
              </FormLabel>
              <TextField
                type="text"
                border="1px solid #FFA500"
                padding="10px"
                width="50%"
                value={userData?.user?.[field.key]}
              />
              <Orangebar />
            </Stack>
          ))}
          {profileFields.map((field) => (
            <Stack key={field.key}>
              <FormLabel sx={{ fontSize: '19px', fontWeight: 'bold' }}>
                {field.label}
              </FormLabel>
              <TextField
                type="text"
                border="1px solid #FFA500"
                padding="10px"
                width="50%"
                value={profileData ? profileData.skills : ''}
              />
              <Orangebar />
            </Stack>
          ))}

          <Stack
            display="flex"
            justifyContent="center"
            width="20%"
            margin="auto"
          >
            <MuiButton
              variant="outlined"
              className={classes.updateButton}
              onClick={handleEditClick}
            >
              Modifier
            </MuiButton>
          </Stack>
        </Box>
      )}

      {isEditing && (
        <Box
          display="flex"
          width="100%"
          gap="20px"
          margin="auto"
          boxShadow="0px 0px 10px 0px rgba(0, 0, 0, 0.6);"
          backgroundColor="white"
          padding="10px"
          borderRadius="10px"
          flexDirection="column"
        >
          <Typography>Modification du profil</Typography>
          {profileFields.map((field) => (
            <Stack key={field.key} display="flex" flexDirection="column">
              <FormLabel sx={{ fontSize: '19px', fontWeight: 'bold' }}>
                {field.label}
              </FormLabel>
              <TextField
                value={editedProfileData[field.key]}
                onChange={(e) =>
                  setEditedProfileData({
                    ...editedProfileData,
                    [field.key]: e.target.value,
                  })
                }
              />
              <Orangebar />
            </Stack>
          ))}
          <Stack
            display="flex"
            justifyContent="center"
            width="20%"
            margin="auto"
            flexDirection="row"
            gap="10px"
          >
            <MuiButton
              variant="outlined"
              sx={{
                alignSelf: 'center',
                background: '#FFA500',
                color: 'black',
              }}
              onClick={handleUpdateProfile}
            >
              Enregistrer
            </MuiButton>
            <MuiButton
              variant="outlined"
              sx={{
                alignSelf: 'center',
                background: '#FFA500',
                color: 'black',
              }}
              onClick={handleCancelEdit}
            >
              Annuler
            </MuiButton>
          </Stack>
        </Box>
      )}
    </Box>
  );
}

export default ProfileInfos;
