import { makeStyles } from 'tss-react/mui';

export const useStyles = makeStyles()((theme) => {
  return {
    studentDashboard: {
      display: 'flex',
      flexWrap: 'wrap',
      width: '100%',
      flexDirection: 'column',
      marginTop: '3rem',
      paddingBottom: '1rem',
    },
  };
});
