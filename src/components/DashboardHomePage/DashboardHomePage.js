import { React, useState, useEffect } from 'react';
import {
  Box,
  CardMedia,
  Typography,
  Container,
  Divider,
  Button,
  Hidden,
  Drawer,
  Stack,
  Paper,
} from '@mui/material';
import imageTest from '../Assets/imagesTest.jpg';
import Sessions from '../Tutors/SessionManager/Sessions';
import Profile from '../Tutors/ProfileManager';
import useStyles from './style';
import DrawerContent from './DrawerContent';
import MenuIcon from '@mui/icons-material/Menu';

function DashboardHomePage() {
  const { classes } = useStyles();
  const userType = localStorage.getItem('userType');
  console.log('userType in  DashboardHomePage: ', userType);
  const [showSessions, setShowSessions] = useState(false);
  const [showProfil, setShowProfil] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const toggleSessions = () => {
    setShowProfil(false);
    setShowSessions(true);
  };
  const toggleProfil = () => {
    setShowSessions(false);
    setShowProfil(true);
  };
  useEffect(() => {
    // Au chargement initial de la page, afficher Sessions
    setShowSessions(true);
  }, []); // Le tableau vide en second paramètre signifie que cet effet ne s'exécutera qu'une seule fois, au montage du composant

  return (
    <>
      {userType === 'Tutor' ? (
        <Box className={classes.dashboard}>
          <Hidden mdUp>
            <Box>
              <Button onClick={toggleDrawer}>
                <MenuIcon sx={{ color: '#222' }} />
              </Button>
            </Box>
          </Hidden>
          <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer}>
            <DrawerContent
              toggleProfil={toggleProfil}
              toggleSessions={toggleSessions}
              showSessions={showSessions}
              showProfil={showProfil}
            />
          </Drawer>

          <Hidden mdDown>
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
          </Hidden>

          <Box
            flex="3"
            overflow="auto" // Permet le défilement vertical
            maxHeight="100vh"
          >
            {showSessions && (
              <Stack marginBottom="10px">
                <Typography textAlign="center" variant="h6">
                  Mes Prochaines sessions de formations
                </Typography>
                <Divider />
              </Stack>
            )}

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
