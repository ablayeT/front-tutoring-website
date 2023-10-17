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
  const [isCreating, setIsCreating] = useState(false);

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
      await api.delete(`tutors/sessions/${sessionId}`);

      setTutorSessions(
        tutorSessions.filter((session) => session.id !== sessionId),
      );
    } catch (error) {
      console.error(error);
    }
  };

  const handleCreateSession = () => {
    setIsCreating(true);
  };

  const handleCancelCreate = () => {
    setIsCreating(false);
  };

  if (isLoading) {
    return <Typography>Loading</Typography>;
  }

  return (
    <Box className={classes.cardContainer}>
      <Box
        display="flex"
        flexDirection="column"
        gap="1rem"
        width="100%"
        textAlign="center"
        padding="10px"
      >
        {isCreating ? (
          <CreateSession onCancel={handleCancelCreate} />
        ) : tutorSessions.length === 0 ? (
          <Box display="flex" justifyContent="center">
            <Typography variant="h5" textAlign="center">
              Vous n'avez pas encore de session.
            </Typography>
            <NavLink to="/tutor-dashboard/create-session">
              <Button>Créer une session</Button>
            </NavLink>
          </Box>
        ) : (
          <NavLink to="/tutor-dashboard/create-session">
            <Button>Novelle session</Button>
          </NavLink>
        )}
      </Box>

      {tutorSessions.map((session) => (
        <Box padding="10px">
          <TutorSessionCard
            session={session}
            sessionId={session.id}
            onDelete={handleDeleteSession}
            setTutorSessions={setTutorSessions}
          />
        </Box>
      ))}
    </Box>
  );
}

export default Sessions;
