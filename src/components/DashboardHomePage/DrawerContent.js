import React from 'react';
import {
  Box,
  Container,
  CardMedia,
  Divider,
  Button,
  Typography,
} from '@mui/material';
import imageTest from '../Assets/imagesTest.jpg';
import Sessions from '../Tutors/SessionManager/Sessions';
import Profile from '../Tutors/ProfileManager';

function DrawerContent({
  toggleProfil,
  toggleSessions,
  showSessions,
  showProfil,
}) {
  return (
    <Box
      flex="1"
      border="1px solid lightgray"
      borderRadius="15px"
      display="flex"
      flexDirection="column"
      overflow="scroll"
      alignItems="center"
      gap="3rem"
      minWidth="250px"
      margin="10px"
      padding="15px"
    >
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '1rem',
        }}
      >
        <CardMedia
          component="img"
          src={imageTest}
          sx={{
            border: '1px solid blue',
            borderRadius: '50%',
            height: '50px',
            width: '50px',
          }}
        ></CardMedia>

        <Box flex="1" textAlign="center">
          <Typography variant="h5">Tutor name</Typography>
          <Typography>Tutor address</Typography>
        </Box>
      </Container>

      <Container sx={{ display: 'flex', gap: '1rem', flexDirection: 'column' }}>
        <Box display="flex" gap="10px" flexDirection="column">
          <Typography variant="h6">Tableau de bord</Typography>
          <Divider />

          <Button onClick={toggleProfil}>Profil</Button>
          <Button onClick={toggleSessions}>mes sessions</Button>
        </Box>
        <Box display="flex" gap="10px" flexDirection="column">
          <Typography variant="h6">Mes Compétences</Typography>
          <Divider />
          <Typography> Compétence 2</Typography>
          <Typography>Compétence 1</Typography>
        </Box>
        <Box display="flex" gap="10px" flexDirection="column">
          <Typography variant="h6">Matières enseignées</Typography>
          <Divider />
          <Typography>Matière 1</Typography>
          <Typography>Matière 2</Typography>
        </Box>
      </Container>
      <Button sx={{ border: '1px solid' }}>Modifier</Button>
      {/* {showSessions && <Sessions />}
      {showProfil && <Profile />} */}
    </Box>
  );
}

export default DrawerContent;
