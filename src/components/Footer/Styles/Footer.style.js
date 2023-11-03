import { makeStyles } from 'tss-react/mui';

export const useStyles = makeStyles()((theme) => {
  return {
    footer: {
      display: 'flex',
      textAlign: 'center',
      alignItems: 'center',
      background: '#222',
      color: '#FFFFFF',
      fontSize: '15px',
      height: '4rem',
      justifyContent: 'center',
      position: 'fixed',
      bottom: '0',
      width: '100%',
      padding: '20px',
    },
    logoFooter: {
      width: '120px',
      height: '100px',
    },
    footerText: {
      fontSize: '12px',
    },
  };
});
