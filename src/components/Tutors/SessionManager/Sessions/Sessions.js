import React, { useState, useEffect } from 'react';
import { Box, Stack, Typography } from '@mui/material';
// import instanceAxios from '../../../services/axiosInterceptor';
import TutorSessionCard from '../../../Cards/TutorSessionCard/TutorSessionsCard';
import { NavLink } from 'react-router-dom';
import Button from '../../../Buttons/Button';
import api from '../../../../services/api';
import useStyles from '../../../Cards/TutorSessionCard/style';

function Sessions({ sessionData }) {
  const { classes } = useStyles();
  const [tutorSessions, setTutorSessions] = useState(sessionData);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchTutorSessions = async () => {
      try {
        setIsLoading(false);
      } catch (error) {
        console.error(error);
      }
    };

    fetchTutorSessions();
  }, [sessionData]);

  const handleDeleteSession = async (sessionId) => {
    try {
      await api.delete(`tutors/sessions/${sessionId}`, {
        headers: {
          authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });

      setTutorSessions(
        tutorSessions.filter((session) => session.id !== sessionId),
      );
    } catch (error) {
      console.error(error);
    }
  };

  if (isLoading) {
    return <Typography>Loading</Typography>;
  }

  return (
    <Box className={classes.cardContainer}>
      {tutorSessions.length === 0 ? (
        <Box display="flex" justifyContent="center">
          <Typography variant="h5" textAlign="center">
            Vous n'avez pas encore de Séssion,
          </Typography>
          <NavLink to="/tutor-dashboard/create-session">
            <Button>Créer une session</Button>
          </NavLink>
        </Box>
      ) : // <Typography variant="h5" marginBottom="1rem">
      //   Mes sessions de tutorat
      // </Typography>
      null}
      {tutorSessions.map((session) => (
        <TutorSessionCard
          session={session}
          sessionId={session.id}
          onDelete={handleDeleteSession}
          setTutorSessions={setTutorSessions}
        />
      ))}
    </Box>
  );
}

export default Sessions;
