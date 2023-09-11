import { makeStyles } from 'tss-react/mui';

export const useStyles = makeStyles()((theme) => {
  return {
    boxContent: {
      position: 'relative',
      display: 'flex',
      width: '32%',
      height: '500px',
      padding: '1.5rem',
      borderRadius: '5px',
      boxShadow: '1px 1px 3px #FFA500',
      flexWrap: 'wrap',
      backgroundColor: '#ffe19c',
      [theme.breakpoints.down('md')]: {
        width: '40%',
      },
      [theme.breakpoints.down('sm')]: {
        width: '100%',
      },
      [theme.breakpoints.up('lg')]: {
        width: '29%',
      },
    },
    paper: {
      position: 'absolute',
      top: '60px',
      bottom: '160px',
      left: '0',
      width: '45%',
      backgroundColor: '#ffe19c',
      padding: '10px',
    },
  };
});
