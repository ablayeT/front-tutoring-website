import { Box, Typography } from '@mui/material';
import React from 'react';
import Button from '../../Buttons/Button';
import useStyles from '../../Courses/AllSessionCard/Styles';
import api from '../../../services/api';
// import { useNavigate } from 'react-router-dom';

function ReservedSessionCard({
  session,
  buttonText = 'Réserver',
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
      <Box
        sx={{
          backgroundImage: `url(http://localhost:3000/images/${session.imageUrl})`,
        }}
        className={classes.boxContentChild}
      ></Box>
      <Box className={classes.paper}>
        <Box className={classes.paperChildOne}>
          <Typography component="div" variant="h6" fontWeight="bold">
            {session.first_name}
          </Typography>
          <Typography component="div" variant="h6" fontWeight="bold">
            {session.last_name}{' '}
          </Typography>
        </Box>

        <Box className={classes.paperChildTwo}>
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
      <Box className={classes.buttonBox}>
        {/* <Button onClick={handleCancelClick}>Annuler</Button> */}

        <Button onClick={handleCancelClick}>{buttonText}</Button>

        <Typography component="div" variant="h5" color="green">
          ${session.price}
        </Typography>
      </Box>
    </Box>
  );
}

export default ReservedSessionCard;
