import { Box, Typography } from '@mui/material';
import React from 'react';
import useStyles from './Styles';
import logo from '../Assets/logoTutorat.png';

function Index() {
  const { classes } = useStyles();
  return (
    <Box className={classes.footer}>
      <img src={logo} alt="logo eduguide" className={classes.logoFooter} />
      <Typography className={classes.footerText}>
        © 2020 Eduguide. All rights reserved
      </Typography>
    </Box>
  );
}

export default Index;
