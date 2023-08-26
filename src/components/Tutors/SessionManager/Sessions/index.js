import React, { useState, useEffect } from 'react';
import { Box, Stack, Typography } from '@mui/material';
// import instanceAxios from '../../../services/axiosInterceptor';
import api from '../../../../services/api'
import TutorSessionCard  from '../../../Cards/TutorSessionsCard'
import { NavLink } from 'react-router-dom';
import Button from '../../../Buttons/Button';

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
      { tutorSessions.length === 0 ? (
        <Box display='flex' justifyContent='center' marginTop={5} gap='1rem'>
         <Typography variant='h5' textAlign='center' >Vous n'avez pas encore de Séssion,</Typography> 
         <NavLink to="/tutor-dashboard/create-session" >
             <Button>Créer une session</Button>
         </NavLink>
         </Box>

      ) : ( 
      <Typography level='h5' >Mes sessions de tutorat</Typography>
      )}
      {tutorSessions.map(session => (
  <Stack key={session.id}>
    <TutorSessionCard session={session} sessionId={session.id} onDelete={handleDeleteSession}/>
  </Stack>
))}

    </Box>
  );
}

export default Sessions;
