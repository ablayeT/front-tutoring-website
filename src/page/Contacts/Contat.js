import { Box } from '@mui/material';
import React from 'react';
import Contact from '../../components/Contacts/Contact';

function Index() {
  return (
    <Box
      minHeight="100vh"
      display="flex"
      justifyContent="center"
      marginBottom="3rem"
    >
      <Contact />
    </Box>
  );
}

export default Index;
