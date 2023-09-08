import React, { useEffect, useState } from 'react';
import api from '../../../services/api';
import { Box, Stack } from '@mui/material';
import AllSessionCard from '../AllSessionCard/AllSessionCard';
import { useStyles } from './Styles/AllSession.styles';

function TutorSessionsWithTutors() {
  const { classes } = useStyles();
  const [sessionsWithTutors, setSessionsWithTutors] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

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
  }, []);

  console.log('sessionsWithTutors:', sessionsWithTutors);

  return (
    <Box className={classes.container}>
      {isLoading ? (
        <p>Chargement en cours...</p>
      ) : (
        <Stack
          display="flex"
          flexDirection="row"
          flexWrap="wrap"
          justifyContent="center"
          padding="1rem"
          gap="20px"
        >
          {sessionsWithTutors.map((session, Index) => {
            return <AllSessionCard session={session} />;
          })}
        </Stack>
      )}
    </Box>
  );
}

export default TutorSessionsWithTutors;
