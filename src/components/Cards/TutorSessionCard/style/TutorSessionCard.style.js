import { orange } from '@mui/material/colors';
import { makeStyles } from 'tss-react/mui';

export const useStyles = makeStyles()((theme) => {
  return {
    card: {
      backgroundColor: '#fafafa',
      borderRadius: '8px',
      boxShadow: '1px 1px 3px #FFA500',
      padding: '16px',
      marginBottom: '16px',
      width: '50%',
      [theme.breakpoints.down('md')]: {
        width: '80%',
      },
      [theme.breakpoints.down('sm')]: {
        width: '100%',
      },
      [theme.breakpoints.up('md')]: {
        width: '40%',
      },
      [theme.breakpoints.up('lg')]: {
        width: '(50%',
      },
    },
    cardContent: {
      position: 'relative',
    },
    title: {
      fontSize: '1.2rem',
      fontWeight: 'bold',
      marginBottom: '8px',
    },
    text: {
      marginBottom: '8px',
    },
    accordion: {
      width: '55%',
      marginTop: '1rem',
      cursor: 'pointer',
      '&:hover': {
        boxShadow: '3px 3px 5px orange',
      },
      [theme.breakpoints.down('md')]: {
        width: '100%',
      },
    },
    accordionDetails: {
      display: 'flex',
      gap: '10px',
      [theme.breakpoints.down('md')]: {
        justifyContent: 'space-around',
        alignItems: 'center',
      },
    },
    greenSpan: {
      backgroundColor: 'green',
      borderRadius: '50%',
      width: '21px',
      height: '22px',
      textAlign: 'center',
      color: 'white',
      [theme.breakpoints.down('md')]: {
        width: '21px',
        height: '22px',
        textAlign: 'center',
      },
    },
    orangeSpan: {
      backgroundColor: 'orange',
      borderRadius: '50%',
      width: '21px',
      height: '22px',
      textAlign: 'center',
      [theme.breakpoints.down('md')]: {
        width: '21px',
        height: '22px',
        textAlign: 'center',
      },
    },
    studentList: {
      backgroundColor: ' gray',
      zIndex: '1',
      padding: '10px',
      border: '1px solid red,',
      position: 'relative',
    },
    studentListAccordion: {
      position: 'absolute',
      border: '1px solid red',
      top: '50%',
      left: 0,
      width: '100%',
    },
  };
});
