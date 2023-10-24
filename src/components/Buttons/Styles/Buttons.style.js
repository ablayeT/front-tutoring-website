import { makeStyles } from 'tss-react/mui';

export const useStyles = makeStyles()((theme) => {
  return {
    button: {
      backgroundColor: 'black',
      color: 'white',
      fontWeight: 'bold',
      borderRadius: '10px',
      '&:hover': {
        backgroundColor: '#FFA500',
        color: 'black',
      },
    },
  };
});
