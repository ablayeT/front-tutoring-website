import React, { useState, useEffect } from 'react';
// import axios from 'axios';
import api from '../../../services/api'
import { Box, Stack, Typography,  TextField, FormLabel} from '@mui/material';


import MuiButton from '../../Buttons/Button'

function ProfileInfos({profileData, userData}) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedProfileData, setEditedProfileData] = useState({
    skills: '',
    experience:'',
    grade_level: '',
    major: '',
    school_name: '',
  })
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
  }

    const handleUpdateProfile = async () => {
      try {
        // Send updated profile data to the server
        await api.put(`/students/profile/${userInfos.user.id}`, editedProfileData, {
          headers: {
            authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        });
  
        // Refresh the profile data
        const updatedProfileResponse = await api.get(`/students/profile/${userInfos.user.id}`, {
          headers: {
            authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        });
        setProfileInfos(updatedProfileResponse.data);
        setIsEditing(false);
      } catch (error) {
        console.error(error);
      }
    };

  return (
    <Box  display='flex' alignSelf='center'  justifyContent='center' flexDirection='column'> 
     {!isEditing &&  ( 
      <Box  display='flex' gap='20px' margin='20px' flexDirection='column'>
     <Typography>Mon inormations de profil</Typography>
      <Stack >
        <FormLabel sx={{fontSize:'19px', fontWeight:'bold' }}>Nom </FormLabel>
        <TextField  type='text' border='1px solid ' padding='10px' width='50%' value={userInfos.user.first_name}/>
      </Stack>
      <Stack >
        <FormLabel sx={{fontSize:'19px', fontWeight:'bold' }}>Prénom </FormLabel>
        <TextField  type='text' border='1px solid #FFA500' padding='10px' width='50%' value={userInfos.user.last_name}/>
      </Stack>
      <Stack>
        <FormLabel sx={{fontSize:'19px', fontWeight:'bold' }}>Email</FormLabel>
        <TextField  type='text' border='1px solid #FFA500' padding='10px' width='50%' value={userInfos.user.email}/>
      </Stack>  
      <Stack>
        <FormLabel sx={{fontSize:'19px', fontWeight:'bold' }}>Compétences</FormLabel>
        <TextField  type='text' border='1px solid #FFA500' padding='10px' width='50%' value={profileInfos.skills}/>
      </Stack>
      <Stack>
        <FormLabel sx={{fontSize:'19px', fontWeight:'bold' }}>Expériences</FormLabel>
        <TextField  type='text' border='1px solid #FFA500' padding='10px' width='50%' value={profileInfos.experience}/>
      </Stack>
      <Stack>
        <FormLabel sx={{fontSize:'19px', fontWeight:'bold' }}>Niveau d'étude</FormLabel>
        <TextField  type='text' border='1px solid #FFA500' padding='10px' width='50%' value={profileInfos.grade_level}/>
      </Stack>
      <Stack>
        <FormLabel sx={{fontSize:'19px', fontWeight:'bold' }}>Matières</FormLabel>
        <TextField  type='text' border='1px solid #FFA500' padding='10px' width='50%' value={profileInfos.major}/>
      </Stack>
      <Stack>
        <FormLabel sx={{fontSize:'19px', fontWeight:'bold' }}>Etablissement</FormLabel>
        <TextField  type='text' border='1px solid #FFA500' padding='10px' width='50%' value={profileInfos.school_name}/>
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
          <FormLabel  sx={{fontSize:'19px', fontWeight:'bold' }}>Compétences</FormLabel>
          <TextField
            value={editedProfileData.skills}
            onChange={(e) => setEditedProfileData({ ...editedProfileData, skills: e.target.value })}
          />
          </Stack>
          <Stack display='flex'  flexDirection='column' gap='10px' >
          <FormLabel  sx={{fontSize:'19px', fontWeight:'bold' }}>Expériences</FormLabel>
          <TextField
            value={editedProfileData.skills}
            onChange={(e) => setEditedProfileData({ ...editedProfileData, experience: e.target.value })}
          />
          </Stack>
          <Stack>
          <FormLabel  sx={{fontSize:'19px', fontWeight:'bold' }}>Niveau d'étude</FormLabel>
          <TextField
            value={editedProfileData.experience}
            onChange={(e) => setEditedProfileData({ ...editedProfileData, grade_level: e.target.value })}
          />
          </Stack>
          <Stack>
          <FormLabel  sx={{fontSize:'19px', fontWeight:'bold' }}>Matières</FormLabel>
          <TextField type='text'
            value={editedProfileData.hourly_rate}
            onChange={(e) => setEditedProfileData({ ...editedProfileData, major: e.target.value })}
          />
          </Stack>
          
          <Stack>
          <FormLabel sx={{fontSize:'19px', fontWeight:'bold' }}>Etablissement</FormLabel>
          <TextField
            value={editedProfileData.availability}
            onChange={(e) => setEditedProfileData({ ...editedProfileData, school_name: e.target.value })}
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
