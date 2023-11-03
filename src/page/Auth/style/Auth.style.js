import { makeStyles } from 'tss-react/mui';

export const useStyles = makeStyles()((theme) => {
  return {
    authContainer: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      flexWrap: 'wrap',
      backgroundColor: 'white',
      margin: '0 auto',
      // boxShadow: ' 10px 5px 5px red',
      borderRadius: '10px',
      paddingTop: '4rem',
      paddingBottom: '8rem',
      width: '80%',
      minWidth: '10%',
      [theme.breakpoints.down('md')]: {
        width: '100%',
        margin: 'auto',
      },
    },
    buttonBox: {
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem',
      width: '100%',
      [theme.breakpoints.down('md')]: {
        width: '100%',
      },
      [theme.breakpoints.up('lg')]: {
        width: '70%',
      },
    },
  };
});
