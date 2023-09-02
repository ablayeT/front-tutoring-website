import { Box } from '@mui/material';
import React from 'react';
import useStyles from './Styles';

function Index() {
  const { classes } = useStyles();
  return <Box className={classes.footer}>Footer</Box>;
}

export default Index;
