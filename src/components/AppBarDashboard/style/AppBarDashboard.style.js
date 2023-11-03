import { makeStyles } from 'tss-react/mui';
import { styled } from '@mui/material/styles';
import MuiAppBar from '@mui/material/AppBar';

export const useStyles = makeStyles()((theme) => {
  return {
    appBarStudent: {
      height: '2.8rem',
      top: '5rem',
      backgroundColor: 'white ',
      color: '#4a4a49',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      [theme.breakpoints.down('md')]: {
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row',
      },
    },

    appBarTutor: {
      height: '2.4rem',
      top: '5rem',
      backgroundColor: 'white',
      color: '#4a4a49',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      [theme.breakpoints.down('md')]: {
        display: 'flex',
        justifyContent: 'center',
      },
    },
    appBarTutorDashboard: {
      display: 'flex',
      width: '200px',

      padding: '0',
      height: '100%',
      flexWrap: 'wrap',
      gap: '1rem',
      [theme.breakpoints.down('md')]: {
        display: 'flex',
        justifyContent: 'center',
        textAlign: 'center',
      },
    },
    appBarStudentDashboard: {
      display: 'flex',
      width: '200px',
      justifyContent: 'center',
      textAlign: 'center',
      padding: '0',
      height: '100%',
      flexWrap: 'wrap',
      gap: '1rem',
      [theme.breakpoints.down('md')]: {
        display: 'flex',

        justifyContent: 'center',
        textAlign: 'center',
        paddingRight: '10px',
        background: 'rgba(255, 165, 0, 0.8)',
        width: '2rem',
        '&:hover': {
          background: 'lightgray',
          borderRadius: '0',
          border: '1px solid rgba(255, 165, 0, 1)',
        },
      },
    },
    buttonBox: {
      height: '100%',
      display: 'flex ',
      justifyContent: 'center',
      alignItems: 'center',
      margin: '0',
      [theme.breakpoints.down('md')]: {
        display: 'none',
      },
    },
    button: {
      color: 'black',
      borderRadius: '0',
      fontWeight: 'bold',

      height: '100%',
      '&:hover': {
        color: '#222',
        background: 'rgba(255, 165, 0, 0.8)',
        borderRadius: '10px',
      },
    },
    toggleButton: {
      color: 'black',
      borderRadius: '0',
      height: '100%',

      '&:hover': {
        color: 'white',
        background: 'black',
        borderRadius: '10px',
      },
    },

    tutorMenuButton: {
      display: 'block',
      color: '#222',
      '&:hover': {
        color: 'white',
        background: '#222',
      },
      [theme.breakpoints.down('md')]: {
        display: 'flex',
        textAlign: 'center',
        alignSelf: 'center',
        color: '#222',
        '&:hover': {
          color: '#222',
          background: 'white',
        },
      },
      [theme.breakpoints.up('md')]: {
        display: 'none',
      },
    },

    studentMenuButton: {
      display: 'flex',
      justifyContent: 'center',
      textAlign: 'center',
      color: '#222',

      [theme.breakpoints.down('md')]: {
        color: 'white',

        '&:hover': {
          color: '#222',
        },
      },
      [theme.breakpoints.up('md')]: {
        display: 'none',
      },
    },
    mobileMenuOpen: {
      position: 'fixed',
      backgroundColor: 'white',
      borderRadius: '10px',
      padding: '10px',
      flexDirection: 'column',
      textAlign: 'center',
      display: 'flex',
      width: '120px',
      boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)', // Ombre du pop-up
    },
  };
});

export const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {}),
  ...(open && {
    transition: theme.transitions.create(['margin', 'width'], {}),
  }),
}));
