import React, { useState, useEffect } from 'react';
import { Box, Stack, Typography } from '@mui/material';
// import instanceAxios from '../../../services/axiosInterceptor';
import TutorSessionCard from '../../../Cards/TutorSessionCard/TutorSessionsCard';
import { NavLink } from 'react-router-dom';
import Button from '../../../Buttons/Button';
import api from '../../../../services/api';
// import useStyles from '../../../Cards/TutorSessionCard/style';
import useStyles from './style';

function Sessions({ sessionData }) {
  const { classes } = useStyles();
  const [tutorSessions, setTutorSessions] = useState(sessionData);
  const [isLoading, setIsLoading] = useState(true);
  const [isCreating, setIsCreating] = useState(false);
  const [registeredStudents, setRegisteredStudents] = useState([]);

  const [confirmationMessage, setConfirmationMessage] = useState();
  useEffect(() => {
    const fetchTutorSessions = async () => {
      try {
        setIsLoading(false);
      } catch (error) {
        console.error(error);
      }
    };

    fetchTutorSessions();
  }, [sessionData]);

  const handleDeleteSession = async (sessionId) => {
    try {
      // Récupérer les étudiants inscrits à la session spécifique
      const response = await api.get(`/tutors/sessions/${sessionId}/students`);
      setRegisteredStudents(response.data);

      // Si des étudiants sont inscrits, mettre à jour le statut à "Annuler"
      if (response.data.length > 0) {
        // Mettre en place la logique pour gérer les étudiants inscrits ici, par exemple, ou afficher un message à l'utilisateur.
        console.log(
          'Des étudiants sont inscrits à cette session. La session ne peut pas être supprimée.',
        );
        setConfirmationMessage(
          'Suppréssion impossible, des étudiants sont inscrits à cette session',
        );
        setTimeout(() => {
          setConfirmationMessage('');
        }, 3000);
      } else {
        // Si aucun étudiant inscrit, supprimer la session en appelant l'API DELETE
        await api.delete(`/tutors/sessions/${sessionId}`);

        setConfirmationMessage('Session supprimé avec succès !');
        setTimeout(() => {
          setConfirmationMessage('');
        }, 3000);
        // Mettre à jour l'état tutorSessions localement
        setTutorSessions(
          tutorSessions.filter((session) => session.id !== sessionId),
        );
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleCreateSession = () => {
    setIsCreating(true);
  };

  const handleCancelCreate = () => {
    setIsCreating(false);
  };

  if (isLoading) {
    return <Typography>Loading</Typography>;
  }

  return (
    <Box className={classes.cardContainer}>
      <Box
        display="flex"
        flexDirection="column"
        gap="1rem"
        width="100%"
        textAlign="center"
        padding="10px"
      >
        {isCreating ? (
          <CreateSession onCancel={handleCancelCreate} />
        ) : tutorSessions.length === 0 ? (
          <Box display="flex" justifyContent="center">
            <Typography variant="h5" textAlign="center">
              Vous n'avez pas encore de session.
            </Typography>
            <NavLink to="/tutor-dashboard/create-session">
              <Button>Créer une session</Button>
            </NavLink>
          </Box>
        ) : (
          <NavLink to="/tutor-dashboard/create-session">
            <Button>Novelle session</Button>
          </NavLink>
        )}
      </Box>

      {tutorSessions.map((session) => (
        <Box padding="10px" key={session.id}>
          <TutorSessionCard
            session={session}
            sessionId={session.id}
            onDelete={handleDeleteSession}
            setTutorSessions={setTutorSessions}
            registeredStudents={registeredStudents}
          />
        </Box>
      ))}

      {/* Affichage du message de confirmation */}
      {confirmationMessage && (
        <Box className={classes.confirmationMessage}>
          <Typography variant="body1">{confirmationMessage}</Typography>
        </Box>
      )}
    </Box>
  );
}

export default Sessions;
