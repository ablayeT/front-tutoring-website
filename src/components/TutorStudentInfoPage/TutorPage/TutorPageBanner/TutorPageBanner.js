import { Typography, Box } from '@mui/material';
import React from 'react';

function TutorPageBanner() {
  return (
    <Box
      backgroundColor="orange"
      width="100%"
      margin="auto"
      height="120px"
      display="flex"
      alignItems="center"
      justifyContent="center"
      padding="10px"
    >
      <Typography variant="h4">Pourquoi devinir tuteur ?</Typography>
    </Box>
  );
}

export default TutorPageBanner;
