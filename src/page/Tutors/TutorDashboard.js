// TutorDashboard.js
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ProfileManager from '../../components/Tutors/ProfileManager';
import CreateSession from '../../components/Tutors/SessionManager/CreateSession';
import Sessions from '../../components/Tutors/SessionManager/Sessions';
import ReservedSessions from '../../components/Tutors/SessionManager/ReservedSessions';
import DashboardHomePage from '../../components/DashboardHomePage';
import {
  Box,
  CssBaseline,
  Button,
  IconButton,
  Typography,
} from '@mui/material';
import useStyles from './style';
import AppBarDashboard from '../../components/AppBarDashboard';
import { Outlet, Link, useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

function TutorDashboard() {
  const { classes } = useStyles();
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <Box className={classes.TutorDashboard}>
      <CssBaseline />
      <AppBarDashboard />
      <Box width="100%">
        <Box sx={{ textAlign: 'left' }}>
          <Link>
            <Button onClick={handleGoBack}>
              <Typography color="#222" aria-label="retour">
                <ArrowBackIcon />
              </Typography>
            </Button>
          </Link>
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
}

export default TutorDashboard;
