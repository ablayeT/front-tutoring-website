import {
  Box,
  Card,
  CardContent,
  FormControl,
  FormLabel,
  TextField,
  Stack,
  Typography,
} from '@mui/material';
import { React, useState } from 'react';
import { makeStyles } from 'tss-react/mui';
import MuiButton from '../Buttons/Button';
import api from '../../services/axiosInterceptor';

const useStyles = makeStyles()((theme) => {
  return {
    card: {
      backgroundColor: '#F5F5F5',
      borderRadius: '8px',
      boxShadow: '1px 1px 3px #FFA500',
      padding: '16px',
      marginBottom: '16px',
    },
    title: {
      fontSize: '1.2rem',
      fontWeight: 'bold',
      marginBottom: '8px',
    },
    text: {
      marginBottom: '8px',
    },
  };
});

function TutorSessionsCard({ session, sessionId, onDelete }) {
  const { classes } = useStyles();

  const [editMode, setEditMode] = useState(false); // our gerer el mode de modification
  const [editedSession, setEditedSession] = useState(session);

  // const tutorId = localStorage.getItem('tutor_id');
  // console.log('tutorId in tutorSessionCard :  ',tutorId);

  const token = localStorage.getItem('token');
  console.log('token in tutorSessionCard :  ', token);

  const handleEditClick = () => {
    setEditMode(true);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEditedSession({
      ...editedSession,
      [name]: value,
    });
  };

  const handleSaveClick = async () => {
    setEditMode(false);
    try {
      //Envoie de requête pour la mise à jour de la session
      await api.put(`/tutors/sessions/${sessionId}`, editedSession, {
        headers: {
          authorization: `Bearer ${localStorage.getItem('token')}`,
          'Content-type': 'application/json',
        },
      });
      console.log('Session mise à jour avec succès');
    } catch (error) {
      console.error('Erreur lors de la mise à jour de la session', error);
    }
  };

  console.log('editedSession', editedSession);

  return (
    <Card className={classes.card}>
      <CardContent>
        {editMode ? (
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            margin="auto"
            borderRadius="10px"
            padding="15px"
          >
            <Typography variant="h4" marginBottom="15px">
              Mise à jour de la session
            </Typography>
            <form onSubmit={handleSaveClick}>
              <FormControl
                sx={{
                  display: 'flex',
                  width: '95%',
                  gap: '20px',
                  flexDirection: 'column',
                  padding: '10px',
                  borderRadius: '15px',
                }}
              >
                <Stack>
                  <FormLabel>Date</FormLabel>
                  <TextField
                    type="date"
                    name="date"
                    value={editedSession.date}
                    onChange={handleInputChange}
                    required
                  />
                </Stack>
                <Stack>
                  <FormLabel>Heure de début</FormLabel>
                  <TextField
                    type="time"
                    name="start_time"
                    value={editedSession.start_time}
                    onChange={handleInputChange}
                    required
                  />
                </Stack>
                <Stack>
                  <FormLabel>Heure de fin</FormLabel>
                  <TextField
                    type="time"
                    name="end_time"
                    value={editedSession.end_time}
                    onChange={handleInputChange}
                    required
                    variant="outlined"
                  />
                </Stack>
                <Stack>
                  <FormLabel>Emplacement</FormLabel>
                  <TextField
                    type="text"
                    name="location"
                    value={editedSession.location}
                    onChange={handleInputChange}
                    required
                  />
                </Stack>
                <Stack>
                  <FormLabel>Prix</FormLabel>
                  <TextField
                    type="number"
                    name="price"
                    value={editedSession.price}
                    onChange={handleInputChange}
                    required
                  />
                </Stack>

                <Box display="flex" justifyContent="center" marginTop="2rem">
                  <MuiButton onClick={handleSaveClick}>Sauvegarder</MuiButton>
                </Box>
              </FormControl>
            </form>
          </Box>
        ) : (
          <Stack>
            <Typography className={classes.title}>
              Nom :{session.name}{' '}
            </Typography>
            <Typography className={classes.text}>
              Date :{session.date}{' '}
            </Typography>
            <Typography className={classes.text}>
              Début: {session.start_time}
            </Typography>
            <Typography className={classes.text}>
              Fin: {session.end_time}
            </Typography>
            <Typography className={classes.text}>
              lieu :{session.location}
            </Typography>
            <Typography className={classes.text}>
              Prix {session.price}
            </Typography>
            <Typography className={classes.text}>
              Description :{session.description}
            </Typography>
            <Box display="flex" gap="20px">
              <MuiButton onClick={handleEditClick}>Modifier</MuiButton>
              <MuiButton onClick={() => onDelete(session.id)}>
                Supprimer
              </MuiButton>
            </Box>
          </Stack>
        )}
      </CardContent>
    </Card>
  );
}

export default TutorSessionsCard;
