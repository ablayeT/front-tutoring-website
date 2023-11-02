import React from 'react';
import { Box } from '@mui/material';
import Dashboard from '../../components/Students/Dashboard/Dashboard';
import useStyles from '../../components/Students/Dashboard/Styles';

function StudentDashboard() {
  const { classes } = useStyles();
  return (
    <Box className={classes.studentDashboardPage}>
      <Dashboard />
    </Box>
  );
}

export default StudentDashboard;
