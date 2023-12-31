import { makeStyles } from 'tss-react/mui';

const drawerWidth = 180;

export const useStyles = makeStyles()((theme) => {
  return {
    container: {
      display: 'flex',
      justifyContent: 'space-between',
      [theme.breakpoints.down('md')]: {
        flexDirection: 'column',
      },
    },
    imgBox: {
      flex: '1',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    textBox: {
      flex: '1',
      display: 'flex',
      flexDirection: 'column',
      gap: '1.5rem',
      justifyContent: 'center',
      alignItems: 'left',
    },
    span: {
      background: 'orange',
      padding: '8px',
      borderRadius: '25px 0px 0px 0px',
    },
    cardMedia: {
      width: '70%',
      height: '70%',
      objectFit: 'fill',
    },
  };
});
