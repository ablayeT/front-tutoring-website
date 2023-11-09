import React from 'react';
import { Box, Typography, Grid, Paper, Stack, Container } from '@mui/material';
import useStyles from './style';
import BannerImage from '../../Assets/photoTuteur3.jpg';

const ChooseYourTime = () => {
  const { classes } = useStyles();

  return (
    <Box
      display="flex"
      gap="15px"
      height="100%"
      alignItems="center"
      flexWrap="wrap"
      width="100%"
      className={classes.gridContainer}
    >
      <Box
        flex="1"
        display="flex"
        justifyContent="center"
        className={classes.imageContainer}
      >
        <Box
          component="img"
          src={BannerImage}
          transform="rotate(-9deg)"
          width="400px"
          object-fit="fill"
          margin="auto"
          borderRadius="1000px 1200px 1200px 1000px"
          height="280px"
          alt="tutorWithStudent"
          className={classes.bannerImage}
        />
      </Box>
      <Box
        flex="1"
        display="flex"
        padding="20px"
        gap="5px"
        alignSelf="center"
        flexDirection="column"
        justifyContent="center"
      >
        <Typography variant="h5">C'est toi qui choisis!</Typography>
        <Typography variant="body1">Fléxibilité des horaires</Typography>
        <Typography> Tu est 100% maître de ton planning</Typography>
        <Typography variant="body3">
          En tant que tuteur indépendant, tu gères ton emploi du temps comme tu
          l’entends. Eduguide, c’est ouvert 7 jours sur 7.
        </Typography>
      </Box>
    </Box>
    // </Box>
  );
};

export default ChooseYourTime;
