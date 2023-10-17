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
import { React, useState, useEffect } from 'react';
import MuiButton from '../../Buttons/Button';
import api from '../../../services/api/index.js';
import sessionCardFields from './SessionCardFields';
import useStyles from './style';

function TutorSessionsCard({ session, sessionId, onDelete, setTutorSessions }) {
  const { classes } = useStyles();
  const [editMode, setEditMode] = useState(false);
  const [editedSession, setEditedSession] = useState(session);

  useEffect(() => {
    setEditedSession(session); // Mettre à jour editedSession lorsque session change
  }, [session]); // Utiliser un effet pour surveiller les changements dans la session

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEditedSession({
      ...editedSession,
      [name]: value,
    });
  };

  // const handleDeleteSession = async (sessionId) => {
  //   try {
  //     // Vérifier ici si des étudiants sont inscrits à la session, si oui, mettez à jour le statut à "Annuler" au lieu de supprimer la session.

  //     // Mise à jour du statut à "Annuler" si des étudiants sont inscrits
  //     if (/* vérification si des étudiants sont inscrits */) {
  //       // Effectuez une requête pour mettre à jour le statut de la session à "Annuler"

  //       // Mettez à jour l'état tutorSessions localement
  //       setTutorSessions((prevSessions) =>
  //         prevSessions.map((s) =>
  //           s.id === sessionId ? { ...s, status: 'Annuler' } : s
  //         )
  //       );

  //       return;
  //     }

  //     // Si aucun étudiant inscrit, supprimez la session en appelant la fonction onDelete passée en tant que prop
  //     onDelete(sessionId);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  const handleSaveClick = async (event) => {
    event.preventDefault();
    setEditMode(false);
    try {
      const formattedDate = new Date(editedSession.date)
        .toISOString()
        .split('T')[0];
      const updatedSession = {
        ...editedSession,
        date: formattedDate, // Mettez à jour la propriété date avec la date formatée
      };
      // Envoie de la requête pour la mise à jour de la session
      await api.put(`/tutors/sessions/${sessionId}`, updatedSession, {
        headers: {
          authorization: `Bearer ${localStorage.getItem('token')}`,
          'Content-type': 'application/json',
        },
      });
      console.log('Session mise à jour avec succès');

      // Mettre à jour l'état `tutorSessions` dans le composant `Sessions`
      setTutorSessions((prevSessions) =>
        prevSessions.map((session) =>
          session.id === sessionId ? updatedSession : session,
        ),
      );
    } catch (error) {
      console.error('Erreur lors de la mise à jour de la session', error);
    }
  };

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
                  marginTop="2rem"
                >
                  <MuiButton type="submit">Sauvegarder</MuiButton>
                  <MuiButton onClick={() => setEditMode(false)}>
                    Annuler
                  </MuiButton>
                </Box>
              </FormControl>
            </form>
          </Box>
        ) : (
          <Box>
            {sessionCardFields.map((field) => (
              <Typography key={field.name} className={classes.text}>
                {field.label}: {session[field.name]}
              </Typography>
            ))}
            <Box display="flex" gap="20px">
              <MuiButton onClick={() => setEditMode(true)}>Modifier</MuiButton>
              <MuiButton onClick={() => onDelete(session.id)}>
                Supprimer
              </MuiButton>
            </Box>
          </Box>
        )}
      </CardContent>
    </Card>
  );
}

export default TutorSessionsCard;

// function TutorSessionsCard({ session, sessionId, onDelete }) {
//   const { classes } = useStyles();

//   const [editMode, setEditMode] = useState(false); // pour gerer el mode de modification
//   const [editedSession, setEditedSession] = useState(session);

//   const token = localStorage.getItem('token');
//   console.log('token in tutorSessionCard :  ', token);

//   const handleEditClick = () => {
//     console.log('handleEditClick');
//     setEditMode(true);
//   };

//   const handleInputChange = (event) => {
//     const { name, value } = event.target;
//     setEditedSession({
//       ...editedSession,
//       [name]: value,
//     });
//   };

