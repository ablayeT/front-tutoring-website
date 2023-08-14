import React from 'react';
import MuiButton from '@mui/material/Button';
import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) =>{
    return {
    button: {
      backgroundColor: '#FFA500',
      color: 'black',
      fontWeight: 'bold',
      '&:hover': {
        backgroundColor: 'black',
        color: 'white',
      },
    },
  };
})

function Button({children ,onClick}) {
    const {classes} = useStyles()

    return (
        <MuiButton type='submit' className={classes.button} onClick={onClick}>
        {children}
        </MuiButton>
    );


}
export default Button;