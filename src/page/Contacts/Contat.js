import { Box } from '@mui/material';
import React from 'react';
import Contact from '../../components/Contacts/Contact';

function Index() {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      width="70%"
      backgroundColor="rgba(255, 165, 0, 0.2)"
      borderRadius="15px"
      margin="auto"
      minheight="100vh"
      paddingTop="1rem"
      paddingBottom="1rem"
    >
      <Contact />
    </Box>
  );
}

export default Index;
