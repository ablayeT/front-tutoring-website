import React from 'react';
import { Box, Typography, Grid, Paper, Stack, Container } from '@mui/material';
import useStyles from './style';
import BannerImage from '../../Assets/photoTutor.jpg';

const Banner = () => {
  const { classes } = useStyles();

  return (
    <Box className={classes.gridContainer}>
      <Box className={classes.textContainer}>
        <Typography variant="h2" className={classes.mainTitle}>
          Bienvenue sur EduGuide !
        </Typography>
        <Typography variant="body3">
          Notre plateforme est facile à utiliser et vous permet de réserver vos
          séances en quelques clics. Alors, n'attendez plus ! Inscrivez-vous dès
          aujourd'hui et commencez à progresser !
        </Typography>
      </Box>
      <Box className={classes.imageContainer}>
        <Box position="relative">
          <Box
            component="img"
            src={BannerImage}
            className={classes.bannerImage}
          ></Box>
          <Box className={classes.circle}></Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Banner;
