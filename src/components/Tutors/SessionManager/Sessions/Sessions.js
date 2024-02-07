import React, { useState, useEffect } from 'react';
import { Box, CircularProgress, Typography } from '@mui/material';
import TutorSessionCard from '../../../Cards/TutorSessionCard/TutorSessionsCard';
import { NavLink } from 'react-router-dom';
import Button from '../../../Buttons/Button';
import api from '../../../../services/api';
import useStyles from './style';
import CreateSession from '../CreateSession';

function Sessions() {
  const { classes } = useStyles();
  const [tutorSessions, setTutorSessions] = useState(null);
  const [isCreating, setIsCreating] = useState(false);
  const [studentList, setStudentList] = useState([]);
  const [confirmationMessage, setConfirmationMessage] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchTutorSessions = async () => {
      try {
        const response = await api.get('/tutors/sessions');

        setTutorSessions(response.data.sessions);
        console.log('sessions in sessions : ', response.data.sessions);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
      }
    };

    fetchTutorSessions();
  }, []);

  const fetchStudentsForSession = async (sessionId) => {
    try {
      const response = await api.get(`/tutors/sessions/${sessionId}/students`);
      setStudentList(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDeleteSession = async (sessionId) => {
    try {
      // Si des étudiants sont inscrits, mettre à jour le statut à "Annuler"
      if (studentList.length > 0) {
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
      }

      setConfirmationMessage('Session supprimé avec succès !');
      setTimeout(() => {
        setConfirmationMessage('');
      }, 3000);
      // Mettre à jour l'état tutorSessions localement
      if (tutorSessions) {
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
    console.log('handleCancelCreate is called');
    setIsCreating(false);
  };
  // if (isLoadingStudentList || tutorSessions === null) {
  //   return <Typography>Loading</Typography>;
  // }
  if (isLoading) {
    return <CircularProgress />;
  }
  return (
    <Box className={classes.SessionsContainer}>
      {isCreating ? (
        <CreateSession />
      ) : (
        tutorSessions &&
        tutorSessions.length === 0 && (
          <Box display="flex" justifyContent="center">
            <Typography variant="h5" textAlign="center">
              Vous n'avez pas encore de session.
            </Typography>
            <NavLink to="/tutor-dashboard/create-session">
              <Button>Créer une session</Button>
            </NavLink>
          </Box>
        )
      )}

      <Box display="flex" flexDirection="column" width="100%" gap="10px">
        <NavLink to="/tutor-dashboard/create-session">
          <Button onClick={handleCreateSession}>Nouvelle session</Button>
        </NavLink>
        <Box
          display="flex"
          justifyContent="center"
          gap="1.5rem"
          width="100%"
          flexWrap="wrap"
        >
          {tutorSessions &&
            tutorSessions.map((session) => (
              <TutorSessionCard
                session={session}
                key={session.id}
                sessionId={session.id}
                onDelete={handleDeleteSession}
                setTutorSessions={setTutorSessions}
                studentList={studentList}
              />
            ))}
        </Box>
      </Box>
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
