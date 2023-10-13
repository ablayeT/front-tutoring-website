import React from 'react';
import { Box, Typography } from '@mui/material';
import Dashboard from '../../components/Tutors/Dashboard/Dashboard';

function TutorDashboard() {
  return (
    <Box
      minHeight="100vh"
      width="90%"
      margin="auto"
      marginTop="17rem"
      border="1px solid purple"
    >
      <Dashboard />
    </Box>
  );
}

export default TutorDashboard;
