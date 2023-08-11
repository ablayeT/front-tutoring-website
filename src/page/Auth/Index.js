import  { React,useState } from 'react';
import LoginForm from '../../components/Home/LoginForm';
import SignupForm from '../../components/Home/SignupForm';
import { Box, Button,  } from '@mui/material';



function Index() {
    const [isLoginForm, setIsLoginForm] = useState(false);

    const toggleForm = () => {
        setIsLoginForm(!isLoginForm);
      };

   return (
    <Box >
    <Box backgroundColor='#f3d7b4' display='flex' justifyContent='center' margin='auto' flexDirection='column' textAlign='center' border='1px solid grey'  height='100vh'>
      {isLoginForm ? <SignupForm /> : <LoginForm />}
      
      {/* {isLoginForm ? <Typography>Vous avez déjà un compte ? </Typography> :<Typography>Vous n'avez pas encore de compte ? </Typography> } */}
    
      <Button onClick={toggleForm}>
        {isLoginForm ? 'Vous avez déjà un compte ? Se connecter'  : "Vous n'avez pas de compte ? S'inscrire"}
      </Button>
    </Box>
    </Box>
  );
}

export default Index