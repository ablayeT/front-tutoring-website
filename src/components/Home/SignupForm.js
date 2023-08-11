import React, { useState } from 'react';
import { Box, Button, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import api from '../../services/api';
function SignupForm () {
  const [formData, setFormData] = useState({
    full_name: '',
    email: '',
    password: '',
    user_type : 'Tutor', 

  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Envoyer une requête POST à votre backend pour l'inscription
      const response = await api.post('/auth/signup', formData);
      console.log(response.data); // Afficher la réponse du backend (par exemple, un message de succès ou les détails de l'utilisateur enregistré)
    } catch (error) {
      console.error(error); // Afficher toute erreur survenue lors de la requête
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Box display='flex' flexDirection='column' width='40%'  margin='auto' gap='20px'  textAlign='center'>
      <Box>
        <InputLabel htmlFor="full_name">Nom - Prénom</InputLabel>
        <TextField type="text" id="full_name" name="full_name" label='Nom - Prénom' placeholder='Nom - Prénom' sx={{background:'white', border:'1.5px solid #FFA500', borderRadius:'10px'}} value={formData.full_name} onChange={handleChange} />
      </Box>
      <Box>
        <InputLabel htmlFor="email">E-mail</InputLabel>
        <TextField type="email" label='E-mail' margin='dense' placeholder='email' name="email" sx={{ background:'white',border:'1.5px solid #FFA500', borderRadius:'10px'}} value={formData.email} onChange={handleChange} />
      </Box>
      <Box>
        <InputLabel htmlFor="password">Mot de passe</InputLabel>
        <TextField type="password"  label='Mot de passe' margin='normal' sx={{background:'white', border:'1.5px solid #FFA500', borderRadius:'10px'}} placeholder='...........' name="password" value={formData.password} onChange={handleChange} />
      </Box>
      <Box>
        <InputLabel htmlFor="user_type">Type</InputLabel>
        <Select label='Type' name="user_type" id="user_type" sx={{background:'white', border:'1.5px solid #FFA500'}} value={formData.user_type} onChange={handleChange}>
          <MenuItem value="Student">Étudiant</MenuItem>
          <MenuItem value="Tutor">Tuteur</MenuItem>
        </Select>
      </Box>
      <Button type="submit" sx={{background:'#FFA500',color:'black',width:'50%',margin:'auto', marginBottom:'30px'}}>S'inscrire</Button>
      </Box>
    </form>
  );
};

export default SignupForm;
