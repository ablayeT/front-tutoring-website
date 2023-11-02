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
      minHeight="100vh"
      backgroundColor="white"
      margin="0 auto"
      box-shadow=" 10px 5px 5px red"
      borderRadius="10px"
      paddingTop="8rem"
      paddingBottom="8rem"
      width="90%"
    >
      <Box
        display="flex"
        flexDirection="column"
        gap="1rem"
        width="80%"
        margin="auto"
      >
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
