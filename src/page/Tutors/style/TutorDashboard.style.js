import { makeStyles } from 'tss-react/mui';

export const useStyles = makeStyles()((theme) => {
  return {
    TutorDashboard: {
      background: 'rgba(255, 165, 0, 0.5)',
      width: '90%',
      borderRadius: '20px',
      padding: '15px',
      margin: 'auto',
      minHeight: '100vh',
    },
  };
});
