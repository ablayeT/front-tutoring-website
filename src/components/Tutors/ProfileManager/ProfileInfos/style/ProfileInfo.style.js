import { makeStyles } from 'tss-react/mui';

export const useStyles = makeStyles()((theme) => {
  return {
    profileContainer: {
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      margin: 'auto',
      border: '1px solid lightgray',
      borderRadius: '10px',
      padding: '10px',
      backgroundColor: '#fafafa',
      [theme.breakpoints.down('md')]: {
        width: '100%',
      },
    },
    profileContainerNotEditing: {
      display: 'flex',
      flexDirection: 'column',
      gap: '20px',
    },
    updateButton: {
      display: 'flex',
      justifyContent: 'center',
      flexWrap: 'wrap',
      flexDirection: 'row',
      gap: '1rem',
      width: '100%',
      margin: 'auto',
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
      alignSelf: 'center',
      width: '100%',
      margin: 'auto',
      gap: '20px',
      textAlign: 'left',
      padding: '15px',
    },
  };
});
