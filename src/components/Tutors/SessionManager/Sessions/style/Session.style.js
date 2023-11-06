import { makeStyles } from 'tss-react/mui';

export const useStyles = makeStyles()((theme) => {
  return {
    SessionsContainer: {
      margin: '10px',
      padding: '10px',
      display: 'flex',
      justifyContent: ' center',
      flexWrap: 'wrap',
      gap: '1rem',
      background: 'white',
      boxShadow: '2px 2px 7px #222',
      minHeight: '100vh',
      borderRadius: '15px',
    },
    confirmationMessage: {
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
