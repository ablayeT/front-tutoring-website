import { makeStyles } from 'tss-react/mui';

export const useStyles = makeStyles()((theme) => {
  return {
    container: {
      backgroundColor: '#fcf7e8',
      height: 'auto',
      margin: 'auto',
      paddingTop: '6rem',
      '&:hover': {
        boxShadow: '0 1px 1px -10px red',
      },
    },
    AllSessionCard: {
      width: '100%',
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'center',
      padding: '1rem',
      gap: '20px',
    },
  };
});
