import { makeStyles } from 'tss-react/mui';

export const useStyles = makeStyles()((theme) => {
  return {
    button: {
      backgroundColor: 'black',
      color: 'white',
      fontWeight: 'bold',
      '&:hover': {
        backgroundColor: '#FFA500',
        color: 'black',
      },
    },
  };
});
