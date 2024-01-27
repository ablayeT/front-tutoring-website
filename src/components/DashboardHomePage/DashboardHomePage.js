import { React, useState } from 'react';
import {
  Box,
  CardMedia,
  Typography,
  Container,
  Divider,
  Button,
} from '@mui/material';
import imageTest from '../Assets/imagesTest.jpg';
import Sessions from '../Tutors/SessionManager/Sessions';
import Profile from '../Tutors/ProfileManager';

function DashboardHomePage() {
  const userType = localStorage.getItem('userType');
  console.log('userType in  DashboardHomePage: ', userType);
  const [showSessions, setShowSessions] = useState(false);
  const [showProfil, setShowProfil] = useState(false);

  const toggleSessions = () => {
    setShowSessions(!showSessions);
    setShowProfil(false);
  };
  const toggleProfil = () => {
    setShowProfil(!showProfil);
    setShowSessions(false);
  };

  return (
    <>
      {userType === 'Tutor' ? (
        <Box
          border="1px solid orange"
          display="flex"
          gap="2rem"
          padding="1rem"
          height="100vh"
          justifyContent="center"
        >
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

            <Container
              sx={{ display: 'flex', gap: '1rem', flexDirection: 'column' }}
            >
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
          </Box>

          <Box
            flex="3"
            border="1px solid lightgray"
            borderRadius="15px"
            padding="20px"
            margin="10px"
            overflow="auto" // Permet le défilement vertical
            maxHeight="100vh"
          >
            <Typography textAlign="center" variant="h6">
              Mes Prochaines sessions de formations
            </Typography>
            <Divider />
            <Box>{showSessions && <Sessions />}</Box>
            <Box>{showProfil && <Profile />}</Box>
          </Box>
        </Box>
      ) : (
        <Box>
          <Typography>Accueil tableau de bord de l'étudiant</Typography>
          <Typography paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus
            dolor purus non enim praesent elementum facilisis leo vel.
          </Typography>
          <Typography paragraph>
            Consequat mauris nunc congue nisi vitae suscipit. Fringilla est
            ullamcorper eget nulla facilisi etiam dignissim diam. Pulvinar
            elementum integer enim neque volutpat ac tincidunt. Ornare
            suspendisse sed nisi lacus sed viverra tellus. Purus sit amet
            volutpat consequat mauris. Elementum eu facilisis sed odio morbi. //
            ... Reste du contenu
          </Typography>
        </Box>
      )}
    </>
  );
}

export default DashboardHomePage;
