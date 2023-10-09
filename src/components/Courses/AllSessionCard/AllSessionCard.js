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

      localStorage.setItem(
        'reservationId',
        response.data.session.totoring_session_id,
      );

      console.log(
        'tutoring_sessionId : ',
        response.data.session.tutoring_session_id,
      );
      setButtonText('Annuler');
      // Après avoir effectué la réservation avec succès
      console.log('Reponse du serveur :', response.data);
    } catch (error) {
      console.error('Error lors de la réservation :', error);
    }
  };

  const handleCancelClick = async (sessionId) => {
    console.log('ID de session à annuler :', sessionId);
    try {
      const response = await api.post(
        '/students/cancel-session',
        {
          sessionId: session.tutoring_session_id,
        },
        {
          headers: {
            authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        },
      );
      console.log("réponse du serveur pour l'annulation :", response.data);
      setButtonText('Réserver');
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
              : handleCancelClick()
          }
        >
          {buttonText}
        </Button>

        <Typography component="div" variant="h5" color="green">
          ${session.price}
        </Typography>
      </Box>
    </Box>
  );
}

export default AllSessionCard;
