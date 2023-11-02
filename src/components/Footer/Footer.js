import { Box, Typography } from '@mui/material';
import React from 'react';
import useStyles from './Styles';

function Index() {
  const { classes } = useStyles();
  return (
    <Box className={classes.footer}>
      <img src="src" alt="logo eduguide" />
      <Typography>© 2020 Eduguide. All rights reserved</Typography>
    </Box>
  );
}

export default Index;
