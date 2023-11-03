import { makeStyles } from 'tss-react/mui';

export const useStyles = makeStyles()((theme) => {
  return {
    MySessionContainer: {
      width: '100%',
      display: 'flex',
      flexWrap: 'wrap',
      gap: '1rem',
      padding: '15px',
      // border: '0.1px solid lightgray',
      boxShadow: '0px 0px 10px 0px rgba(0, 0, 0, 0.6);',
      background: 'white',
      borderRadius: '15px',
      justifyContent: 'center',
    },
    MySessionCard: {
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
      },
      [theme.breakpoints.up('lg')]: {
        width: '33%',
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
