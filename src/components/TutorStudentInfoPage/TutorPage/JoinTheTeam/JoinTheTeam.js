import { Typography, Container, Box, Button } from '@mui/material';
import React from 'react';
import useStyles from './style';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { Link } from 'react-router-dom';

function JoinTheTeam() {
  const { classes } = useStyles();
  return (
    <Container className={classes.container}>
      <Box>
        <Typography variant="h3">
          Rejoingnez l'équipe et devenez tuteur <br /> scolaire !
        </Typography>
      </Box>
      <Box>
        <Typography>
          Impressionnant, n'est ce pas ? Vous devez être impatient de postuler.
          C'est simple, cliquez sur "Postuler" pour commencer.
        </Typography>
      </Box>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        backgroundColor="orange"
        borderRadius="5px"
        width="130px"
        color="black"
        margin="auto"
      >
        <Button component={Link} to="/auth" sx={{ color: 'black' }}>
          Postuler
        </Button>
        <PlayArrowIcon />
      </Box>
    </Container>
  );
}

export default JoinTheTeam;
