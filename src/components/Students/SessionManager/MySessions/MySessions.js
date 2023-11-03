import { React, useEffect } from 'react';
import { useState } from 'react';
import { Box, Typography, CircularProgress } from '@mui/material';
import api from '../../../../services/api';
import ReservedSessionCard from '../../../Cards/ReservedSessionCard';
import useStyles from './Styles';

function MySessions() {
  const { classes } = useStyles();
  const [reservedSessions, setReservedSessions] = useState([]);
  const [confirmationMessage, setConfirmationMessage] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   const fetchStudentSessions = async () => {
  //     try {
  //       const response = await api.get('/students/sessions');

  //       setReservedSessions(response.data);
  //       setIsLoading(false);
  //     } catch (error) {
  //       console.error(
  //         'Erreur lors de la récupération de la session réservées :',
  //         error,
  //       );
  //       setIsLoading(false);
  //     }
  //   };

  //   fetchStudentSessions();
  // }, []);

  const handleCancelSession = async (sessionId) => {
    const isConfirmed = window.confirm(
      'Voulez-vous vraiment annuler cette session ?',
    );

    if (isConfirmed) {
      try {
        const response = await api.post('/students/cancel-reserved-session', {
          sessionId: sessionId,
        });
        console.log("réponse du serveur pour l'annulation :", response.data);
        setReservedSessions((prevSessions) =>
          prevSessions.filter(
            (session) => session.tutoring_session_id !== sessionId,
          ),
        );

        refreshData();

        setConfirmationMessage('Session annulée avec succès');
        // Effacez le message de confirmation après 2 secondes
        setTimeout(() => {
          setConfirmationMessage('');
        }, 2000);
      } catch (error) {
        console.error("Erreur lors de l'anulation de la session :", error);
      }
    }
  };

  const refreshData = () => {
    setIsLoading(true);
    const fetchData = async () => {
      try {
        const response = await api.get('/students/sessions');
        setReservedSessions(response.data);
        setIsLoading(false);
      } catch (error) {
        console.error(
          'Erreur lors de la récupération de la session réservées :',
          error,
        );
        setIsLoading(false);
      }
    };
    fetchData();
  };
  useEffect(refreshData, []); // Appel initial pour charger les données

  if (isLoading) {
    return <CircularProgress />;
  }

  return (
    <Box
      width="100%"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      flexWrap="wrap"
    >
      <Typography> Mes Sessions</Typography>
      <Box className={classes.MySessionContainer}>
        {reservedSessions.map((session) => {
          return (
            <Box
              key={session.tutoring_session_id}
              className={classes.MySessionCard}
            >
              <ReservedSessionCard
                key={session.tutoring_session_id}
                session={session}
                onCancelClick={() => handleCancelSession(session.id)}
              />
            </Box>
          );
        })}
      </Box>
      {/* Affichage du message de confirmation */}
      {confirmationMessage && (
        <Box
          className={`${classes.confirmationMessage} ${classes.confirmationMessageVisible}  `}
        >
          <Typography variant="body1">Sessions annulée avec succés</Typography>
        </Box>
      )}
    </Box>
  );
}
export default MySessions;
