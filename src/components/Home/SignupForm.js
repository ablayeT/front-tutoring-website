import React, { useState } from 'react';
import { Box, InputLabel, MenuItem, Select, Stack, TextField } from '@mui/material';
import api from '../../services/api';
import MuiButton from '../../components/Buttons/Button'
import { makeStyles } from 'tss-react/mui'


const useStyles = makeStyles()((theme) =>{
  return {
    form : {
      display: 'flex',
      flexDirection: 'column',
      gap: '3rem', 
      margin: 'auto',
      width:'40%',
      padding: '2rem',
      borderRadius: '10px',
      backgroundColor: theme.palette,
      boxShadow: theme.shadows[5],
      [theme.breakpoints.down('md')]: {
        width: '90%',
      },
      
    }
  };
});



function SignupForm () {
  const {classes} = useStyles();
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
    <form onSubmit={handleSubmit} className={classes.form}>
      <Stack>
        <InputLabel htmlFor="full_name">Nom - Prénom</InputLabel>
        <TextField type="text" id="full_name" name="full_name" label='Nom - Prénom' placeholder='Nom - Prénom'  value={formData.full_name} onChange={handleChange} />
      </Stack>
      <Stack>
        <InputLabel htmlFor="email">E-mail</InputLabel>
        <TextField type="email" label='E-mail' margin='dense' placeholder='email' name="email" value={formData.email} onChange={handleChange} />
      </Stack>
      <Stack>
        <InputLabel htmlFor="password">Mot de passe</InputLabel>
        <TextField type="password"  label='Mot de passe' margin='normal' placeholder='...........' name="password" value={formData.password} onChange={handleChange} />
      </Stack>
      <Stack>
        <InputLabel htmlFor="user_type">Type</InputLabel>
        <Select label='Type' name="user_type" id="user_type" value={formData.user_type} onChange={handleChange}>
          <MenuItem value="Student">Étudiant</MenuItem>
          <MenuItem value="Tutor">Tuteur</MenuItem>
        </Select>
      </Stack>
      <Box>
        <Stack>
      <MuiButton type="submit">S'inscrire</MuiButton>
       </Stack>
      </Box>
     
    </form>
  );
};

export default SignupForm;
