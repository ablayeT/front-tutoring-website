import React, { useState, useEffect } from 'react';
import { Box, Stack, Typography } from '@mui/material';
import api from '../../../services/api'; // Assurez-vous d'importer correctement votre instance Axios configurée

function Sessions() {
  const [tutorSessions, setTutorSessions] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchTutorSessions = async () => {
      try {
        const response = await api.get('/tutors/sessions', {
          headers: {
            authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        });

        setTutorSessions(response.data.sessions);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
      }
    };

    fetchTutorSessions();
  }, []);

  if (isLoading) {
    return <Typography>Loading</Typography>;
  }
console.log('tutorSessions:', tutorSessions)
  return (
    <Box>
      <Typography>Mes sessions de tutorat</Typography>
      {tutorSessions.map(session => (
  <Stack key={session.id}>
    <Typography>Matière: {session.name}</Typography>
    <Typography>Date: {session.date}</Typography>
    <Typography>Heure de début: {session.start_time}</Typography>
    <Typography>Heure de fin: {session.end_time}</Typography>
    <Typography>Lieu: {session.location}</Typography>
    <Typography>Prix: {session.price}</Typography>
  </Stack>
))}

    </Box>
  );
}

export default Sessions;
