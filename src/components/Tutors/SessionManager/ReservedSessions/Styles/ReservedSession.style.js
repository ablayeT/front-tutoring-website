import { makeStyles } from 'tss-react/mui';

export const useStyles = makeStyles()((theme) => {
  return {
    reservedSession: {
      display: 'flex',
      flexDirection: 'column',
      flexWrap: 'wrap',
      padding: '1.5rem',
      borderRadius: '5px',
      gap: '1rem',
      boxShadow: '1px 1px 5px #FFA500',

      [theme.breakpoints.down('md')]: {
        width: '48%',
      },
      [theme.breakpoints.down('sm')]: {
        width: '100%',
      },
      [theme.breakpoints.up('md')]: {
        width: '48%',
        color: 'green',
      },
      [theme.breakpoints.up('lg')]: {
        width: '32%',
        color: 'blue',
      },
    },
  };
});
