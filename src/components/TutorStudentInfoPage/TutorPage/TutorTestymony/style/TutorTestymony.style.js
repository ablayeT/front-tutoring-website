import { makeStyles } from 'tss-react/mui';

const drawerWidth = 180;

export const useStyles = makeStyles()((theme) => {
  return {
    container: {
      width: '100%',
      display: 'flex',
      width: '80%',
      margin: 'auto',
      gap: '15px',
      [theme.breakpoints.down('sm')]: {
        display: 'flex',
        flexDirection: 'column-reverse',
        gap: '0px',
      },
    },
    textBox: {
      display: 'flex',
      flexWrap: 'wrap',
      padding: '10px',
    },
    imgBox: {
      display: 'flex',
      textAlign: 'center',
      alignContent: 'center',
    },
    button: {
      background: 'orange',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '40px',
      width: '180px',
      margin: 'auto',
      borderRadius: '10px',
    },
  };
});
