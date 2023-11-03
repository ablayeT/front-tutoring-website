import { makeStyles } from 'tss-react/mui';

export const useStyles = makeStyles()((theme) => {
  return {
    footer: {
      display: 'flex',
      textAlign: 'center',
      alignItems: 'center',
      background: '#222',
      flexDirection: 'column',
      color: '#FFFFFF',
      fontSize: '19px',
      height: '6rem',
      justifyContent: 'center',
      position: 'fixed',
      bottom: '0',
      width: '100%',
      padding: '20px',
    },
    logoFooter: {
      width: '120px',
      height: '80px',
    },
    footerText: {
      paddingBottom: '15px',
    },
  };
});
