import { makeStyles } from 'tss-react/mui';

export const useStyles = makeStyles()((theme) => {
  return {
    cardContainer: {
      margin: '10px',
      padding: '10px',
      display: 'flex',
      justifyContent: ' center',
      flexWrap: 'wrap',
      gap: '1rem',
      border: '1px solid red',
    },
    confirmationMessage: {
      [theme.breakpoints.down('sm')]: {
        width: '100%',
      },
    },
  };
});
