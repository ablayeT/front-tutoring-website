// TutorDashboard.js
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ProfileManager from '../../components/Tutors/ProfileManager';
import CreateSession from '../../components/Tutors/SessionManager/CreateSession';
import Sessions from '../../components/Tutors/SessionManager/Sessions';
import ReservedSessions from '../../components/Tutors/SessionManager/ReservedSessions';
import DashboardHomePage from '../../components/DashboardHomePage';
import { Box, CssBaseline } from '@mui/material';
// import { useStyles } from './Styles';
import AppBarDashboard from '../../components/AppBarDashboard';

function TutorDashboard() {
  // const { classes } = useStyles();

  return (
    <Box className="">
      <CssBaseline />
      <AppBarDashboard />
      <Box width="100%">
        <Box sx={{ textAlign: 'left' }}>
          <Routes>
            <Route path="profile" element={<ProfileManager />} />
            <Route path="sessions" element={<Sessions />} />
            <Route path="create-session" element={<CreateSession />} />
            <Route path="reserved-sessions" element={<ReservedSessions />} />
            <Route path="/" element={<DashboardHomePage />} />
          </Routes>
        </Box>
      </Box>
    </Box>
  );
}

export default TutorDashboard;
