import { makeStyles } from 'tss-react/mui';

export const useStyles = makeStyles()((theme) => {
  return {
    form: {
      display: 'flex',
      flexDirection: 'column',
      gap: '3rem',
      width: '100%',
      margin: 'auto',
      padding: '1rem',
      borderRadius: '10px',
      background: 'white',
      boxShadow: '0px 0px 10px 0px rgba(34, 34, 34, 0.6)',
      [theme.breakpoints.up('md')]: {
        width: '60%',
      },
      [theme.breakpoints.down('md')]: {
        width: '90%',
      },
    },
    confirmationMessage: {
      paddingBottom: theme.spacing(2),
      paddingTop: theme.spacing(1.5),
      textAlign: 'center',
      backgroundColor: '#4caf50',
      color: 'white',
      padding: '3px',
      borderRadius: theme.spacing(1),
      fontSize: theme.spacing(3),
      width: '36%',
      position: 'absolute',
      top: '30%',
      right: '20%',
    },
  };
});
