import React from 'react';
import { Box, Typography } from '@mui/material';
import Dashboard from '../../components/Tutors/Dashboard/Dashboard';

function TutorDashboard() {
  return (
    <Box
      minHeight="100vh"
      width="90%"
      margin="auto"
      padding="10px"
      marginTop="8rem"
      backgroundColor="white"
      borderRadius="15px"
    >
      <Dashboard />
    </Box>
  );
}

export default TutorDashboard;
