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
      margin: '1rem',
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
      display: 'flex',
      padding: '1rem',
      padding: '1rem',
      justifyContent: 'center',

      [theme.breakpoints.down('md')]: {
        display: 'flex',

        justifyContent: 'center',
        minHeight: '150px',
        width: '50%',
      },
    },
    bannerImage: {
      transform: 'rotate(6deg)',
      width: '400px',
      objectFit: 'fill',
      margin: 'auto',
      borderRadius: '20px',
      height: '350px',
      alt: 'tutorWithStudent',
      [theme.breakpoints.down('md')]: {
        height: '200px',
        width: '280px',
      },
      [theme.breakpoints.down('md')]: {
        height: '150px',
        width: '280px',
      },
    },
    textContainer: {
      flex: '1',
      display: 'flex',
      padding: '1rem',
      width: '90%',
      alignItems: 'center',
      margin: 'auto',
      gap: '10px',
      alignSelf: 'center',
      flexDirection: 'column',
      justifyContent: 'center',
      [theme.breakpoints.down('md')]: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginBottom: '1rem',
      },
    },
  };
});
