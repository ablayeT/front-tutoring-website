import { makeStyles } from 'tss-react/mui';

export const useStyles = makeStyles()((theme) => {
  return {
    button: {
      backgroundColor: '#FFA500',
      color: 'black',
      fontWeight: 'bold',
      '&:hover': {
        backgroundColor: 'black',
        color: 'white',
      },
    },
  };
});
