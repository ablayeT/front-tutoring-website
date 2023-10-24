import { makeStyles } from 'tss-react/mui';

const drawerWidth = 240;

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
      background: 'black',
      height: '6rem',
    },

    Toolbar: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    userInfoChild: {
      display: 'flex',
      flexDirection: 'column',
      padding: '1rem',
      alignItems: 'center',
      height: '100%',
      gap: '10px',
    },
    userName: {
      fontSize: '15px',
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
        color: 'white',
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
      height: '300px',
      background: 'black',
    },
    menuButton: {
      marginRight: theme.spacing(2),
      [theme.breakpoints.up('md')]: {
        display: 'none',
      },
    },
  };
});
