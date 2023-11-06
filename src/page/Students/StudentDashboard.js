// StudentDashboard.js
import React from 'react';
import { Outlet, Link, useNavigate } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import AppBarDashboard from '../../components/AppBarDashboard/AppBarDashboard';
import { Box, Button, IconButton } from '@mui/material';
import useStyles from './style';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

function StudentDashboard() {
  const { classes } = useStyles();
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
  };
  return (
    <Box className={classes.studentDashboard}>
      <CssBaseline />
      <AppBarDashboard />
      <Box
        sx={{
          display: 'flex',
          width: '100%',
          flexDirection: 'column',
          flexWrap: 'wrap',
        }}
      >
        <Link>
          <Button onClick={handleGoBack}>
            <IconButton onClick={handleGoBack} color="#222" aria-label="retour">
              <ArrowBackIcon />
            </IconButton>
          </Button>
        </Link>
        <Outlet />
      </Box>
    </Box>
  );
}

export default StudentDashboard;
