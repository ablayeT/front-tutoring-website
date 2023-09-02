import React, { useEffect, useState } from 'react';
import { Box, Stack, Typography, TextField, FormLabel } from '@mui/material';
import api from '../../../../services/api';
import MuiButton from '../../../Buttons/Button';
import profileFields from './ProfileInfo.schema';
import userFields from '../userInfos.schema';

function ProfileInfos({ userInfos, profileInfos }) {
  const [userData, setUserData] = useState(userInfos);
  const [profileData, setProfileData] = useState(profileInfos);
  // const [isLoading, setIsLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [editedProfileData, setEditedProfileData] = useState({
    skills: '',
    experience: '',
    hourly_rate: '',
    availability: '',
  });
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        setUserData(userInfos);
      } catch (error) {
        console.error(error);
      }
    };
    fetchUserData();
  });

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        setProfileData(profileInfos);
      } catch (error) {
        console.error(error);
      }
    };
    fetchProfileData();
  });

  const handleEditClick = () => {
    setIsEditing(true);
    setEditedProfileData({
      skills: profileData.skills,
      experience: profileData.experience,
      hourly_rate: profileData.hourly_rate,
      availability: profileData.availability,
    });
  };

  // console.log(url)

  const handleUpdateProfile = async () => {
    try {
      // Envoyer les données mise à jour au seveur
      await api.put(`/tutors/profile/${userData.user.id}`, editedProfileData, {
        headers: {
          authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });

      // Mettre à jour les donnees
      const updatedProfileResponse = await api.get(
        `/tutors/profile/${userData.user.id}`,
        {
          headers: {
            authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        },
      );
      setProfileData(updatedProfileResponse.data);
      setIsEditing(false);
    } catch (error) {
      console.error(error);
    }
  };

  console.log('userData ine profileinfos: ', userData);
  return (
    <Box
      display="flex"
      alignSelf="center"
      justifyContent="center"
      flexDirection="column"
    >
      {!isEditing && (
        <Box display="flex" gap="20px" margin="20px" flexDirection="column">
          <Typography>Mes inormations de profil</Typography>

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
                value={userData.user[field.key]}
              />
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
                value={profileData.profile[field.key]}
              />
            </Stack>
          ))}
          <Stack display="flex" justifyContent="center">
            <MuiButton
              variant="outlined"
              sx={{ background: '#FFA500', width: '3rem' }}
              onClick={handleEditClick}
            >
              Mise à jour du profil
            </MuiButton>
          </Stack>
        </Box>
      )}

      {isEditing && (
        <Box
          display="flex"
          flexDirection="column"
          width="50%"
          margin="auto"
          gap="20px"
          padding="15px"
        >
          <Typography> Mise à jour du profil</Typography>
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
                value={editedProfileData[field.key]}
                onChange={(e) =>
                  setEditedProfileData({
                    ...editedProfileData,
                    [field.key]: e.target.value,
                  })
                }
              />
            </Stack>
          ))}
          <Stack display="flex" justifyContent="center">
            <MuiButton
              variant="outlined"
              sx={{
                alignSelf: 'center',
                background: '#FFA500',
                color: 'black',
              }}
              onClick={handleUpdateProfile}
            >
              Enregistrer les Modifications
            </MuiButton>
          </Stack>
        </Box>
      )}
    </Box>
  );
}

export default ProfileInfos;
