import React, { useState, useEffect, useRef } from 'react';
import MuiButton from '../../Buttons/Button';
import api from '../../../services/api/index.js';
import sessionCardFields from './SessionCardFields';
import testPhoto from '../../Assets/photoTutor4.jpg';
import {
  Box,
  FormControl,
  FormLabel,
  TextField,
  Stack,
  Typography,
  MenuItem,
  Accordion,
  AccordionDetails,
  Menu,
  Container,
} from '@mui/material';
import useStyles from './style';

function TutorSessionsCard({ session, sessionId, onDelete }) {
  const { classes } = useStyles();
  const [editMode, setEditMode] = useState(false);
  const [editedSession, setEditedSession] = useState(session);
  const [studentList, setStudentList] = useState([]);
  const [confirmationMessage, setConfirmationMessage] = useState('');
  const [anchorElement, setAnchorElement] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const anchorRef = useRef(null);

  useEffect(() => {
    setEditedSession(session);
  }, [session]);

  useEffect(() => {
    const fetchRegisteredStudents = async () => {
      try {
        const response = await api.get(
          `/tutors/sessions/${sessionId}/students`,
        );
        setStudentList(response.data);
      } catch (error) {
        console.error(
          'Erreur lors de la récupération des étudiants inscrits :',
          error,
        );
      }
    };

    fetchRegisteredStudents();
  }, [sessionId]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEditedSession({
      ...editedSession,
      [name]: value,
    });
  };

  const handleSaveClick = async (event) => {
    event.preventDefault();
    setEditMode(false);
    try {
      const formattedDate = new Date(editedSession.date);
      const year = formattedDate.getFullYear();
      const month = (formattedDate.getMonth() + 1).toString().padStart(2, '0');
      const day = formattedDate.getDate().toString().padStart(2, '0');
      const formattedDateString = `${year}-${month}-${day}`;
      const updatedSession = {
        ...editedSession,
        date: formattedDateString,
      };

      await api.put(`/tutors/sessions/${sessionId}`, updatedSession);

      // Mettre à jour l'état du composant parent ou de l'endroit ou sont stock sessions
      // Exemple : onSessionUpdate(updatedSession);
    } catch (error) {
      console.error('Erreur lors de la mise à jour de la session', error);
    }
  };

  const handleConfirmatonMessage = () => {
    setConfirmationMessage(
      'Suppression impossible, des étudiants sont inscrits à cette session',
    );
    setTimeout(() => {
      setConfirmationMessage('');
    }, 3000);
  };

  const handleClick = (event) => {
    setAnchorElement(event.currentTarget);
    setIsMenuOpen(true);
  };

  const handleClose = () => {
    setAnchorElement(null);
    setIsMenuOpen(false);
  };

  return (
    <Box className={classes.BoxContainer}>
      {/* Mode edition*/}
      {editMode && (
        <Box
          sx={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.6)', // Fond gris semi-transparent
            zIndex: 1000,
          }}
        />
      )}

      <Box position="relative">
        {editMode && (
          <Box
            position="fixed"
            top="0"
            width="100%"
            left="0"
            paddingTop="3rem"
            display="flex"
            alignItems="center"
            minHeight="100vh"
            border="1px solid red"
            justifyContent="center"
            transform="translate(-50%, -50%)"
            zIndex="1001"
          >
            <Box
              borderRadius="10px"
              padding="4rem 0 4rem 0"
              marginBottom="3rem"
              boxShadow="0px 4px 10px rgba(0, 0, 0, 0.1)"
              className={classes.editModeChild}
            >
              <form onSubmit={handleSaveClick} className={classes.form}>
                <Typography variant="h4">Mise à jour de la session</Typography>
                <FormControl
                  sx={{
                    display: 'flex',
                    width: '95%',
                    gap: '10px',

                    flexDirection: 'column',
                    padding: '10px',
                    borderRadius: '15px',
                  }}
                >
                  {sessionCardFields.map((field) => (
                    <Stack key={field.name}>
                      <FormLabel>{field.label}</FormLabel>
                      <TextField
                        type={field.type}
                        name={field.name}
                        value={editedSession[field.name]}
                        onChange={handleInputChange}
                        required
                      />
                    </Stack>
                  ))}

                  <Box
                    display="flex"
                    justifyContent="center"
                    gap="1rem"
                    marginTop="10px"
                  >
                    <MuiButton type="submit">Sauvegarder</MuiButton>
                    <MuiButton onClick={() => setEditMode(false)}>
                      Annuler
                    </MuiButton>
                  </Box>
                </FormControl>
              </form>
            </Box>
          </Box>
        )}

        {/* contenu de la session*/}
        <Box className={classes.sessionInfos}>
          <Box display="flex" flexDirection="column" gap="10px" flex="1">
            <Stack
              className={classes.photo}
              component="img"
              src={testPhoto}
              alt="photoDuTuteur"
            ></Stack>
            <Box display="flex" justifyContent="space-between">
              <Typography>Nom :{session.name}</Typography>
              <Typography>Prix :{session.price} € </Typography>
            </Box>
          </Box>

          <Box
            justifyContent="space-between"
            display="flex"
            flex="2"
            flexDirection="column"
          >
            <Box flex="2" display="flex" flexDirection="column" gap="10px">
              <Typography textAlign="right" margin="5px">
                Date : {session.date}
              </Typography>
              <Box display="flex" justifyContent="space-between" margin="5px">
                <Stack>
                  <Typography>Lieu :{session.location}</Typography>
                </Stack>
                <Stack>
                  <Typography>Début :{session.end_time}</Typography>
                  <Typography>Fin : {session.start_time}</Typography>
                </Stack>
              </Box>
            </Box>
            <Box flex="1" padding="5px">
              <Typography>Description :{session.description}</Typography>
            </Box>
          </Box>
        </Box>

        {/* Affichage du message de confirmation */}
        {confirmationMessage && (
          <Box className={classes.confirmationMessage}>
            <Typography variant="body1">{confirmationMessage}</Typography>
          </Box>
        )}

        <Accordion className={classes.accordion}>
          <AccordionDetails
            ref={anchorRef}
            aria-controls="simple-menu"
            aria-haspopup="true"
            onClick={handleClick}
          >
            <Typography>Étudiants inscrits :</Typography>
            <Typography
              className={
                studentList.length > 0 ? classes.greenSpan : classes.orangeSpan
              }
            >
              {studentList.length}
            </Typography>
          </AccordionDetails>
          {studentList.length > 0 ? (
            <Menu
              id="simple-menu"
              anchorEl={anchorRef.current}
              open={isMenuOpen}
              onClose={handleClose}
            >
              {studentList.map((student) => (
                <MenuItem key={student.id} onClick={handleClose}>
                  {student.first_name}
                </MenuItem>
              ))}
            </Menu>
          ) : (
            <Typography>Aucun étudiant inscrit.</Typography>
          )}
        </Accordion>
        <Box display="flex" gap="20px" margin="10px">
          <MuiButton onClick={() => setEditMode(true)}>Modifier</MuiButton>
          {studentList.length > 0 ? (
            <MuiButton onClick={() => onDelete(session.id)}>Annuler</MuiButton>
          ) : (
            <MuiButton onClick={() => onDelete(session.id)}>
              Supprimer
            </MuiButton>
          )}
        </Box>
      </Box>
    </Box>
  );
}

export default TutorSessionsCard;
