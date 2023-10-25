import { makeStyles } from 'tss-react/mui';

export const useStyles = makeStyles()((theme) => {
  return {
    card: {
      backgroundColor: '#fafafa',
      borderRadius: '8px',
      boxShadow: '1px 1px 3px #FFA500',
      padding: '16px',
      marginBottom: '16px',
      width: '100%',
      // [theme.breakpoints.down('md')]: {
      //   width: '46%',
      // },
      // [theme.breakpoints.down('sm')]: {
      //   width: '100%',
      // },
      // [theme.breakpoints.up('md')]: {
      //   width: '46%',
      // },
      // [theme.breakpoints.up('lg')]: {
      //   width: '100%',
      // },
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
      width: '50%',
      marginTop: '1rem',
      [theme.breakpoints.down('md')]: {
        width: '100%',
      },
    },
    span: {
      borde: '1px solid red',
    },
    accordionSummary: {
      // [theme.breakpoints.down('md')]: {
      //   fontSize: '10px',
      // },
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
