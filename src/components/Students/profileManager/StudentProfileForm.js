import React, { useState } from 'react';
import { Box, Stack, Typography } from '@mui/material';
import api from '../../../services/api';


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
    <Box>
      { isProfileComplete ? (
      <Stack>
        <Typography>Profil de l'etudiant</Typography>
        {/* afficher les détails du profil de l'etudiant */}
      </Stack>
      ) :(
    <form onSubmit={handleSubmit} encType="multipart/form-data">
      <h2>Profil de l'étudiant</h2>
      <div>
        <label htmlFor="imageUrl">Image de profil</label>
        <input type="file" name="imageUrl" id="imageUrl" onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="skills">Compétences</label>
        <textarea name="skills" id="skills" value={formData.skills} onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="experience">Expérience</label>
        <textarea name="experience" id="experience" value={formData.experience} onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="grade_level">Niveau d'études</label>
        <input type="text" name="grade_level" id="grade_level" value={formData.grade_level} onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="major">domaine d'étude</label>
        <input type="text" name="major" id="major" value={formData.major} onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="university">Etablissement</label>
        <input type="text" name="university" id="university" value={formData.university} onChange={handleChange} />
      </div>
      <button type="submit">Soumettre</button>
    </form>
    )}
    </Box>
  );
}

export default StudentProfileForm;
