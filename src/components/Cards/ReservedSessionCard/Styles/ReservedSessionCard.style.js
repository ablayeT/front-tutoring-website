import { makeStyles } from 'tss-react/mui';

export const useStyles = makeStyles()((theme) => {
  return {
    boxContent: {
      display: 'flex',
      width: '100%',
      padding: '10px',
      borderRadius: '5px',
      boxShadow: '2px 2px 7px lightgray',
      flexWrap: 'wrap',
      gap: '1rem',
      // [theme.breakpoints.down('sm')]: {
      //   width: '100%',
      // },
    },
  };
});
