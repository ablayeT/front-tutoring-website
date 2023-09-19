import { Box, Stack, Typography } from '@mui/material';
import React from 'react';
// import TutorSessionsCard from '../../../Cards/TutorSessionCard/TutorSessionsCard';
import ReservedSessionCard from '../../../Cards/ReservedSessionCard';
import { useStyles } from './Styles/ReservedSession.style';

function ReservedSessions({ sessionData }) {
  const { classes } = useStyles();
  console.log('sesssionData : ', sessionData);
  console.log('sesssionData.students:', sessionData.students);

  return (
    <Box minHeight="100vh" paddingTop={15}>
      <Typography variant="body1">
        Sessions de tutorat réservées par les étudiants
      </Typography>
      <Box display="flex" gap="1rem">
        {sessionData.map((session, sessionIndex) => (
          <Box
            key={sessionIndex}
            // display="flex"
            // flexDirection="column"
            // padding="1.5rem"
            // borderRadius="5px"
            // boxShadow="1px 1px 5px #FFA500"
            className={classes.reservedSession}
          >
            <ReservedSessionCard session={session} />

            {session.students && session.students.length > 0 ? (
              <Stack paddingLeft="1.6rem">
                <Typography variant="h6">Étudiants inscrits :</Typography>
                {session.students.map((student, studentIndex) => (
                  <Typography key={studentIndex}>
                    {student.first_name} {student.last_name}
                  </Typography>
                ))}
              </Stack>
            ) : (
              <Typography>
                Aucun étudiant inscrit pour cette session{' '}
              </Typography>
            )}
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default ReservedSessions;

// <li key={session.id}>
//   <h2>{session.name}</h2>
//   <p>Description : {session.description}</p>
//   <p>Date : {session.date}</p>
//   <p>Heure de début : {session.start_time}</p>
//   <p>Heure de fin : {session.end_time}</p>
//   <p>Lieu : {session.location}</p>
//   <p>Prix : {session.price}</p>
//   <h3>Étudiants inscrits :</h3>
//   <ul>
//     {session.students.map((student, index) => (
//       <li key={index}>
//         {student.first_name} {student.last_name}
//       </li>
//     ))}
//   </ul>
// </li>;
