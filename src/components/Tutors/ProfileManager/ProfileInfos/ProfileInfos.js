import React, { useEffect, useState } from 'react';
import { Box, Stack, Typography, TextField, FormLabel } from '@mui/material';
import api from '../../../../services/api';
import MuiButton from '../../../Buttons/Button';
import profileFields from './ProfileInfo.schema';
import userFields from '../userInfos.schema';

import useStyles from './style';

function ProfileInfos({ userInfos, profileInfos }) {
  const { classes } = useStyles();
  const [userData, setUserData] = useState(userInfos);
  const [profileData, setProfileData] = useState(profileInfos);
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
  }, [userData]);

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

  return (
    <Box className={classes.profileContainer}>
      {!isEditing && (
        <Box className={classes.profileContainerNotEditing}>
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
          <Stack className={classes.updateButton}>
            <MuiButton
              variant="outlined"
              sx={{ background: '#FFA500' }}
              onClick={handleEditClick}
            >
              Mettre à jour le profil
            </MuiButton>
          </Stack>
        </Box>
      )}

      {isEditing && (
        <Box className={classes.editProfileContainer}>
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
          <Stack className={classes.updateButton}>
            <MuiButton variant="outlined" onClick={handleUpdateProfile}>
              Enregistrer
            </MuiButton>
            <MuiButton onClick={() => setIsEditing(false)}>Annuler</MuiButton>
          </Stack>
        </Box>
      )}
    </Box>
  );
}

export default ProfileInfos;
