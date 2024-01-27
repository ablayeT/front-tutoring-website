import { makeStyles } from 'tss-react/mui';

const drawerWidth = 180;

export const useStyles = makeStyles()((theme) => {
  return {
    pageContainer: {
      display: 'flex',
      fontFamily: 'nunito sans',
      flexDirection: 'column',
      justifyContent: 'space-between',
      gap: '5rem',

      [theme.breakpoints.down('md')]: {
        flexDirection: 'column',
      },
    },
  };
});
