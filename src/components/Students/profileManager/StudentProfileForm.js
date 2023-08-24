import React, { useState } from 'react';
import { Box, FormControl,Divider, Stack, TextField, Typography } from '@mui/material';
import api from '../../../services/api';
import Button from '../../Buttons/Button'


function StudentProfileForm() {
  const [isProfileComplete, setIsProfileComplete] = useState(false);
  const [formData, setFormData] = useState({
    imageUrl: '',
    skills: '',
    experience: '',
    grade_level: '',
    major: '',
    university: '',
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if(name === 'imageUrl' && files && files.length > 0) {
      setFormData({...formData, imageUrl: files[0]});
    }else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Récupérer l'id de l'utilisateur à partir du localStorage
      const userId = localStorage.getItem('userId');
      console.log('User ID in StudentProfileForm:', userId);

      // Créer un nouvel objet FormData pour inclure le fichier image
      const formDataToSend = new FormData();
      formDataToSend.append('imageUrl', formData.imageUrl);
      formDataToSend.append('skills', formData.skills);
      formDataToSend.append('experience', formData.experience);
      formDataToSend.append('grade_level', formData.grade_level);
      formDataToSend.append('major', formData.major);
      formDataToSend.append('university', formData.university);

      console.log('formDataToSend', formDataToSend)

      // Envoyer une requête POST au backend pour enregistrer le profil de l'étudiant
      const response = await api.post(`/students/profile/${userId}`, formDataToSend, {
        headers: {
          'authorization': `Bearer ${localStorage.getItem('token')}`,
          'Content-Type': 'multipart/form-data' // Ajoutez l'en-tête Content-Type pour indiquer que le formulaire contient des données binaires (fichier)
        },
      });
      console.log(response.data); // un message de succès)
      if(response.data) {
        setIsProfileComplete(true);
      }else {
        setIsProfileComplete(false)
      }
    } catch (error) {
      console.error(error); // Pour afficher toute erreur survenue lors de la requête
    }
  };

  return (
    <Box display='flex'  justifyContent='center' width='50%' margin='auto' >
      { isProfileComplete ? (
      <Stack>
        <Typography>Profil de l'etudiant</Typography>
        {/* afficher les détails du profil de l'etudiant */}
      </Stack>
      ) :(
    <FormControl onSubmit={handleSubmit} encType="multipart/form-data" sx={{ gap:'20px', width:'100%'}}>
      <Box display='flex' justifyContent='center'>
      <Typography variant='h5'>Completez votre profil</Typography>
      </Box>
      <Divider />
      <Stack>
        <TextField type="file" name="imageUrl" id="imageUrl" onChange={handleChange} />
      </Stack>
      <Stack>
        <TextField name="skills" label="Compétences" placeholder="Compétences" id="skills" value={formData.skills} onChange={handleChange} />
      </Stack>
      <Stack>
        <TextField name="experience" label="Expériences" placeholder="Expériences" id="experience" value={formData.experience} onChange={handleChange} />
      </Stack>
      <Stack>
        <TextField type="text" label="Niveau d'étude" placeholder="Niveau d'étude" name="grade_level" id="grade_level" value={formData.grade_level} onChange={handleChange} />
      </Stack>
      <Stack>
        <TextField type="text" label="Domaine d'étude" placeholder="domaine d'étude" name="major" id="major" value={formData.major} onChange={handleChange} />
      </Stack>
      <Stack>
        <TextField type="text" label='Etablissement' placeholder="Etablissement" name="school_name" id="school_name" value={formData.school_name} onChange={handleChange} />
      </Stack>
      <Button type="submit" onClick={handleSubmit}>Soumettre</Button>
    </FormControl>
    )}
    </Box>
  );
}

export default StudentProfileForm;
