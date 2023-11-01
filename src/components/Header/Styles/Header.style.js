import { makeStyles } from 'tss-react/mui';

const drawerWidth = 180;

export const useStyles = makeStyles()((theme) => {
  return {
    navlinks: {
      margingLeft: theme.spacing(2),
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      gap: '20px',
      [theme.breakpoints.down('md')]: {
        display: 'none',
      },
    },
    header: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      color: 'white',
      background: '#222',
      height: '5rem',
    },

    Toolbar: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    userInfoChild: {
      display: 'flex',
      padding: '1rem',
      alignItems: 'center',
      height: '100%',
      gap: '10px',
    },
    userName: {
      fontSize: '14px',
    },
    logo: {
      cursor: 'pointer',
      width: '200px',
      objectFit: 'cover',
      padding: '15px',
    },
    menuIcon: {
      height: '4rem',
      width: '2.5rem',
    },
    link: {
      color: 'white',
      '&:hover': {
        color: '#222',
        borderBottom: '2px solid brown',
        background: '#FFA500',
      },
    },
    menuToggleLink: {
      color: '#222',
      '&:hover': {
        color: '#222',
        borderBottom: '2px solid brown',
        background: '#FFA500',
      },
    },
    drawer: {
      [theme.breakpoints.up('md')]: {
        display: 'none',
        background: '#FFA500',
      },
      width: drawerWidth,
      height: '150px',
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
      height: '200px',
      background: 'white',
      borderRadius: '10px ',
      margin: '10px',
    },
    menuButton: {
      marginRight: theme.spacing(2),
      [theme.breakpoints.up('md')]: {
        display: 'none',
      },
    },
  };
});
