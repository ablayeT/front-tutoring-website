import React, { useState, useEffect } from 'react';
import { Box, Typography, TextField, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import instanceAxios from '../../../../services/axiosInterceptor/axiosInterceptor';

function EditProfile() {
  const [profileData, setProfileData] = useState({
    skills: '',
    experience: '',
    hourly_rate: '',
    availability: '',
  });

  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const userId = localStorage.getItem('userId');
        const profileResponse = await instanceAxios.get(
          `/tutors/profile/${userId}`,
          {
            headers: {
              authorization: `Bearer ${localStorage.getItem('token')}`,
            },
          },
        );

        setProfileData(profileResponse.data.profile);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProfileData();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfileData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userId = localStorage.getItem('userId');
      const response = await instanceAxios.put(
        `/tutors/profile/${userId}`,
        profileData,
        {
          headers: {
            authorization: `Bearer ${localStorage.getItem('token')}`,
            'Content-Type': 'application/json',
          },
        },
      );
      console.log(response.data);
      navigate('/profile'); // Rediriger vers la page de profil après la mise à jour
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Box>
      <Typography>Mise à jour du profil</Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Compétences"
          name="skills"
          value={profileData.skills}
          onChange={handleChange}
          multiline
          fullWidth
        />
        <TextField
          label="Expérience"
          name="experience"
          value={profileData.experience}
          onChange={handleChange}
          multiline
          fullWidth
        />
        <TextField
          label="Taux horaire"
          name="hourly_rate"
          value={profileData.hourly_rate}
          onChange={handleChange}
          fullWidth
        />
        <TextField
          label="Disponibilité"
          name="availability"
          value={profileData.availability}
          onChange={handleChange}
          multiline
          fullWidth
        />
        <Button type="submit" variant="outlined">
          Enregistrer les modifications
        </Button>
      </form>
    </Box>
  );
}

export default EditProfile;
