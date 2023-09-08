import React from 'react';
import { Box, Typography } from '@mui/material';
import Dashboard from '../../components/Tutors/Dashboard/Dashboard';

function TutorDashboard() {
  return (
    <Box minHeight="100vh">
      <Typography variant="body2">Tutor Dashboard</Typography>
      <Dashboard />
    </Box>
  );
}

export default TutorDashboard;
