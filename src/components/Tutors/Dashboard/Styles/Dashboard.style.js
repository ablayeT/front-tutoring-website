import { styled } from '@mui/material/styles';
import MuiAppBar from '@mui/material/AppBar';
import { makeStyles } from 'tss-react/mui';

export const useStyles = makeStyles()((theme) => {
  return {
    appBar: {
      height: '2rem',
      top: '6rem',
      backgroundColor: 'black',
      color: '#4a4a49',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    appBarDashboard: {
      display: 'flex',
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      height: '150px',
      flexWrap: 'wrap',
      backgroundColor: 'orange',
      gap: '1rem',
      [theme.breakpoints.down('md')]: {
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'wrap',
      },
    },
    appBarDashboardChildren: {
      display: 'flex',
      gap: '2rem',
      height: '100%',
    },
    button: {
      color: 'black',
      borderRadius: '0',
      height: '100%',
      '&:hover': {
        color: 'white',
        borderBottom: '2px solid brown',
        background: 'black',
      },
    },
    navStack: {
      height: '100%',
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
