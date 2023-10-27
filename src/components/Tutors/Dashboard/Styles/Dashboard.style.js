import { styled } from '@mui/material/styles';
import MuiAppBar from '@mui/material/AppBar';
import { makeStyles } from 'tss-react/mui';

export const useStyles = makeStyles()((theme) => {
  return {
    dashboard: {
      display: 'flex',

      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      borderRadius: '10px',
      marginBottom: '4rem',
      // [theme.breakpoints.down('md')]: {
      //   display: 'flex',
      //   flexDirection: 'column',
      //   flexWrap: 'wrap',
      // },
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
