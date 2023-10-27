import React, { useEffect, useState } from 'react';
import {
  Box,
  Stack,
  Typography,
  TextField,
  FormLabel,
  Container,
} from '@mui/material';
import api from '../../../../services/api';
import MuiButton from '../../../Buttons/Button';
import profileFields from './ProfileInfo.schema';
import userFields from '../userInfos.schema';
import ProfileField from './ProfileField';
import OrangeBar from '../../../Assets/OrangeBar';

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
      await api.put(`/tutors/profile/${userData.user.id}`, editedProfileData);

      // Mettre à jour les donnees
      const updatedProfileResponse = await api.get(
        `/tutors/profile/${userData.user.id}`,
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
          <Typography variant="h6" textAlign="center">
            Mes inormations de profil
          </Typography>

          {userFields.map((field) => (
            <Container>
              <ProfileField
                key={field.key}
                label={field.label}
                value={userData.user[field.key]}
                onUpdate={(newValue) => updateUserField(field.key, newValue)}
              />

              <OrangeBar />
            </Container>
          ))}

          {profileFields.map((field) => (
            <Container>
              <ProfileField
                key={field.key}
                label={field.label}
                value={profileData.profile[field.key]}
                onUpdate={(newValue) => updateProfileField(field.key, newValue)}
              />
              <OrangeBar />
            </Container>
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
          <Typography variant="h6"> Mise à jour du profil</Typography>
          {profileFields.map((field) => (
            <Stack key={field.key}>
              <FormLabel sx={{ fontSize: '19px', fontWeight: 'bold' }}>
                {field.label}
              </FormLabel>
              <TextField
                type="text"
                value={editedProfileData[field.key]}
                onChange={(e) =>
                  setEditedProfileData({
                    ...editedProfileData,
                    [field.key]: e.target.value,
                  })
                }
              />
              <OrangeBar />
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
