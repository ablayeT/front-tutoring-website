import { makeStyles } from 'tss-react/mui';

export const useStyles = makeStyles()((theme) => {
  return {
    profileContainer: {
      display: 'flex',
      flexDirection: 'column',
      width: '80%',
      margin: 'auto',
      border: '1px solid lightgray',
      borderRadius: 'px',
      padding: '10px',
      backgroundColor: '#fafafa',
    },
    profileContainerNotEditing: {
      display: 'flex',
      gap: '20px',
      margin: '5px',
      flexDirection: 'column',
      width: 'auto',
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
      width: '100%',
      margin: 'auto',
      gap: '20px',
      padding: '15px',
      border: '1px solid red',
    },
  };
});
