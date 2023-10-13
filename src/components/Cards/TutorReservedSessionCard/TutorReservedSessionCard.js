import { Box, Divider, Typography } from '@mui/material';
import React from 'react';
import Button from '../../Buttons/Button';
import useStyles from './Styles';
import api from '../../../services/api';

function TutorReservedSessionCard({
  session,
  buttonText = 'Annuler',
  onCancelClick,
}) {
  const { classes } = useStyles();

  const handleCancelClick = async () => {
    const sessionId = session.id;
    // console.log('sesionId :', sessionId);
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
      // alert('Sessions supprimé avec succès');
      window.location.reload();
    } catch (error) {
      console.error("Erreur lors de l'annulation de session :", error);
    }
  };
  // console.log(session.imageUrl);
  // console.log('session :', session);
  return (
    <Box className={classes.boxContent}>
      <Box>
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
            gap: '8px',
            marginTop: '1rem',
          }}
        >
          <Typography>Sujet : {session.name}</Typography>
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
      <Divider />
      <Box
        display="flex"
        justifyContent="space-between"
        flexDirection="row"
        width="100%"
        margin="1rem"
      >
        {/* <Button onClick={handleCancelClick}>Annuler</Button> */}

        <Button onClick={handleCancelClick}>{buttonText}</Button>

        <Typography component="div" variant="h5" color="green">
          ${session.price}
        </Typography>
      </Box>
    </Box>
  );
}

export default TutorReservedSessionCard;
