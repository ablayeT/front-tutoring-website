import { makeStyles } from 'tss-react/mui';

export const useStyles = makeStyles()((theme) => {
  return {
    bannerContainer: {
      padding: theme.spacing(4),
      [theme.breakpoints.down('md')]: {},
    },
    slider: {
      padding: '10px',
      gap: '1rem',
      justifyContent: 'center',
      display: 'flex',
      gap: '10px',
      width: '100%',
      textAlign: 'center',
    },
  };
});
