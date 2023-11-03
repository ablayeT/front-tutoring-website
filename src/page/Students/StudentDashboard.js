// StudentDashboard.js
import React from 'react';
import { Route, Routes, Outlet } from 'react-router-dom';
import ProfileManager from '../../components/Students/profileManager/ProfileManager';
import CssBaseline from '@mui/material/CssBaseline';
import Sessions from '../../components/Students/SessionManager/MySessions/MySessions';
import SearchResults from '../../components/Students/SearchResults/SearchResults';
import AppBarDashboard from '../../components/AppBarDashboard/AppBarDashboard';
import { Box } from '@mui/material';

function StudentDashboard() {
  return (
    <Box display="flex" flexWrap="wrap" width="100%" minHeight="100vh">
      <CssBaseline />
      <AppBarDashboard />
      <Box sx={{ display: 'flex', width: '100%', flexWrap: 'wrap' }}>
        <Outlet />
      </Box>
    </Box>
  );
}

export default StudentDashboard;
