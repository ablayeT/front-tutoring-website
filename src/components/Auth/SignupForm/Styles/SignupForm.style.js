import { makeStyles } from 'tss-react/mui';

export const useStyles = makeStyles()((theme) => {
  return {
    form: {
      display: 'flex',
      flexDirection: 'column',
      gap: '3rem',
      margin: 'auto',
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
    input: {
      textAlign: 'left',
      fontSize: '19px',
      fontWeight: 'bold',
    },
  };
});
