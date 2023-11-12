import React, { useState } from 'react';
import {
  Box,
  MenuItem,
  Typography,
  Select,
  Stack,
  FormControl,
  TextField,
  List,
  ListItem,
} from '@mui/material';
import api from '../../../services/api';
import MuiButton from '../../Buttons/Button';
import { useNavigate } from 'react-router-dom';
import { useStyles } from './Styles/SignupForm.style';
import OrangeBar from '../../Assets/OrangeBar';

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
  const [fieldErrors, setFieldErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleError = (error) => {
    if (error.response && error.response.data) {
      if (error.response.status === 400 && error.response.data.error) {
        // Si le serveur renvoie une erreur 400 avec un message d'erreur spécifique
        setErrorMessage(error.response.data.error);
        setSuccessMessage('');
        setTimeout(() => {
          setErrorMessage('');
        }, 5000); // Disparaît après 4 secondes
      } else if (error.response.data.errors) {
        // Si le serveur renvoie des erreurs de validation spécifiques aux champs
        setFieldErrors(
          error.response.data.errors.reduce((acc, error) => {
            acc[error.param] = error.msg;
            return acc;
          }, {}),
        );
        setErrorMessage('');
      } else {
        // Si une autre erreur s'est produite
        setFieldErrors({});
        console.error(error);
        setErrorMessage(
          "Une erreur s'est produite lors de la requête. Veuillez réessayer.",
        );
        setSuccessMessage('');
        setTimeout(() => {
          setErrorMessage('');
        }, 5000); // Disparaît après 4 secondes
      }
    } else {
      // Si une autre erreur s'est produite
      setFieldErrors({});
      console.error(error);
      setErrorMessage(
        "Une erreur s'est produite lors de la requête. Veuillez réessayer.",
      );
      setSuccessMessage('');
      setTimeout(() => {
        setErrorMessage('');
      }, 5000); // Disparaît après 4 secondes
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Envoyer une requête POST à votre backend pour l'inscription
      const response = await api.post('/auth/signup', formData);
      console.log(response.data);

      // Si la requête est réussie, définir le message de succès
      setSuccessMessage(
        'Inscription réussie. Vous pouvez maintenant vous connecter.',
      );
      setTimeout(() => {
        setSuccessMessage('');
      }, 5000); // Disparaît après 4 secondes

      navigate('/auth');
    } catch (error) {
      console.error(error);

      if (error.response && error.response.data && error.response.data.errors) {
        // Si le serveur renvoie des erreurs de validation spécifiques aux champs
        setFieldErrors(
          error.response.data.errors.reduce((acc, error) => {
            acc[error.param] = error.msg;
            return acc;
          }, {}),
        );
      } else {
        // Si une autre erreur s'est produite
        handleError(error);
      }
    }
  };

  return (
    <Box
      width="50%"
      margin="auto"
      padding="30px"
      borderRadius="10px"
      backgroundColor="rgba(255, 165, 0, 0.2)"
    >
      <FormControl
        component="form"
        onSubmit={handleSubmit}
        className={classes.form}
      >
        {/* {successMessage && (
        <Typography variant="success">{successMessage}</Typography>
      )}
      {errorMessage && <Typography variant="error">{errorMessage}</Typography>} */}
        <Typography variant="h4">S'inscrire</Typography>
        <Stack>
          <OrangeBar />
          <TextField
            type="text"
            id="last_name"
            name="last_name"
            label="Nom"
            placeholder="Nom"
            value={formData.last_name}
            onChange={handleChange}
          />
          <OrangeBar />
        </Stack>
        <Stack>
          <OrangeBar />
          <TextField
            type="text"
            id="first_name"
            name="first_name"
            label="Prénom"
            placeholder="Prénom"
            value={formData.first_name}
            onChange={handleChange}
          />
          <OrangeBar />
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
        <Stack display="flex">
          <OrangeBar />
          <TextField
            type="email"
            label="Email"
            placeholder="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <OrangeBar />
        </Stack>
        <Stack>
          <OrangeBar />
          <TextField
            type="password"
            label="Mot de passe"
            placeholder="..........."
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          <OrangeBar />
        </Stack>

        <Box>
          <Stack>
            <MuiButton type="submit">S'inscrire</MuiButton>
          </Stack>
        </Box>
        {fieldErrors && Object.keys(fieldErrors).length > 0 && (
          <Box>
            <Typography variant="body1" color="error">
              Erreurs :
              <List>
                {Object.keys(fieldErrors).map((fieldName, index) => (
                  <ListItem key={index}>{fieldErrors[fieldName]}</ListItem>
                ))}
              </List>
            </Typography>
          </Box>
        )}
        {errorMessage && (
          <Typography
            variant="body1"
            color="white"
            backgroundColor="green"
            position="absolute"
            width="80%"
          >
            {errorMessage}
          </Typography>
        )}
        {successMessage && (
          <Typography
            variant="body1"
            color="white"
            backgroundColor="green"
            position="absolute"
            width="80%"
          >
            {successMessage}
          </Typography>
        )}
      </FormControl>
    </Box>
  );
}

export default SignupForm;
