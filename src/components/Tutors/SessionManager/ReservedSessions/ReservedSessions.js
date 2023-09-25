import { Box, Stack, Typography } from '@mui/material';
import React from 'react';
import TutorReservedSessionCard from '../../../Cards/TutorReservedSessionCard';

function ReservedSessions({ sessionData }) {
  console.log('sesssionData : ', sessionData);
  return (
    <Box minHeight="100vh" paddingTop={15}>
      <Typography variant="body1">
        Sessions de tutorat réservées par les étudiants
      </Typography>
      <Box display="flex" gap="1rem">
        {sessionData.map((session, sessionIndex) => (
          <Box
            key={sessionIndex}
            display="flex"
            flexDirection="column"
            padding="1.5rem"
            borderRadius="5px"
            boxShadow="1px 1px 5px #FFA500"
          >
            <TutorReservedSessionCard session={session} />
            {session.students && session.students.length > 0 ? (
              <Stack paddingLeft="1.6rem">
                <Typography variant="h6">Étudiants inscrits :</Typography>
                {session.students.map((student, studentIndex) => (
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      flexDirection: 'row',
                      marginBottom: '10px',
                      marginRight: '20px',
                      padding: '10px',
                      textAlign: 'center',
                      borderRadius: '15px',
                      boxShadow: '1px 1px 3px #FFA500',
                    }}
                  >
                    <Box display="flex" alignItems="center">
                      <Typography key={studentIndex} bord>
                        {student.first_name} {student.last_name}
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        display: 'block',
                        flexDirection: 'column',
                        alignItems: 'center',
                        backgroundImage: `url(http://localhost:3000/images/${student.imageUrl})`,
                        backgroundSize: '100%',
                        backgroundRepeat: 'no-repeat',
                        width: '24%',
                        height: '80px',
                        borderRadius: '50%',
                        pl: 1,
                        pb: 1,
                      }}
                    ></Box>
                  </Box>
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
