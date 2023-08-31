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
import instanceAxios from '../../../services/axiosInterceptor';
import MuiButton from '../../Buttons/Button';
import { makeStyles } from 'tss-react/mui';
import { useNavigate } from 'react-router-dom';

const useStyles = makeStyles()((theme) => {
  return {
    form: {
      display: 'flex',
      flexDirection: 'column',
      gap: '3rem',
      margin: 'auto',
      width: '40%',
      padding: '2rem',
      borderRadius: '10px',
      backgroundColor: theme.palette,
      boxShadow: theme.shadows[5],
      [theme.breakpoints.down('md')]: {
        width: 'auto',
        marginTop: '5rem',
      },
    },
    input: {
      textAlign: 'left',
      fontSize: '19px',
      fontWeight: 'bold',
    },
  };
});

function SignupForm() {
  const navigate = useNavigate();
  const { classes } = useStyles();
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    user_type: 'Tutor',
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
      navigate('/login');
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
          <MenuItem value="Student">Étudiant</MenuItem>
          <MenuItem value="Tutor">Tuteur</MenuItem>
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
