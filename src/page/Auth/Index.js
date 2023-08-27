import  { React,useState } from 'react';
import LoginForm from '../../components/Home/LoginForm';
import SignupForm from '../../components/Home/signupForm/index';
import { Box, Button} from '@mui/material';
import { makeStyles } from 'tss-react/mui'

const useStyles = makeStyles()((theme) =>{
  return {
    form : {
      display: 'flex',
      flexDirection: 'column',
      gap: '3rem', 
      margin: 'auto',
      width:'50%',
      padding: '2rem',
      borderRadius: '10px',
      backgroundColor: theme.palette,
      boxShadow: theme.shadows[5],
      [theme.breakpoints.down('md')]: {
        width: '100%',
       
      },
    },
    button :{
      fontWeight: 'bold',
      '&:hover': {
        backgroundColor: '#FF8C00',
      }
    }
  };
});

function Index() {
  const classes = useStyles();
    const [isLoginForm, setIsLoginForm] = useState(false);
    const toggleForm = () => {
        setIsLoginForm(!isLoginForm);
      };

   return (
  
    <Box  paddingTop='10rem' height='100vh' margin='1rem' >
    <Box  textAlign='center'  width='100%'>
      {isLoginForm ? <SignupForm /> : <LoginForm />}
      <Button onClick={toggleForm}  className={classes.button} >
        {isLoginForm ? 'Avez vous déjà un compte ? Se connecter'  : "Vous n'avez pas de compte ? S'inscrire"}
      </Button>
      </Box>
    
    </Box>
   
  );
}

export default Index