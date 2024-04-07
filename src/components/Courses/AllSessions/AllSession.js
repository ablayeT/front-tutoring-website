import React, { useEffect, useState } from 'react';
import api from '../../../services/api';
import { Box } from '@mui/material';
import AllSessionCard from '../AllSessionCard/AllSessionCard';
import { useStyles } from './Styles/AllSession.styles';
import BackButton from '../../Buttons/BackButton';
import moment from 'moment';

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
      <Box display="flex" justifyContent="left" width="100%" marginTop>
        {/* bouton de retour */}
        <BackButton label="Retourner à la page précédente" />
      </Box>
      {isLoading ? (
        <p>Chargement en cours...</p>
      ) : (
        <Box className={classes.AllSessionCard}>
          {sessionsWithTutors.map((session) => {
            return <AllSessionCard key={session.id} session={session} />;
          })}
        </Box>
      )}
    </Box>
  );
}

export default TutorSessionsWithTutors;
