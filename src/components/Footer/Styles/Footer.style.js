import { makeStyles } from 'tss-react/mui';

export const useStyles = makeStyles()((theme) => {
  return {
    footer: {
      display: 'flex',
      justifyContent: 'center',
      background: '#222',
      color: '#FFFFFF',
      fontSize: '19px',
      height: '4rem',
      position: 'fixed',
      bottom: '0',
      width: '100%',
      padding: '10px',
    },
  };
});
