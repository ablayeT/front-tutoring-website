import React from 'react';
import MuiButton from '@mui/material/Button';
import useStyles from './Styles';

function Button({ children, onClick }) {
  const { classes } = useStyles();

  return (
    <MuiButton type="submit" className={classes.button} onClick={onClick}>
      {children}
    </MuiButton>
  );
}
export default Button;
