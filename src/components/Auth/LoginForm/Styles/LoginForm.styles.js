import { makeStyles } from 'tss-react/mui';

export const useStyles = makeStyles()((theme) => {
  return {
    form: {
      display: 'flex',
      flexDirection: 'column',
      gap: '3rem',
      width: '100%',
      padding: '2rem',
      borderRadius: '10px',
      backgroundColor: 'white',
      boxShadow: theme.shadows[5],
      [theme.breakpoints.down('md')]: {
        width: '90%',
        margin: 'auto',
      },
    },
    // circle: {
    //   position: 'absolute',
    //   with: '300px',
    //   height: '300ppx',
    //   border: '150px solid rgb(173, 216, 230)',
    //   borderRadius: '50%',

    // },
    button: {
      fontWeight: 'bold',
      '&:hover': {
        backgroundColor: '#FF8C00',
      },
    },
  };
});
