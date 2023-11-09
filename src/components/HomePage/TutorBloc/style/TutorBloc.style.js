import { makeStyles } from 'tss-react/mui';

export const useStyles = makeStyles()((theme) => {
  return {
    gridContainer: {
      [theme.breakpoints.down('md')]: {
        flexDirection: 'column',
      },
    },
    imageContainer: {
      flex: '1',
      display: 'flex',
      justifyContent: 'center',
      padding: '1rem',
      position: 'relative',
    },
    bannerImage: {
      width: '300px',
      padding: '10px',
      objectFit: 'fill',
      margin: 'auto',
      // borderRadius:"10px"
      borderRadius: '30px',
      height: '180x',
      alt: 'tutorWithStudent',
      transform: 'rotate(3deg)',
      [theme.breakpoints.down('md')]: {
        height: '200px',
        width: '250px',
      },
    },
    orangeCircle: {
      width: '60px',
      height: '60px',
      borderRadius: '30px 25px 30px 40px',
      backgroundColor: 'yellow',
      position: 'absolute',
      top: '10px',
      right: '180px',
      transform: 'translateX(-50%)',
    },
    yellowCircle: {
      width: '60px',
      height: '60px',
      borderRadius: '30px 25px 30px 40px',
      backgroundColor: 'orange',
      position: 'absolute',
      top: '150px',
      right: '110px',
      transform: 'translateX(-50%)',
    },
    blueCircle: {
      width: '60px',
      height: '60px',
      borderRadius: '50px 300px 100px 100px',
      backgroundColor: 'rgb(173, 216, 230)',
      position: 'absolute',
      top: '170px',
      left: '200px',
      transform: 'translateX(-50%)',
    },
  };
});
