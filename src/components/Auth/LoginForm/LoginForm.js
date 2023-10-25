import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Stack, TextField, Typography } from '@mui/material';
import MuiButton from '../../Buttons/Button';
import { useAuth } from '../AuthContext/AuthContext';
import { useStyles } from './Styles/LoginForm.styles';
import OrangeBar from '../../Assets/OrangeBar';

function LoginForm() {
  const { classes } = useStyles();
  const navigate = useNavigate();

  const { login } = useAuth();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'email') setEmail(value);
    if (name === 'password') setPassword(value);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const userData = await login(email, password);

    if (userData.error) {
      console.log('Erreur de connexion :', userData.error);
    } else {
      // Redirigez vers la page de profil du tuteur ou de l'etudiant après la connexion réussie
      console.log('userData:', userData);
      console.log('userType1 :', userData.userType);
      if (userData.userType === 'Tutor') {
        localStorage.setItem('userType', 'Tutor');
        navigate('/tutor-dashboard');
      } else if (userData.userType === 'Student') {
        localStorage.setItem('userType', 'Student');
        navigate('/student-dashboard');
      } else {
        navigate('/');
      }
    }
  };

  return (
    <Box>
      <form onSubmit={handleFormSubmit} className={classes.form}>
        <Typography variant="h4">Se Connecter</Typography>
        <Stack display="flex" flexDirection="column" justifyContent="center">
          <OrangeBar />
          <TextField
            type="email"
            label="Email"
            placeholder="email"
            name="email"
            value={email}
            onChange={handleInputChange}
            required
          />
          <OrangeBar />
        </Stack>

        <Stack display="flex" flexDirection="column" justifyContent="center">
          <OrangeBar />
          <TextField
            type="password"
            label="Mot de passe"
            placeholder="..........."
            name="password"
            value={password}
            onChange={handleInputChange}
            required
          />
          <OrangeBar />
        </Stack>
        <Box>
          <Stack>
            <MuiButton className={classes.button} type="submit">
              Se connecter
            </MuiButton>
          </Stack>
        </Box>
      </form>
    </Box>
  );
}

export default LoginForm;
