import { Typography, Box, Container } from '@mui/material';
import React from 'react';
import useStyles from './style';

function WhyBecomeTutor() {
  const { classes } = useStyles();
  return (
    <Container className={classes.container}>
      <Box>
        <Typography className={classes.boxes} variant="h5">
          Définissez votre tarif
        </Typography>
        <Typography>
          Choisissez votre tarif horaire et modifier le à tout moment. Les
          professeurs d'anglais prennent en moyenne 15 à 20€ de l'heure.
        </Typography>
      </Box>
      <Box>
        <Typography variant="h5" className={classes.boxes}>
          Enseignez où vous voulez
        </Typography>
        <Typography>
          Gérez votre emploi du temps.Donnez autant de cours que vous voulez, à
          votre rythme. C'est vous qui choisssez.
        </Typography>
      </Box>
      <Box>
        <Typography variant="h5" className={classes.boxes}>
          Développez vos compétences
        </Typography>
        <Typography>
          Participez à des wébinaires et montez en compétences. Notre équipe
          vous aidera à grandir sur le plan proféssionnel.
        </Typography>
      </Box>
    </Container>
  );
}

export default WhyBecomeTutor;
