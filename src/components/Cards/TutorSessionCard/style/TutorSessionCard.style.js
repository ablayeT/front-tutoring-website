import { makeStyles } from 'tss-react/mui';

export const useStyles = makeStyles()((theme) => {
  return {
    cardContainer: {
      margin: '10px',
      padding: '10px',
      display: 'flex',
      justifyContent: ' center',
      flexWrap: 'wrap',
      gap: '1rem',
    },
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
    title: {
      fontSize: '1.2rem',
      fontWeight: 'bold',
      marginBottom: '8px',
    },
    text: {
      marginBottom: '8px',
    },
  };
});
