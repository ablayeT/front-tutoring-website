import React from 'react';
import { Box } from '@mui/material';
import HomePage from '../../components/HomePage';

function Home() {
  return (
    <Box
      // border="1px solid lightgray"
      backgroundColor="white"
      margin="auto"
      padding="1rem 0 1rem 0"
      display="flex"
    >
      <HomePage />
    </Box>
  );
}

export default Home;
