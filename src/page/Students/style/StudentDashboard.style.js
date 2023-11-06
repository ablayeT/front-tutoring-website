import { makeStyles } from 'tss-react/mui';

export const useStyles = makeStyles()((theme) => {
  return {
    studentDashboard: {
      display: 'flex',
      flexWrap: 'wrap',
      background: 'rgba(255, 165, 0, 0.5)',
      width: '90%',
      margin: 'auto',
      flexDirection: 'column',
      boxShadow: '0px 0px 10px 0px rgba(34, 34, 34, 0.6)',
      minHeight: '100vh',
      marginTop: '1rem',
      borderRadius: '15px',
      paddingTop: '1rem',
      paddingBottom: '1rem',
    },
  };
});
