import React, { useState, useEffect } from 'react';
import { Box, Stack, Typography, Button, TextField, FormLabel} from '@mui/material';
 import api from '../../../services/api'
 import Image from '../../Image.js'
//  const url = process.env.REACT_APP_IMAGE_URL;

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

  console.log('userData:', userData);
  console.log('profileData:', profileData);

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
    <Box border='1px solid red'>
     {!isEditing &&  ( 
      <Box>
     <Typography>Mon inormations de profil</Typography>
      <Stack>
        <Typography>photo de profil</Typography>
        <Image src={`http://localhost:3000/images/${profileData.profile.imageUrl}`}  alt='ProfileImage' width= '100px' height= '100px' />   
      </Stack>
      <Stack>
        <Typography>Nom</Typography>
        <Typography>{userData.user.full_name}</Typography>
      </Stack>
      <Stack>
        <Typography>Email</Typography>
        <Typography>{userData.user.email}</Typography>
      </Stack>  
      <Stack>
        <Typography>Compétences</Typography>
        <Typography>{profileData.profile.skills}</Typography>
      </Stack>
      <Stack>
        <Typography>Expériences</Typography>
        <Typography>{profileData.profile.experience}</Typography>
      </Stack>
      <Stack>
        <Typography>Tarif horaire</Typography>
        <Typography>{profileData.profile.hourly_rate}</Typography>
      </Stack>
      <Stack>
        <Typography>Disponibilté</Typography>
        <Typography>{profileData.profile.availability}</Typography>
      </Stack> 
      </Box>
      )}

      {isEditing && (
        <Box width='40%' margin='auto' border='1px solid gray' gap='15px' padding='15px' borderRadius='15px'>
          <Stack>
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
          <TextField
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
        </Box>
      
      )}
        {isEditing ? (
        <Button variant="outlined" sx={{alignSelf:'center'}} onClick={handleUpdateProfile}>
          Enregistrer
        </Button>
      ) : (
        <Button variant="outlined" onClick={handleEditClick}>
          Modifier
        </Button>
      )}

      {/* <Button variant="outlined" component={NavLink} to="/tutor-dashboard/profile/edit">
        Modifier
      </Button> */}
     
    </Box>

  );
}

export default ProfileInfos;
