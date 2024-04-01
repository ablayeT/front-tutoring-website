import { makeStyles } from 'tss-react/mui';

export const useStyles = makeStyles()((theme) => {
  return {
    MySessionContainer: {
      width: '100%',
      display: 'flex',
      flexWrap: 'wrap',
      gap: '2rem',
      padding: '15px',
      width: '100%',
      justifyContent: 'center',
    },
    MySessionCard: {
      display: 'flex',
      flexWrap: 'wrap',
      boxShadow: '0px 0px 4px 0px rgba(34, 34, 34, 0.6)',
      borderRadius: '10px',
      [theme.breakpoints.down('md')]: {
        width: '47%',
      },
      [theme.breakpoints.down('sm')]: {
        width: '100%',
      },
      [theme.breakpoints.up('md')]: {
        width: '47%',
      },
      [theme.breakpoints.up('lg')]: {
        width: '30%',
      },
    },

    confirmationMessage: {
      marginTop: theme.spacing(0),
      paddingBottom: theme.spacing(4),
      paddingTop: theme.spacing(1.5),
      textAlign: 'center',
      backgroundColor: '#4caf50',
      color: 'white',
      borderRadius: theme.spacing(1),
      fontSize: theme.spacing(3),
      width: '30%',
      position: 'absolute',
      inset: '50%',
    },
  };
});
