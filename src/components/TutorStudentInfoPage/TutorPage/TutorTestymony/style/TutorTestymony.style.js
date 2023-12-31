import { makeStyles } from 'tss-react/mui';

const drawerWidth = 180;

export const useStyles = makeStyles()((theme) => {
  return {
    container: {
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      gap: '25px',
    },
    banner: {
      textAlign: 'center',
      background: 'grey',
    },
    circle2: {
      [theme.breakpoints.down('md')]: {
        bottom: '60px',
        right: '50px',
      },
    },
  };
});
