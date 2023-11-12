import React from 'react';
import { Box, Typography, Grid, Paper, Stack, Container } from '@mui/material';
import useStyles from './style';
import BannerImage1 from '../../Assets/photoTuteur3.jpg';
import BannerImage2 from '../../Assets/photoTutor4.jpg';
import HourglassBottomIcon from '@mui/icons-material/HourglassBottom';
import LocationOnIcon from '@mui/icons-material/LocationOn';
const ChooseYourTime = () => {
  const { classes } = useStyles();

  return (
    <Box className={classes.gridContainer}>
      <Box className={classes.imageContainer}>
        <Box position="relative" className={classes.imgBox}>
          <Box className={classes.circle}></Box>
          <Box
            component="img"
            src={BannerImage1}
            className={classes.bannerImage}
          ></Box>
        </Box>
      </Box>
      <Box className={classes.textContainer}>
        <Typography variant="h5">C'est toi qui choisis!</Typography>
        <Stack>
          <Box display="flex" color="orange">
            <HourglassBottomIcon />

            <Typography variant="body1">Fléxibilité des horaires</Typography>
          </Box>
          <Box display="flex" color="orange">
            <LocationOnIcon />
            <Typography>Tu es 100% maitre de ton planning</Typography>
          </Box>
        </Stack>
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
