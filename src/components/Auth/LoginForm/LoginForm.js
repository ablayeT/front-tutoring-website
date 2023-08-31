import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Stack, TextField, Typography } from '@mui/material';
// import instanceAxios from '../../../services/axiosInterceptor';
import MuiButton from '../../Buttons/Button';
import { useAuth } from '../AuthContext/AuthContext';
import { useStyles } from './LoginForm.styles';

function LoginForm() {
  const { classes } = useStyles();
  const navigate = useNavigate();

  const { login } = useAuth();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const [error, setError] = useState('');

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
      // console.log('User ID:', response.data.userId);
      // Redirigez vers la page de profil du tuteur ou de l'etudiant après la connexion réussie
      console.log('userData:', userData);
      console.log('userType1 :', userData.userType);
      if (userData.userType === 'Tutor') {
        navigate('/tutor-dashboard');
      } else if (userData.userType === 'Student') {
        navigate('/student-dashboard');
      } else {
        navigate('/');
      }
    }
  };

  return (
    <Box className={classes.container}>
      <form onSubmit={handleFormSubmit} className={classes.form}>
        <Typography variant="h4">Se Connecter</Typography>
        <Stack
          display="flex"
          gap="15px"
          flexDirection="column"
          justifyContent="center"
        >
          {/* <FormLabel>E-mail :</FormLabel> */}
          <TextField
            type="email"
            label="Email"
            placeholder="email"
            name="email"
            value={email}
            defaultValue={'emile@gmail.com'}
            // defaultValue={('abdoulaye@gmail.com')}
            onChange={handleInputChange}
            required
          />
        </Stack>

        <Stack display="flex" flexDirection="column" justifyContent="center">
          {/* <FormLabel>Mot de passe :</FormLabel> */}
          <TextField
            type="password"
            label="Mot de passe"
            placeholder="..........."
            name="password"
            value={password}
            defaultValue={'Emile'}
            // defaultValue={'Abdoulaye'}
            onChange={handleInputChange}
            required
          />
        </Stack>
        {/* {error && <div>{error}</div>} */}
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