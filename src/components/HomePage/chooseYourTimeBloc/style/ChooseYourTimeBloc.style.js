import { makeStyles } from 'tss-react/mui';

export const useStyles = makeStyles()((theme) => {
  return {
    gridContainer: {
      display: 'flex',
      padding: '10px',
      width: '100%',
      alignSelf: 'center',
      justifyContent: 'center',
      gap: '10px',
      alignItems: 'center',
      height: '100%',
      [theme.breakpoints.down('md')]: {
        flexDirection: 'column',
      },
      [theme.breakpoints.down('sm')]: {
        flexDirection: 'column',
      },
    },
    imageContainer: {
      flex: '1',
      position: 'relative',
      alignItems: 'center',
      display: 'flex',
      width: '90%',
      margin: 'auto',
      height: '100%',
      padding: '1rem',
      justifyContent: 'center',

      [theme.breakpoints.down('md')]: {
        display: 'flex',
        justifyContent: 'center',
      },
    },
    imgBox: {
      transform: 'rotate(9deg)',
      position: 'relative',
      backgroundColor: 'rgba(255, 165, 0, 0.2)',
      borderRadius: '950px 909px 800px 1000px',
      width: '300px',
      display: 'flex',
      justifyContent: 'center',
    },
    bannerImage: {
      transform: 'rotate(-12deg)',
      borderRadius: '1000px 909px 1000px 1000px',
      width: '260px',
      margin: 'auto',
      top: '30px',
      left: '0px',
      alt: 'cvImage',

      [theme.breakpoints.down('md')]: {},
      [theme.breakpoints.down('md')]: {},
    },
    circle: {
      width: '60px',
      height: '60px',
      borderRadius: '30px 25px 30px 40px',
      backgroundColor: 'rgb(173, 216, 230)',
      position: 'absolute',
      top: '30px',

      left: '95%',
      transform: 'translateX(-50%)',
    },
    textContainer: {
      flex: '1',
      display: 'flex',
      padding: '20px',
      width: '90%',
      margin: 'auto',
      height: '100%',
      gap: '5px',
      alignSelf: 'center',
      flexDirection: 'column',
      justifyContent: 'center',
      [theme.breakpoints.down('md')]: {},
    },
  };
});
