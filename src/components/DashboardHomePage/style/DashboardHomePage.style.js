import { makeStyles } from 'tss-react/mui';

export const useStyles = makeStyles()((theme) => {
  return {
    dashboard: {
      display: 'flex',
      gap: '1rem',

      height: '100vh',
      justifyContent: 'center',
      [theme.breakpoints.down('md')]: {
        flexDirection: 'column',
      },
    },
  };
});
