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
  };
});
