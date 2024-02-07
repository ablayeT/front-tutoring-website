import { makeStyles } from 'tss-react/mui';

export const useStyles = makeStyles()((theme) => {
  return {
    SessionsContainer: {
      display: 'flex',
      position: 'relative',
      justifyContent: ' center',
      flexWrap: 'wrap',
      gap: '1rem',
      background: 'white',
      // boxShadow: '2px 2px 7px #222',
      minHeight: '100vh',
      borderRadius: '15px',
    },
    confirmationMessage: {
      borderRadius: '10px',
      padding: '5px',
      width: '50%',
      textAlign: 'center',
      position: 'absolute',
      color: 'white',
      background: 'green',

      [theme.breakpoints.down('sm')]: {
        width: '100%',
      },
    },
    container: {
      width: '100%',
      display: 'flex',
      border: '1px solid blue',
      flexDirection: 'row',
    },
  };
});
