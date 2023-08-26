import React, { useState, useEffect } from 'react';
import api from '../../../../services/api'
import { Box, Stack, Typography,  TextField, FormLabel} from '@mui/material';
import profileFields from '../ProfileInfo.schema';
import MuiButton from '../../../Buttons/Button'

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
     <Typography>Mes inoformations de profil</Typography>
     {profileFields.map((field) => (
            <Stack key={field.key}>
              <FormLabel sx={{ fontSize: '19px', fontWeight: 'bold' }}>{field.label}</FormLabel>
              <TextField type='text' border='1px solid #FFA500' padding='10px' width='50%' value={profileData[field.key]} />
            </Stack>
          ))}
  
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
          {profileFields.map((field) => (
            <Stack key={field.key} display='flex' flexDirection='column' gap='10px'>
              <FormLabel sx={{ fontSize: '19px', fontWeight: 'bold' }}>{field.label}</FormLabel>
              <TextField
                value={editedProfileData[field.key]}
                onChange={(e) => setEditedProfileData({ ...editedProfileData, [field.key]: e.target.value })}
              />
            </Stack>
          ))}
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
