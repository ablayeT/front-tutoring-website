import { makeStyles } from 'tss-react/mui';

export const useStyles = makeStyles()((theme) => {
  return {
    profileManager: {
      margin: 'auto',
      justifyContent: 'center',
      alignSelf: 'center',
      display: 'flex',
      alignItems: 'center',
      borderRadius: '15px',
      boxShadow: '0px 0px 10px 0px rgba(34, 34, 34, 0.6)',
      width: '90%',
      [theme.breakpoints.down('md')]: {
        width: '100%',
      },
      [theme.breakpoints.up('md')]: {
        width: '80%',
      },
    },
  };
});
