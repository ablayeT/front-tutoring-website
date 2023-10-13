import { makeStyles } from 'tss-react/mui';

export const useStyles = makeStyles()((theme) => {
  return {
    createSessionContainer: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      border: '1px solid lightgray',
      width: '80%',
      margin: 'auto',
      borderRadius: '15px',
      padding: '15px',
      backgroundColor: '#fafafa',
    },

    updateButton: {
      [theme.breakpoints.down('md')]: {
        width: '60%',
      },
      [theme.breakpoints.down('sm')]: {
        width: '100%',
      },
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
