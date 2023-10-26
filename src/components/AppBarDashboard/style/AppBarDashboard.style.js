import { makeStyles } from 'tss-react/mui';
import { styled } from '@mui/material/styles';
import MuiAppBar from '@mui/material/AppBar';

export const useStyles = makeStyles()((theme) => {
  return {
    appBar: {
      height: '2.4rem',
      top: '5rem',
      backgroundColor: 'orange',
      color: '#4a4a49',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    appBarDashboard: {
      display: 'flex',
      width: '200px',
      justifyContent: 'center',
      flexDirection: 'row',
      textAlign: 'center',
      border: '1px solid green',
      padding: '0',
      height: '100%',
      flexWrap: 'wrap',
      gap: '1rem',
      [theme.breakpoints.down('md')]: {
        display: 'flex',
        flexWrap: 'wrap',
      },
    },
    buttonBox: {
      height: '100%',
      display: 'flex ',
      justifyContent: 'center',
      alignItems: 'center',
      margin: '0',
      [theme.breakpoints.down('md')]: {
        display: 'none',
        flexWrap: 'wrap',
      },
    },
    button: {
      color: 'black',
      borderRadius: '0',
      height: '100%',
      '&:hover': {
        color: 'white',
        background: 'black',
      },
    },
    drawer: {
      backgroundColor: 'red',
      [theme.breakpoints.up('md')]: {
        display: 'none',
        background: '#FFA500',
      },
    },
    menuButton: {
      marginRight: theme.spacing(2),
      [theme.breakpoints.up('md')]: {
        display: 'none',
      },
    },
  };
});

export const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {}),
  ...(open && {
    transition: theme.transitions.create(['margin', 'width'], {}),
  }),
}));
