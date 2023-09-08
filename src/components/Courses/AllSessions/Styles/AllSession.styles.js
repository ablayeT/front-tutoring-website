import { makeStyles } from 'tss-react/mui';

export const useStyles = makeStyles()((theme) => {
  return {
    container: {
      backgroundColor: '#fcf7e8',
      width: '100%',
      height: 'auto',
      margin: 'auto',
      paddingTop: '6rem',
      '&:hover': {
        boxShadow: '0 1ppx 1px -10px red',
      },
      [theme.breakpoints.down('md')]: {
        width: '100%',
      },
    },
  };
});
