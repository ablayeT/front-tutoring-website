// TutorDashboard.js
import React from 'react';
// import { Route, Routes } from 'react-router-dom';
// import ProfileManager from '../../components/Tutors/ProfileManager';
// import CreateSession from '../../components/Tutors/SessionManager/CreateSession';
// import Sessions from '../../components/Tutors/SessionManager/Sessions';
// import ReservedSessions from '../../components/Tutors/SessionManager/ReservedSessions';
// import DashboardHomePage from '../../components/DashboardHomePage';
import { Box, CssBaseline, Button, Typography } from '@mui/material';
import useStyles from './style';
import { Outlet, Link, useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useAuth } from '../../components/Auth/AuthContext/AuthContext';

function TutorDashboard() {
  const { classes } = useStyles();
  const navigate = useNavigate();
  const { isLoggedIn } = useAuth();

  console.log('isLoggedIn,', isLoggedIn);

  const handleGoBack = () => {
    if (isLoggedIn) {
      // Si l'utilisateur est connecté et se trouve sur la page d'accueil du tableau de bord, redirigez-le vers une autre page (par exemple, la liste des sessions)
      navigate('/sessions');
    } else {
      // Sinon, utilisez la fonction de retour par défaut
      window.history.back();
    }
  };

  return (
    <Box className={classes.TutorDashboard}>
      <CssBaseline />
      {/* <AppBarDashboard /> */}
      <Box width="100%">
        <Box sx={{ textAlign: 'left' }}>
          <Link>
            <Button onClick={handleGoBack}>
              <Typography color="#222">
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
