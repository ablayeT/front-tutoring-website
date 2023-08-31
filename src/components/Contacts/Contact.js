import React, { useState } from 'react';
import { TextField, Stack, Typography, Box, FormLabel } from '@mui/material';
import api from '../../services/api';
import MuiButton from '../../components/Buttons/Button';
import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => {
  return {
    form: {
      display: 'flex',
      flexDirection: 'column',
      gap: '3rem',
      width: '40%',
      margin: 'auto',
      padding: '2rem',
      borderRadius: '10px',
      backgroundColor: theme.palette,
      boxShadow: theme.shadows[5],
      [theme.breakpoints.down('md')]: {
        width: '90%',
      },
    },
  };
});

function Index() {
  const { classes } = useStyles();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    const contactData = { name, email, message };

    try {
      const response = await api.post('/contacts/', contactData);
      console.log(response.data);

      setName('');
      setEmail('');
      setMessage('');
    } catch (error) {
      console.error("Une erreur s'est produite lors de l :", error);
      // Gérez les erreurs ici
    }
  };
  return (
    <Box paddingTop="5rem" width="90%" marginTop="50px">
      <form className={classes.form} component="form" onSubmit={handleSubmit}>
        <Box display="flex" flexDirection="column" gap="3rem">
          <Typography variant="h6" gutterBottom>
            Contactez-nous
          </Typography>
          <Stack>
            <FormLabel>Nom Prénom</FormLabel>
            <TextField
              required
              label="Nom"
              value={name}
              onChange={(e) => setName(e.target.value)}
              margin="normal"
            />
          </Stack>
          <Stack>
            <FormLabel>Email</FormLabel>
            <TextField
              required
              label="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              margin="normal"
            />
          </Stack>
          <Stack>
            <FormLabel>Message</FormLabel>
            <TextField
              required
              label="Message"
              multiline
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              margin="normal"
            />
          </Stack>

          <Stack textAlign="center">
            <MuiButton type="submit" variant="contained" color="primary">
              Envoyer
            </MuiButton>
          </Stack>
        </Box>
      </form>
    </Box>
  );
}

export default Index;
