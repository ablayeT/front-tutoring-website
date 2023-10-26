import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import Dashboard from '../../components/Students/Dashboard/Dashboard';

function StudentDashboard() {
  return (
    <Container
      sx={{
        minHeight: '100vh',
        marginTop: '8rem',
        border: '1px solid gray',
        flexDirection: 'column',
      }}
    >
      <Typography variant="body2">Student Dashboard</Typography>
      <Dashboard />
    </Container>
  );
}

export default StudentDashboard;
