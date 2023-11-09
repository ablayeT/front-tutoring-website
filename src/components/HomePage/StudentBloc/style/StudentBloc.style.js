import { makeStyles } from 'tss-react/mui';

export const useStyles = makeStyles()((theme) => {
  return {
    gridContainer: {
      display: 'flex',
      gap: '15px',
      height: '100%',
      alignItems: 'center',
      flexWrap: 'wrap',
      width: '100%',
      [theme.breakpoints.down('md')]: {
        display: 'flex',
        flexDirection: 'column',
      },
    },
    imageContainer: {
      flex: '1',
      display: 'flex',
      justifyContent: 'center',
      padding: '1rem',
      border: '1px solid red',
      position: 'relative',
    },
    bannerImage: {
      padding: '10px',
      width: '300px',
      objectFit: 'fill',
      margin: 'auto',
      borderRadius: '1000px 1200px 1200px 1000px',
      borderRadius: '30px',
      height: '180x',
      transform: 'rotate(5deg)',
      [theme.breakpoints.down('md')]: {
        height: '200px',
        width: '250px',
      },
    },
    textContainer: {
      flex: '1',
      display: 'flex',
      padding: '20px',
      gap: '5px',
      alignSelf: 'center',
      flexDirection: 'column',
      justifyContent: 'center',
      [theme.breakpoints.down('md')]: {},
    },
  };
});
