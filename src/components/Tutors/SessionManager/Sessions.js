import React, { useState, useEffect } from 'react';
import { Box, Stack, Typography } from '@mui/material';
import api from '../../../services/api'; // Assurez-vous d'importer correctement votre instance Axios configurée
import TutorSessionCard  from '../../Cards/TutorSessionsCard'

function Sessions() {
  const [tutorSessions, setTutorSessions] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchTutorSessions = async () => {
      try {
        const response = await api.get('tutors/sessions', {
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

console.log('tutorSessions:', tutorSessions)

const handleDeleteSession = async (sessionId) => {
  try {
    await api.delete(`tutors/sessions/${sessionId}`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    })
  
    setTutorSessions(tutorSessions.filter(session => session.id!== sessionId));
  }catch (error) {
    console.error(error);
  }
}

if (isLoading) {
  return <Typography>Loading</Typography>;
}
  return (
    <Box>
      <Typography>Mes sessions de tutorat</Typography>
      {tutorSessions.map(session => (
  <Stack key={session.id}>
    <TutorSessionCard session={session} sessionId={session.id} onDelete={handleDeleteSession}/>
  </Stack>
))}

    </Box>
  );
}

export default Sessions;
