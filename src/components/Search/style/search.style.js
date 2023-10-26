import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import { makeStyles } from 'tss-react/mui';

export const useStyles = makeStyles()((theme) => {
  return {
    search: {
      border: '1px solid red',
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
