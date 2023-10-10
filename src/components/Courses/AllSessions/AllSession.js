import React, { useEffect, useState } from 'react';
import api from '../../../services/api';
import { Box } from '@mui/material';
import AllSessionCard from '../AllSessionCard/AllSessionCard';
import { useStyles } from './Styles/AllSession.styles';

function TutorSessionsWithTutors() {
  const { classes } = useStyles();
  const [sessionsWithTutors, setSessionsWithTutors] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    console.log('token dans Cours :', token);

    if (token) {
      api
        .get('/tutors/AllSessions', {
          headers: {
            authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        })
        .then((response) => {
          setSessionsWithTutors(response.data);
          setIsLoading(false);
        })
        .catch((error) => {
          console.log(
            'Erreur lors de la récupération des sessions de tutorat avec les tuteurs:',
            error,
          );
          setIsLoading(false);
        });
    } else {
      return null;
    }
  }, [refresh]);

  const handleCancelSession = async (sessionId) => {
    try {
      const response = await api.post(
        '/students/cancel-session',
        {
          sessionId: sessionId,
        },
        {
          headers: {
            authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        },
      );
      console.log("réponse du serveur pour l'annulation :", response.data);
      setSessionsWithTutors((prevSessions) =>
        prevSessions.filter(
          (session) => session.tutoring_session_id !== sessionId,
        ),
      );
      setRefresh((prevRefresh) => !prevRefresh);
    } catch (error) {
      console.error("Erreur lors de l'anulation de la session :", error);
    }
  };

  console.log('sessionsWithTutors:', sessionsWithTutors);

  return (
    <Box className={classes.container}>
      {isLoading ? (
        <p>Chargement en cours...</p>
      ) : (
        <Box className={classes.AllSessionCard}>
          {sessionsWithTutors.map((session) => {
            return (
              <AllSessionCard
                key={session.id}
                session={session}
                sessionId={session.id}
                onCancelClick={() => handleCancelSession(session.id)}
              />
            );
          })}
        </Box>
      )}
    </Box>
  );
}

export default TutorSessionsWithTutors;
