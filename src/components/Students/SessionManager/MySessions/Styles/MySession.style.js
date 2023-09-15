import { makeStyles } from 'tss-react/mui';

export const useStyles = makeStyles()((theme) => {
  return {
    MySessionContainer: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '1rem',
      padding: '10px',
      justifyContent: 'center',
      border: '1px solid blue',
    },
    MySessionCard: {
      // border: '1px soslid green',
      // [theme.breakpoints.down('md')]: {
      //   width: '48%',
      // },
      // [theme.breakpoints.down('sm')]: {
      //   width: '100%',
      // },
      // [theme.breakpoints.between(768, 950)]: {
      //   width: '48%',
      // },
      // [theme.breakpoints.between(951, 3000)]: {
      //   Width: '28%',
      // },
    },
  };
});