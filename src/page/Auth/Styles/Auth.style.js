import { makeStyles } from 'tss-react/mui';

export const useStyles = makeStyles()((theme) => {
  return {
    authContainer: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      borderRight: '1px solid red',
      borderLeft: '1px solid lightgray',
      margin: '0 auto',
      boxShadow: ' 10px 5px 5px red',
      paddingTop: '8rem',
      paddingBottom: '8rem',
    },
    button: {
      fontWeight: 'bold',
      '&:hover': {
        backgroundColor: '#FF8C00',
      },
    },
  };
});
