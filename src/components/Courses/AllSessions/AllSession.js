import React, { useEffect, useState } from 'react';
import api from '../../../services/api';
import Image from '../../Assets/Image';
import { Box, List, ListItem, ListItemText } from '@mui/material';
// import { useNavigate } from 'react-router-dom';

function TutorSessionsWithTutors() {
  // const navigate = useNavigate();
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
    <Box height="100vh">
      {isLoading ? (
        <p>Chargement en cours...</p>
      ) : (
        <List>
          {sessionsWithTutors.map((session) => (
            <ListItem key={session.id}>
              <ListItemText primary={`Nom du tuteur: ${session.first_name}`} />
              <ListItemText
                primary={`Prénom du tuteur: ${session.last_name}`}
              />
              <ListItemText primary={`Date: ${session.date}`} />
              <ListItemText primary={`Heure de début: ${session.start_time}`} />
              <ListItemText primary={`Heure de fin: ${session.end_time}`} />
              <ListItemText primary={`Lieu: ${session.location}`} />
              <ListItemText primary={`Prix: ${session.price}`} />
              <Image
                imageUrl={session.imageUrl}
                alt="ProfileImage"
                width="100px"
                height="80px"
                borderRadius="10px"
              />
            </ListItem>
          ))}
        </List>
      )}
    </Box>
  );
}

export default TutorSessionsWithTutors;
