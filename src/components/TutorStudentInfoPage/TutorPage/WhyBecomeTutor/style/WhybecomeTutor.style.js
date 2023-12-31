import { makeStyles } from 'tss-react/mui';

const drawerWidth = 180;

export const useStyles = makeStyles()((theme) => {
  return {
    container: {
      display: 'flex',
      gap: '20px',
      [theme.breakpoints.down('md')]: {
        flexDirection: 'column',
      },
    },
    boxes: {
      color: 'black',
      fontSize: 'bold',
    },
  };
});
