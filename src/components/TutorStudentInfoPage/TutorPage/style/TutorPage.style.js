import { makeStyles } from 'tss-react/mui';

const drawerWidth = 180;

export const useStyles = makeStyles()((theme) => {
  return {
    container: {
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      gap: '2rem',
    },
    containerChildren: {
      marginBottom: '3rem',
    },
  };
});
