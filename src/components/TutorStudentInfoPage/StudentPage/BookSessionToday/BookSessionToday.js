import {
  Stack,
  Button,
  Box,
  Typography,
  Container,
  Paper,
} from '@mui/material';
import React from 'react';
import useStyles from './style';

function BookSessionToday() {
  const { classes } = useStyles();
  return (
    <Container className={classes.container}>
      <Box>
        <Typography variant="h4">Réserver une session aujourd'hui!</Typography>
      </Box>
      <Box>
        <Typography>
          Débloquez votre potentiel dès maintenant : réservez une session de
          mentorat personnalisée et progressez vers vos objectifs. <br />
          "Prêt à franchir un nouveau cap dans votre parcours ? Notre équipe de
          mentors est là pour vous accompagner vers la réussite.
        </Typography>
      </Box>
      <Box className={classes.butonBox}>
        <Paper>
          <Button className={classes.viewSessionsButton}>
            Voir les sessions
          </Button>
        </Paper>
        <Paper>
          <Button className={classes.contactButton}>Nous contacter</Button>
        </Paper>
      </Box>
    </Container>
  );
}

export default BookSessionToday;
