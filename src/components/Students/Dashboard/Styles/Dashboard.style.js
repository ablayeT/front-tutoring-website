import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import MuiAppBar from '@mui/material/AppBar';
import { makeStyles } from 'tss-react/mui';
export const drawerWidth = 220;

export const useStyles = makeStyles()((theme) => {
  return {
    studentDashboardPage: {
      minHeight: '100vh',
      background: 'rgba(255, 165, 0, 0.2)',
      borderRadius: '15px',
      width: '90%',
      alignSelf: 'center',
      display: 'flex',
      margin: 'auto',
      marginTop: '2rem',
      padding: '2rem',
      flexDirection: 'column',
      [theme.breakpoints.down('md')]: {
        padding: '0',
      },
    },
  };
});

export const Search = styled('div')(({ theme }) => ({
  position: 'relative',

  backgroundColor: alpha(theme.palette.common.white, 1),
  border: `2px solid rgba(255, 187, 51, 1)`,
  borderRadius: '0.6rem',
  '&:hover': {
    backgroundColor: 'rgba(240, 240, 240, 0.8)',
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: '50%',
  },
}));

export const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

export const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));
export const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

export const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));
