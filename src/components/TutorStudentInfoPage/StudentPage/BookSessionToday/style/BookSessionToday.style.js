import { makeStyles } from 'tss-react/mui';

const drawerWidth = 180;

export const useStyles = makeStyles()((theme) => {
  return {
    container: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '2rem',

      [theme.breakpoints.down('md')]: {
        // flexDirection: 'column',
      },
    },
    viewSessionsButton: { background: 'orange', color: '#222' },
    contactButton: { backgroundColor: '#4abefb', color: '#222' },
    butonBox: {
      display: 'flex',
      justifyContent: 'center',
      gap: '1rem',
    },
  };
});
