import React from 'react';
import MuiButton from '@mui/material/Button';
import useStyles from './Styles';

function Button({ children, onClick, disabled }) {
  const { classes } = useStyles();

  return (
    <MuiButton
      type="submit"
      disabled={disabled}
      className={disabled ? classes.buttonDisabled : classes.button}
      onClick={onClick}
    >
      {children}
    </MuiButton>
  );
}
export default Button;
