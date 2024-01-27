import { makeStyles } from 'tss-react/mui';

export const useStyles = makeStyles()((theme) => {
  return {
    gridContainer: {
      display: 'flex',
      padding: '1rem',
      alignSelf: 'center',
      justifyContent: 'center',
      height: '100%',
      alignItems: 'center',
      width: '100%',
      background: 'rgba(255, 165, 0, 0.2)',
      [theme.breakpoints.down('md')]: {
        flexDirection: 'column',
      },
      [theme.breakpoints.down('sm')]: {
        flexDirection: 'column',
      },
    },
    imageContainer: {
      flex: '1',
      display: 'flex',
      padding: '15px',

      justifyContent: 'center',
      alignItems: 'center',
      [theme.breakpoints.down('md')]: {
        display: 'flex',
        width: '100%',
        justifyContent: 'center',
        minHeight: '150px',
        width: '50%',
      },
    },
    textContainer: {
      flex: '1',

      [theme.breakpoints.down('md')]: {
        flexDirection: 'column',
      },
      [theme.breakpoints.down('sm')]: {
        flexDirection: 'column',
      },
    },
    mainTitle: {
      color: 'orange',
      [theme.breakpoints.down('md')]: {
        fontSize: '40px',
      },
      [theme.breakpoints.down('md')]: {
        fontSize: '25px',
      },
    },
    bannerImage: {
      transform: 'rotate(6deg)',
      width: '400px',
      objectFit: 'fill',
      margin: 'auto',
      borderRadius: '1000px 1200px 1200px 1000px',
      height: '280px',
      [theme.breakpoints.down('md')]: {
        height: '220px',
        width: '340px',
      },
      // [theme.breakpoints.down('md')]: {
      //   height: '280px',
      //   width: '280px',
      // },
    },

    circle: {
      width: '60px',
      height: '60px',
      borderRadius: '30px 25px 30px 40px',
      backgroundColor: 'orange',
      position: 'absolute',
      top: '0',
      left: '5%',
      transform: 'translateX(-50%)',
    },
  };
});
