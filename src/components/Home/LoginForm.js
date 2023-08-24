import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom'
import { Box,Stack,  TextField, Typography } from '@mui/material';
import instanceAxios from '../../services/axiosInterceptor';
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
    },
    button :{
      fontWeight: 'bold',
      '&:hover': {
        backgroundColor: '#FF8C00',
      }
    },
    container : {
      height :'100vh', 
      paddingTop: '15rem'
    }
  };
});


function LoginForm()  {
  const {classes} = useStyles();
  const navigate = useNavigate()
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'email') setEmail(value);
    if (name === 'password') setPassword(value);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await instanceAxios.post('/auth/login', {
        email,
        password,
      });
      console.log('User ID:', response.data.userId);
      // Redirigez vers la page de profil du tuteur ou de l'etudiant après la connexion réussie
      if(response.data.userType === 'Tutor') {
        navigate('/tutor-dashboard')
      }else if(response.data.userType === 'Student') {
        navigate('/student-dashboard')
      }else {
        navigate('/')
      }
    } catch (error) {
      setError('Adresse email ou mot de passe incorrect');
    }
  };

  // const handleLogout = async () => {
  //   try {
      // Faire une requête à votre API pour déconnecter l'utilisateur
  //     await api.post('/auth/logout', null, {
  //       headers: {
  //         authorization: `Bearer ${localStorage.getItem('token')}`,
  //       },
  //     });

      // Supprimez le token de l'utilisateur du stockage local
  //     localStorage.removeItem('token');

      // Rechargez la page pour réinitialiser l'état de l'application
  //     window.location.reload();
  //   } catch (error) {
  //     console.error('Erreur lors de la déconnexion :', error);
  //   }
  // };
 
  

  return (
    <Box className={classes.container}>
    <form onSubmit={handleFormSubmit} className={classes.form} >
      <Typography variant='h4'>Se Connecter</Typography>
      <Stack  display='flex' gap='15px' flexDirection='column' justifyContent='center'>
        {/* <FormLabel>E-mail :</FormLabel> */}
        <TextField type="email" label='Email'  placeholder='email' name="email"  value={email} onChange={handleInputChange} required />
      </Stack>

      <Stack display='flex' flexDirection='column'  justifyContent='center'> 
        {/* <FormLabel>Mot de passe :</FormLabel> */}
        <TextField type="password"  label='Mot de passe' placeholder='...........' name="password" value={password} onChange={handleInputChange} required />
      </Stack>
      {error && <div>{error}</div>}
      <Box>
      <Stack>
      <MuiButton className={classes.button} type="submit">Se connecter</MuiButton>
      </Stack>
      </Box>
      
    
    </form>
    </Box>
  );
};

export default LoginForm;
