import React from 'react';
import { Box, Typography } from '@mui/material';
import Dashboard from '../../components/Students/Dashboard/Dashboard';

function StudentDashboard() {
  return (
    <Box minHeight="100vh">
      <Typography variant="body2">Student Dashboard</Typography>
      <Dashboard />
    </Box>
  );
}

export default StudentDashboard;