//   const handleSaveClick = async () => {
//     setEditMode(false);
//     try {
//       //Envoie de requête pour la mise à jour de la session
//       await api.put(`/tutors/sessions/${sessionId}`, editedSession, {
//         headers: {
//           authorization: `Bearer ${localStorage.getItem('token')}`,
//           'Content-type': 'application/json',
//         },
//       });
//       console.log('Session mise à jour avec succès');
//     } catch (error) {
//       console.error('Erreur lors de la mise à jour de la session', error);
//     }
//   };

//   const handleCancelEdit = () => {
//     setEditMode(false);
//     setEditedSession(session);
//   };

//   // console.log('editedSession', editedSession);

//   return (
//     <Card className={classes.card}>
//       <CardContent>
//         {editMode ? (
//           <Box
//             display="flex"
//             flexDirection="column"
//             justifyContent="center"
//             margin="auto"
//             borderRadius="10px"
//             padding="15px"
//           >
//             <Typography variant="h4" marginBottom="15px">
//               Mise à jour de la session
//             </Typography>
//             <form onSubmit={handleSaveClick}>
//               <FormControl
//                 sx={{
//                   display: 'flex',
//                   width: '95%',
//                   gap: '20px',
//                   flexDirection: 'column',
//                   padding: '10px',
//                   borderRadius: '15px',
//                 }}
//               >
//                 <Stack>
//                   <FormLabel>Date</FormLabel>
//                   <TextField
//                     type="date"
//                     name="date"
//                     value={editedSession.date}
//                     onChange={handleInputChange}
//                     required
//                   />
//                 </Stack>
//                 <Stack>
//                   <FormLabel>Heure de début</FormLabel>
//                   <TextField
//                     type="time"
//                     name="start_time"
//                     value={editedSession.start_time}
//                     onChange={handleInputChange}
//                     required
//                   />
//                 </Stack>
//                 <Stack>
//                   <FormLabel>Heure de fin</FormLabel>
//                   <TextField
//                     type="time"
//                     name="end_time"
//                     value={editedSession.end_time}
//                     onChange={handleInputChange}
//                     required
//                     variant="outlined"
//                   />
//                 </Stack>
//                 <Stack>
//                   <FormLabel>Emplacement</FormLabel>
//                   <TextField
//                     type="text"
//                     name="location"
//                     value={editedSession.location}
//                     onChange={handleInputChange}
//                     required
//                   />
//                 </Stack>
//                 <Stack>
//                   <FormLabel>Prix</FormLabel>
//                   <TextField
//                     type="number"
//                     name="price"
//                     value={editedSession.price}
//                     onChange={handleInputChange}
//                     required
//                   />
//                 </Stack>

//                 <Box
//                   display="flex"
//                   justifyContent="center"
//                   gap="1rem"
//                   marginTop="2rem"
//                 >
//                   <MuiButton onClick={handleSaveClick}>Sauvegarder</MuiButton>
//                   <MuiButton onClick={handleCancelEdit}>Annuler</MuiButton>
//                 </Box>
//               </FormControl>
//             </form>
//           </Box>
//         ) : (
//           <Box>
//             <Typography className={classes.title}>
//               Nom :{session.name}{' '}
//             </Typography>
//             <Typography className={classes.text}>
//               Date :{session.date}{' '}
//             </Typography>
//             <Typography className={classes.text}>
//               Début: {session.start_time}
//             </Typography>
//             <Typography className={classes.text}>
//               Fin: {session.end_time}
//             </Typography>
//             <Typography className={classes.text}>
//               lieu :{session.location}
//             </Typography>
//             <Typography className={classes.text}>
//               Prix {session.price}
//             </Typography>
//             <Typography className={classes.text}>
//               Description :{session.description}
//             </Typography>
//             <Box display="flex" gap="20px">
//               <MuiButton onClick={handleEditClick}>Modifier</MuiButton>
//               <MuiButton onClick={() => onDelete(session.id)}>
//                 Supprimer
//               </MuiButton>
//             </Box>
//           </Box>
//         )}
//       </CardContent>
//     </Card>
//   );
// }

// export default TutorSessionsCard;
