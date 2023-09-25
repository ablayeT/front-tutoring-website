import { makeStyles } from 'tss-react/mui';

const drawerWidth = 240;

export const useStyles = makeStyles()((theme) => {
  return {
    navlinks: {
      margingLeft: theme.spacing(2),
      display: 'flex',
      flexWrap: 'wrap',
      gap: '15px',
      [theme.breakpoints.down('md')]: {
        display: 'none',
      },
    },
    header: {
      color: 'white',
      background: 'black',
      height: '5rem',
    },
    logo: {
      flexGrow: 1,
      cursor: 'pointer',
    },
    link: {
      textDecoration: 'none',
      color: 'white',
      fontSize: '20px',
      margingLeft: theme.spacing(20),
      '&:hover': {
        color: 'white',
        borderBottom: '1px solid brown',
        background: '#FFA500',
      },
    },
    drawer: {
      [theme.breakpoints.up('md')]: {
        display: 'none',
        background: '#FFA500',
      },
      width: drawerWidth,
      height: '100px',
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
