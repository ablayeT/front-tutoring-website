import React from 'react'
import { Box, Typography } from '@mui/material'
import Dashboard from '../../components/Students/Dashboard'
// import Typography from '@material-ui';

function StudentDashboard() {
  return (
    <Box>
    <Typography variant='body2'>Student Dashboard</Typography>
    <Dashboard />
    </Box>
  )
}

export default StudentDashboard