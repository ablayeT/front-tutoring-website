import { makeStyles } from 'tss-react/mui';

const drawerWidth = 180;

export const useStyles = makeStyles()((theme) => {
  return {
    container: {
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem',
      textAlign: 'center',
    },
    buttonBloc: {
      display: 'flex',
      border: 'none',
      padding: '10px',
      width: '120px',
      borderRadius: '10px',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: '5px',
      background: 'orange',
    },
    button: {},
  };
});
