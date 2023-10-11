import { Box, Typography } from '@mui/material';
import React, { useState } from 'react';
import Button from '../../Buttons/Button';
import { useStyles } from './Styles/AllSessionCard.styles';
import api from '../../../services/api';
// import { useNavigate } from 'react-router-dom';

function AllSessionCard({ session }) {
  // const navigate = useNavigate();
  const { classes } = useStyles();
  const [buttonText, setButtonText] = useState('Réserver');
  const [confirmationMessage, setConfirmationMessage] = useState('');

  const handleReservationClick = async () => {
    try {
      const reservationData = {
        student_id: localStorage.getItem('userId'),
        tutoring_session_id: session.id, // ID de la session
        date: session.date,
        start_time: session.start_time,
        end_time: session.end_time,
        subject: session.subject_id,
        price: session.price,
        status: 'Pending',
      };

      const response = await api.post(
        '/students/book-session',
        reservationData,
        {
          headers: {
            authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        },
      );
      localStorage.setItem('reservationId', session.id);

      setButtonText('Annuler');
      // message de succès
      setConfirmationMessage('Séssion réservée avec succès !');
      setTimeout(() => {
        setConfirmationMessage('');
      }, 2000);
      console.log('Reponse du serveur :', response.data);
    } catch (error) {
      console.error('Error lors de la réservation :', error);
    }
  };

  const handleCancelSession = async (sessionId) => {
    try {
      const response = await api.post(
        '/students/cancel-reserved-session',
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
      setButtonText('Réserver');
      setConfirmationMessage('Réservation annulée avec succès !');
      setTimeout(() => {
        setConfirmationMessage('');
      }, 2000);
    } catch (error) {
      console.error("Erreur lors de l'anulation de la session :", error);
    }
  };

  return (
    <Box className={classes.boxContent}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          backgroundImage: `url(http://localhost:3000/images/${session.imageUrl})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          width: '100%',
          height: '77%',
          pl: 1,
          pb: 1,
        }}
      ></Box>
      <Box className={classes.paper}>
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '10px',
            width: '100%',
          }}
        >
          <Typography component="div" variant="h6" fontWeight="bold">
            {session.first_name}
          </Typography>
          <Typography component="div" variant="h6" fontWeight="bold">
            {session.last_name}{' '}
          </Typography>
        </Box>

        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            flexDirection: 'column',
            gap: '1rem',
            marginTop: '1.5rem',
          }}
        >
          <Typography>Date : {session.date}</Typography>
          <Typography>Début : {session.start_time}</Typography>
          <Typography>Fin :{session.end_time}</Typography>
          <Typography>Lieu : {session.location}</Typography>
        </Box>
      </Box>
      <Box>
        <Typography component="div" variant="h6">
          {session.subject_name}
        </Typography>
        <Typography component="div">{session.subject_description}</Typography>
      </Box>
      <Box
        display="flex"
        justifyContent="space-between"
        width="100%"
        margin="1rem"
      >
        {/* <Button onClick={handleCancelClick}>Annuler</Button> */}

        <Button
          onClick={() =>
            buttonText === 'Réserver'
              ? handleReservationClick()
              : handleCancelSession(session.id)
          }
        >
          {buttonText}
        </Button>

        <Typography component="div" variant="h5" color="green">
          ${session.price}
        </Typography>
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

export default AllSessionCard;
