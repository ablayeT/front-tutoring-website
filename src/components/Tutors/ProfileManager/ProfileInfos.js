import React, { useState, useEffect } from 'react';
import { Box, Stack, Typography,  TextField, FormLabel} from '@mui/material';
 import api from '../../../services/api'
 import MuiButton from '../../../components/Buttons/Button';

function ProfileInfos() {
  
  const [userData, setUserData] = useState(null);
  const [profileData, setProfileData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [editedProfileData, setEditedProfileData] = useState({
    skills: '',
    experience: '',
    hourly_rate: '',
    availability: '',
  })

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userId = localStorage.getItem('userId');
        const userResponse = await api.get(`/users/profiles/${userId}`, {
          headers: {
            authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        });

        setUserData(userResponse.data);
      } catch (error) {
        console.error(error);
      }
    };

    const fetchProfileData = async () => {
      try {
        const userId = localStorage.getItem('userId');
        const profileResponse = await api.get(`/tutors/profile/${userId}`, {
          headers: {
            authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        });

        setProfileData(profileResponse.data);
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

  }, []);

  // console.log('userData:', userData);
  // console.log('profileData:', profileData);

  if (isLoading) {
    return <Typography>Loading</Typography>;
  }

  const handleEditClick = () => {
    setIsEditing(true);
    setEditedProfileData({
      skills: profileData.profile.skills,
      experience: profileData.profile.experience,
      hourly_rate: profileData.profile.hourly_rate,
      availability: profileData.profile.availability,
    });
  };

  // console.log(url)

  const handleUpdateProfile = async () => {
    try {
      // Send updated profile data to the server
      await api.put(`/tutors/profile/${userData.user.id}`, editedProfileData, {
        headers: {
          authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });

      // Refresh the profile data
      const updatedProfileResponse = await api.get(`/tutors/profile/${userData.user.id}`, {
        headers: {
          authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      setProfileData(updatedProfileResponse.data);
      setIsEditing(false);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Box  display='flex'   alignSelf='center'  justifyContent='center' flexDirection='column'> 
     {!isEditing &&  ( 
      <Box  display='flex' gap='20px' margin='20px' flexDirection='column'>
     <Typography>Mon inormations de profil</Typography>
      <Stack >
        <Typography>Nom Prénom </Typography>
        <TextField marginTop='10px' type='text' border='1px solid #FFA500' padding='10px' width='50%' value={userData.user.full_name}></TextField>
      </Stack>
      <Stack>
        <Typography>Email</Typography>
        <TextField marginTop='10px' type='text' border='1px solid #FFA500' padding='10px' width='50%' value={userData.user.email}></TextField>
      </Stack>  
      <Stack>
        <Typography>Compétences</Typography>
        <TextField marginTop='10px' type='text' border='1px solid #FFA500' padding='10px' width='50%' value={profileData.profile.skills}></TextField>
      </Stack>
      <Stack>
        <Typography>Expériences</Typography>
        <TextField marginTop='10px' type='text' border='1px solid #FFA500' padding='10px' width='50%' value={profileData.profile.experience}></TextField>
      </Stack>
      <Stack>
        <Typography>Tarif horaire</Typography>
        <TextField marginTop='10px' type='number' border='1px solid #FFA500' padding='10px' width='50%' value={profileData.profile.hourly_rate}></TextField>
      </Stack>
      <Stack>
        <Typography>Disponibilté</Typography>
        <TextField marginTop='10px' type='text' border='1px solid #FFA500' padding='10px' width='50%' value={profileData.profile.availability}></TextField>
      </Stack>
      <Stack display='flex'justifyContent='center' >
        <MuiButton variant="outlined" sx={{background:'#FFA500', width:'3rem' }} onClick={handleEditClick}>
          Modifier mon proifil
        </MuiButton>
      </Stack> 
      </Box>
      )}

      {isEditing && (
        <Box display='flex'  flexDirection='column' width='50%' margin='auto'  gap='20px' padding='15px' >
          <Typography>Modification du profil</Typography>
          <Stack display='flex'  flexDirection='column' gap='10px' >
          <FormLabel>Compétences</FormLabel>
          <TextField
            value={editedProfileData.skills}
            onChange={(e) => setEditedProfileData({ ...editedProfileData, skills: e.target.value })}
          />
          </Stack>
          <Stack>
          <FormLabel>Experiences</FormLabel>
          <TextField
            value={editedProfileData.experience}
            onChange={(e) => setEditedProfileData({ ...editedProfileData, experience: e.target.value })}
          />
          </Stack>
          <Stack>
          <FormLabel>Tarifs Horaires</FormLabel>
          <TextField type='number'
            value={editedProfileData.hourly_rate}
            onChange={(e) => setEditedProfileData({ ...editedProfileData, hourly_rate: e.target.value })}
          />
          </Stack>
          
          <Stack>
          <FormLabel>Disponibilité</FormLabel>
          <TextField
            value={editedProfileData.availability}
            onChange={(e) => setEditedProfileData({ ...editedProfileData, availability: e.target.value })}
          />
          </Stack>
          <Stack display='flex' justifyContent='center'>
          <MuiButton variant="outlined" sx={{alignSelf:'center', background:'#FFA500', color:'black'}} onClick={handleUpdateProfile}>
          Enregistrer les Modifications
        </MuiButton>
        </Stack>
        </Box>
      
      )}
    </Box>

  );
}

export default ProfileInfos;
