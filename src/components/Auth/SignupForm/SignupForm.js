import React, { useState } from 'react';
import {
  Box,
  MenuItem,
  Typography,
  Select,
  Stack,
  FormControl,
  TextField,
} from '@mui/material';
import instanceAxios from '../../../services/api/index.js';
import MuiButton from '../../Buttons/Button';
import { useNavigate } from 'react-router-dom';
import { useStyles } from './Styles/SignupForm.style';

function SignupForm() {
  const navigate = useNavigate();
  const { classes } = useStyles();
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    user_type: 'tutor',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Envoyer une requête POST à votre backend pour l'inscription
      const response = await instanceAxios.post('/auth/signup', formData);
      console.log(response.data);
      navigate('/auth');
    } catch (error) {
      console.error(error); // Afficher toute erreur survenue lors de la requête
    }
  };

  return (
    <FormControl
      component="form"
      onSubmit={handleSubmit}
      className={classes.form}
    >
      <Typography variant="h4">S'inscrire</Typography>
      <Stack>
        <TextField
          type="text"
          id="last_name"
          name="last_name"
          label="Nom"
          placeholder="Nom"
          value={formData.last_name}
          onChange={handleChange}
        />
      </Stack>
      <Stack>
        <TextField
          type="text"
          id="first_name"
          name="first_name"
          label="Prénom"
          placeholder="Prénom"
          value={formData.first_name}
          onChange={handleChange}
        />
      </Stack>
      <Stack>
        <Select
          type="select"
          label="Type"
          name="user_type"
          id="user_type"
          value={formData.user_type}
          onChange={handleChange}
        >
          <MenuItem value="student">Étudiant</MenuItem>
          <MenuItem value="tutor">Tuteur</MenuItem>
        </Select>
      </Stack>
      <Stack>
        <TextField
          type="email"
          label="Email"
          margin="dense"
          placeholder="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </Stack>
      <Stack>
        <TextField
          type="password"
          label="Mot de passe"
          margin="normal"
          placeholder="..........."
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
      </Stack>

      <Box>
        <Stack>
          <MuiButton type="submit">S'inscrire</MuiButton>
        </Stack>
      </Box>
    </FormControl>
  );
}

export default SignupForm;
