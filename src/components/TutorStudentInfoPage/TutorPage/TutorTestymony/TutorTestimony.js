import { CardContent, Button, Typography, Box } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import tutorPhoto from '../../../Assets/TutortestiPicture.webp';
import useStyles from './style';

function TutorTestimony() {
  const { classes } = useStyles();
  return (
    <Box className={classes.container}>
      <Box flex="1" className={classes.textBox}>
        <Box>
          <Typography variant="h4">
            "Eduguide m'a permis de gagner ma vie tout en restant à la maison !"
          </Typography>
          <Typography variant="h6">
            Christine R. <br /> Professeure de math.
          </Typography>
          <Typography>.</Typography>
          <Typography></Typography>
        </Box>
        <Box className={classes.button}>
          <Button component={Link} to="/auth" sx={{ color: '#222' }}>
            Devenir tuteur
          </Button>
        </Box>
      </Box>

      <Box flex="1" className={classes.imgBox} diplay="flex" textAlign="center">
        <CardContent component="img" src={tutorPhoto}></CardContent>
      </Box>
    </Box>
  );
}

export default TutorTestimony;
