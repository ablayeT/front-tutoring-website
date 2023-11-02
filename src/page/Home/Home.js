import React from 'react';
import { Box } from '@mui/material';
import HomePage from '../../components/HomePage';

function Home() {
  return (
    <Box
      border="1px solid lightgray"
      backgroundColor="white"
      width="90%"
      margin="auto"
      borderRadius="15px"
      display="flex"
    >
      <HomePage />
    </Box>
  );
}

export default Home;
