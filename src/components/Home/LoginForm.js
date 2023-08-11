import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom'
import { Box, Button, InputLabel, TextField } from '@mui/material';
import api from '../../services/api';

function LoginForm()  {
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
      const response = await api.post('/auth/login', {
        email,
        password,
      });
      console.log('User ID:', response.data.userId);

      // Enregistrez le userType dans le localStorage
      localStorage.setItem('userType', response.data.userType);

      localStorage.setItem('userId', response.data.userId);
      localStorage.setItem('token', response.data.token);

      // Redirigez vers la page de profil du tuteur ou de l'etudiant après la connexion réussie
      // navigate(response.data.userType === 'Tutor' ?  : );
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
    <form onSubmit={handleFormSubmit} >
      <Box display='flex' flexDirection='column' width='40%'  margin='auto' gap='20px'  justifyContent='center' textAlign='center'>

      <Box  display='flex' gap='15px' flexDirection='column' justifyContent='center'>
        <InputLabel>E-mail :</InputLabel>
        <TextField type="email" label='E-mail' margin='dense' placeholder='email' name="email" sx={{ background:'white',border:'1.5px solid #FFA500', borderRadius:'10px'}} value={email} onChange={handleInputChange} required />
      </Box>

      <Box display='flex'  fontSize='15px' flexDirection='column'  justifyContent='center'> 
        <InputLabel >Mot de passe :</InputLabel>
        <TextField type="password"  label='Mot de passe' margin='normal' sx={{background:'white', border:'1.5px solid #FFA500', borderRadius:'10px'}} placeholder='...........' name="password" value={password} onChange={handleInputChange} required />
      </Box>
      {error && <div>{error}</div>}
      <Button type="submit" sx={{background:'#FFA500',color:'black',width:'50%',margin:'auto', marginBottom:'30px'}}>Se connecter</Button>
      </Box>
    </form>
  );
};

export default LoginForm;
