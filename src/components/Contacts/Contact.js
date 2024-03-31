import React, { useState } from 'react';
import { TextField, Stack, Typography, Box, FormLabel } from '@mui/material';
import api from '../../services/api';
import MuiButton from '../../components/Buttons/Button';
import useStyles from './Styles';
import formFields from './Contacts.schema';

function Index() {
  const { classes } = useStyles();

  const initialFormState = {};
  formFields.forEach((field) => {
    initialFormState[field.name] = '';
  });

  const [formData, setFormData] = useState(initialFormState);
  const [confirmationMessage, setConfirmationMessage] = useState(null); //  pour le message de confirmation

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await api.post('/contacts/', formData);
      console.log(response.data);
      setFormData(initialFormState);
      setConfirmationMessage(
        'Merci de nous avoir contacté, nous vous reviendrons bientôt !',
      );
      setTimeout(() => {
        setConfirmationMessage('');
      }, 3000);
    } catch (error) {
      console.error("Une erreur s'est produite lors de l :", error);
      // Gérez les erreurs ici
    }
  };
  return (
    <Box
      padding="4rem 0 5rem 0"
      minHeight="100vh"
      position="relative"
      display="flex"
      justifyContent="center"
      alignItems="center"
      width="90%"
      backgroundColor="white"
      borderRadius="15px"
      boxShadow="0px 0px 10px 0px rgba(34, 34, 34, 0.6)"
    >
      <form className={classes.form} component="form" onSubmit={handleSubmit}>
        <Box display="flex" flexDirection="column" gap="1rem">
          <Typography variant="h6" gutterBottom textAlign="center">
            Contactez-nous
          </Typography>

          {formFields.map((field) => (
            <Stack key={field.name}>
              <FormLabel>{field.label}</FormLabel>
              <TextField
                required
                name={field.name}
                label={field.label}
                type={field.type}
                value={formData[field.name]}
                onChange={handleChange}
                margin="normal"
                {...(field.multiline && { multiline: true, rows: field.rows })}
              />
            </Stack>
          ))}

          <Stack textAlign="center">
            <MuiButton type="submit" variant="contained" color="primary">
              Envoyer
            </MuiButton>
          </Stack>
        </Box>
      </form>

      {confirmationMessage && (
        <Box className={classes.confirmationMessage}>
          <Typography variant="body1">{confirmationMessage}</Typography>
        </Box>
      )}
    </Box>
  );
}

export default Index;
