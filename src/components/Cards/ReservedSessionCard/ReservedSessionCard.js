import { Box, Typography } from '@mui/material';
import React from 'react';
import Button from '../../Buttons/Button';
import useStyles from './Styles';
import api from '../../../services/api';
// import { useNavigate } from 'react-router-dom';

function ReservedSessionCard({
  session,
  buttonText = 'Annuler',
  onCancelClick,
}) {
  const { classes } = useStyles();

  const handleCancelClick = async () => {
    const sessionId = session.id;
    console.log('sesionId :', sessionId);
    try {
      console.log(sessionId);
      const response = await api.post(
        '/students/cancel-session',
        {
          sessionId: sessionId,
        },
        {
          headers: {
            authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        },
      );
      console.log(response.data);
      alert('Sessions supprimé avec succès');
      window.location.reload();
    } catch (error) {
      console.error("Erreur lors de l'annulation de session :", error);
    }
  };

  return (
    <Box className={classes.boxContent}>
      <Box>
        <Box>
          <Typography component="div" variant="h6" fontWeight="bold">
            {session.name}
          </Typography>
        </Box>

        <Box>
          <Typography>Date : {session.date}</Typography>
          <Typography>Début : {session.start_time}</Typography>
          <Typography>Fin :{session.end_time}</Typography>
          <Typography>Lieu : {session.location}</Typography>
        </Box>
      </Box>

      <Box>
        <Button onClick={handleCancelClick}>{buttonText}</Button>
      </Box>
    </Box>
  );
}

export default ReservedSessionCard;
