import { makeStyles } from 'tss-react/mui';

export const useStyles = makeStyles()((theme) => {
  return {
    authContainer: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      flexWrap: 'wrap',
      position: 'relative',
      backgroundColor: 'white',
      margin: '0 auto',
      borderRadius: '10px',
      paddingBottom: '8rem',
      width: '100%',
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
