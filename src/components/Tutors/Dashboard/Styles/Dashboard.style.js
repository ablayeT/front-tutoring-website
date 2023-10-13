import { styled } from '@mui/material/styles';
import MuiAppBar from '@mui/material/AppBar';
import { makeStyles } from 'tss-react/mui';

const drawerWidth = 220;

export const useStyles = makeStyles()((theme) => {
  return {
    appBar: {
      height: '8rem',
      top: '8rem',
      backgroundColor: 'black',
      color: '#4a4a49',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      borderTop: '3px solid white',
    },
    appBarDashboard: {
      display: 'flex',
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      height: '300px',
      flexWrap: 'wrap',
      borderRadius: '40px 40px 0 0',
      backgroundColor: '#ffe19c',
      gap: '1rem',
      [theme.breakpoints.down('md')]: {
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'wrap',
      },
    },
    appBarDashboardChildren: {
      display: 'flex',
      gap: '1rem',
    },
  };
});

export const Main = styled('main', {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create('margin', {}),

  ...(open && {
    transition: theme.transitions.create('margin', {}),
    marginLeft: 0,
  }),
}));

export const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {}),
  ...(open && {
    transition: theme.transitions.create(['margin', 'width'], {}),
  }),
}));
