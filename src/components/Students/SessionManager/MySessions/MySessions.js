import { React, useEffect } from 'react';
import { useState } from 'react';
import { Box, Typography } from '@mui/material';
import api from '../../../../services/api';
import ReservedSessionCard from '../../../Cards/ReservedSessionCard';
import useStyles from './Styles';

function MySessions() {
  const { classes } = useStyles();
  const [reservedSessions, setReservedSessions] = useState([]);

  useEffect(() => {
    const fetchStudentSessions = async () => {
      try {
        const response = await api.get('/students/sessions', {
          headers: {
            authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        });

        // const studentSessions = response.data;
        setReservedSessions(response.data);
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
    console.log('ID de session à annuler :', sessionId);
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
      setReservedSessions(
        reservedSessions.filter(
          (session) => session.tutoring_session_id !== sessionId,
        ),
      );
    } catch (error) {
      console.error("Erreur lors de l'anulation de la session :", error);
    }
  };
  useEffect(() => {
    console.log('Reserved Sessions Updated:', reservedSessions);
  }, [reservedSessions]);

  const generateUniqueKey = (session) => {
    return session.tutoring_session_id + Date.now();
  };

  console.log('reserved sessions:', reservedSessions);

  return (
    <Box width="100%" border="1px soslid red">
      <Typography> Mes Sessions</Typography>
      <Box className={classes.MySessionContainer}>
        {reservedSessions.map((session) => {
          return (
            <Box className={classes.MySessionCard}>
              <ReservedSessionCard
                key={generateUniqueKey(session)}
                session={session}
                onCancelClick={() => handleCancelSession(session.id)}
              />
            </Box>
          );
        })}
      </Box>
    </Box>
  );
}
export default MySessions;
