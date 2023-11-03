import { React, useState } from 'react';
import LoginForm from '../../components/Auth/LoginForm/LoginForm';
import SignupForm from '../../components/Auth/SignupForm/SignupForm';
import { Box, Button } from '@mui/material';
import useStyles from './style';

function Index() {
  const { classes } = useStyles();
  const [isLoginForm, setIsLoginForm] = useState(false);
  const toggleForm = () => {
    setIsLoginForm(!isLoginForm);
  };

  return (
    <Box className={classes.authContainer}>
      <Box className={classes.buttonBox}>
        {isLoginForm ? <SignupForm /> : <LoginForm />}
        <Button onClick={toggleForm}>
          {isLoginForm
            ? 'Avez vous déjà un compte ? Se connecter'
            : "Vous n'avez pas de compte ? S'inscrire"}
        </Button>
      </Box>
    </Box>
  );
}

export default Index;
