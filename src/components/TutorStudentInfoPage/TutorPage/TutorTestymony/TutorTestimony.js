import { Button } from '@mui/base';
import { CardContent, Container, Typography } from '@mui/material';
import React from 'react';
import tutorPhoto from '../../../Assets/TutortestiPicture.webp';
import useStyles from '../style';

function TutorTestimony() {
  const { classes } = useStyles();
  return (
    <Container>
      <Box>
        <Box className={classes.textBox}>
          <Typography variant="h4">
            "Eduguide m'a permis de gagner ma vie tout en restant à la maison !
          </Typography>
          <Stack display="flex" justifyContent="center" alignItems="center">
            <Typography>Christine R.</Typography>
            <Typography>.</Typography>
            <Typography>Professeure de math.</Typography>
          </Stack>
          <Typography></Typography>
        </Box>

        <Box className={classes.imgBox}>
          <CardContent component="img" rsc={tutorPhoto}></CardContent>
        </Box>
      </Box>
      <Button>Devenir tuteur</Button>
    </Container>
  );
}

export default TutorTestimony;
