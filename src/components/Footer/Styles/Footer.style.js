import { makeStyles } from 'tss-react/mui';

export const useStyles = makeStyles()((theme) => {
  return {
    footer: {
      display: 'flex',
      justifyContent: 'center',
      background: 'black',
      color: '#FFFFFF',
      fontSize: '19px',
      height: '4rem',
      bottom: '0',
      width: '100%',
      padding: '10px',
    },
  };
});
