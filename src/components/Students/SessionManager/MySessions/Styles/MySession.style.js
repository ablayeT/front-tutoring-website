import { makeStyles } from 'tss-react/mui';

export const useStyles = makeStyles()((theme) => {
  return {
    MySessionContainer: {
      width: '100%',
      display: 'flex',
      flexWrap: 'wrap',
      margin: '10px',
      gap: '1rem',
      padding: '10px',
      border: '1px solid red',
      justifyContent: 'center',
    },
    MySessionCard: {
      border: '1px solid green',
      display: 'flex',
      flexWrap: 'wrap',
      [theme.breakpoints.down('md')]: {
        width: '100%',
      },
      // [theme.breakpoints.down('sm')]: {
      //   width: '100%',
      // },
      [theme.breakpoints.up('md')]: {
        width: '48%',
        color: 'green',
      },
      [theme.breakpoints.up('lg')]: {
        width: '32%',
        color: 'blue',
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
