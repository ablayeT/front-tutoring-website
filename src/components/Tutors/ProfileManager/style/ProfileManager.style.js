import { makeStyles } from 'tss-react/mui';

export const useStyles = makeStyles()((theme) => {
  return {
    profileManager: {
      margin: 'auto',
      justifyContent: 'center',
      alignSelf: 'center',
      display: 'flex',
      alignItems: 'center',
      width: '80%',
      [theme.breakpoints.down('md')]: {
        width: '100%',
      },
    },
  };
});
