import { React, useEffect } from 'react';
import { useState } from 'react';
import { Box, Typography } from '@mui/material';
import api from '../../../../services/api';
import AllSessionCard from '../../../Courses/AllSessionCard';

function MySessions() {
  const [reservedSessions, setReservedSessions] = useState([]);

  useEffect(() => {
    const fetchStudentSessions = async () => {
      try {
        const response = await api.get('/students/sessions', {
          headers: {
            authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        });

        const studentSessions = response.data;
        setReservedSessions(studentSessions);
      } catch (error) {
        console.error(
          'Erreur lors de la récupération de la session réservées :',
          error,
        );
      }
    };

    fetchStudentSessions();
  }, []);
  // const isReserved = reservedSessions.status !== 'Pending';

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
    } catch (error) {
      console.error("Erreur lors de l'anulation de la session :", error);
    }
  };

  console.log('reserved sessions:', reservedSessions);
  return (
    <Box width="100%">
      <Typography> Mes Sessions</Typography>

      <Box display="flex" flexWrap="wrap" gap="1rem" width="100%">
        {reservedSessions.map((session) => {
          return (
            <AllSessionCard
              key={session.id}
              session={session}
              buttonText={
                session.status === 'Pending' ? 'Annuler' : 'Session annulée'
              }
              onCancelClick={() => handleCancelSession(session.id)}
            />
          );
        })}
      </Box>
    </Box>
  );
}
export default MySessions;
