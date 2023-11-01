import React from 'react';
import { Box, Typography } from '@mui/material';

function DashboardHomePage() {
  const userType = localStorage.getItem('userType');
  console.log('userType in  DashboardHomePage: ', userType);

  return (
    <>
      {userType === 'Tutor' ? (
        <Box>
          <Typography>Accueil tableau de bord tuteur</Typography>
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
