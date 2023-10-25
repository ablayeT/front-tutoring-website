import { Box } from '@mui/material';
import React from 'react';
import Contact from '../../components/Contacts/Contact';

function Index() {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      width="80%"
      margin="auto"
      minheight="100vh"
      paddingTop="6rem"
    >
      <Contact />
    </Box>
  );
}

export default Index;
