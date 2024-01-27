import { makeStyles } from 'tss-react/mui';

export const useStyles = makeStyles()((theme) => {
  return {
    pageContainer: {
      display: 'flex',
      gap: '1rem',

      [theme.breakpoints.down('md')]: {
        flexDirection: 'column',
      },
    },
    imageContainer: {
      display: 'flex',
      flex: '2',
      [theme.breakpoints.down('sm')]: {
        flexDirection: 'column',
      },
    },
    circle1: {
      width: '60px',
      height: '60px',
      borderRadius: '50px',
      backgroundColor: 'lightgreen',
      position: 'absolute',
      top: '50px',
      left: '10px',
      [theme.breakpoints.down('md')]: {
        top: '30px',
        left: '30px',
      },
      [theme.breakpoints.down('md')]: {
        top: '50px',
        bottom: '100px',
        left: '30px',
      },
    },

    circle2: {
      width: '40px',
      height: '40px',
      borderRadius: '50px',
      backgroundColor: '#4abefb',
      position: 'absolute',
      bottom: '60px',
      right: '50px',
      [theme.breakpoints.down('md')]: {
        bottom: '60px',
        right: '50px',
      },
      [theme.breakpoints.down('md')]: {
        bottom: '60px',
        right: '50px',
      },
    },
  };
});
