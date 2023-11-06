import { makeStyles } from 'tss-react/mui';

export const useStyles = makeStyles()((theme) => {
  return {
    profileContainer: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
    },

    updateButton: {
      background: '#FFA500',

      [theme.breakpoints.down('md')]: {
        width: 'rem',
      },
      //   [theme.breakpoints.down('sm')]: {
      //     width: '100%',
      //   },
    },
    editProfileContainer: {
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      margin: 'auto',
      gap: '20px',
      padding: '15px',
      border: '1px solid red',
    },
  };
});
