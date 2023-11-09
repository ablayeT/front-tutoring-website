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
    textCards: {
      display: 'flex',
      gap: '1rem',
      padding: '10px',
      width: '80%',
      justifyContent: 'center',
      margin: 'auto',
      flexWrap: 'wrap',
      [theme.breakpoints.down('md')]: {
        display: 'flex',
        flexWrap: 'wrap',
      },
    },
    testimony: {
      padding: '10px',
      width: '22.5%',

      [theme.breakpoints.down('md')]: {
        width: '45%',
      },
      [theme.breakpoints.down('sm')]: {
        width: '100%',
      },
      [theme.breakpoints.up('md')]: {
        width: '35%',
      },
      [theme.breakpoints.up('lg')]: {
        width: '23%',
      },
    },
  };
});
