import { React, useState } from 'react';
import LoginForm from '../../components/Auth/LoginForm/LoginForm';
import SignupForm from '../../components/Auth/SignupForm/SignupForm';
import { Box, Button } from '@mui/material';
import useStyles from './Styles';

function Index() {
  const classes = useStyles();
  const [isLoginForm, setIsLoginForm] = useState(false);
  const toggleForm = () => {
    setIsLoginForm(!isLoginForm);
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      margin="1rem"
      minHeight="100vh"
      border="1px solid green"
    >
      <Box textAlign="center" width="100%" border="1px solid red">
        {isLoginForm ? <SignupForm /> : <LoginForm />}
        <Button onClick={toggleForm} className={classes.button}>
          {isLoginForm
            ? 'Avez vous déjà un compte ? Se connecter'
            : "Vous n'avez pas de compte ? S'inscrire"}
        </Button>
      </Box>
    </Box>
  );
}

export default Index;
