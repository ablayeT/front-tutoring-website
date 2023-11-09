import React from 'react';
import { Box, Typography, Grid, Paper, Stack, Container } from '@mui/material';
import useStyles from './style';
import BannerImage from '../../Assets/photoTuteur3.jpg';
import HourglassBottomIcon from '@mui/icons-material/HourglassBottom';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const StudentBloc = () => {
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
        // borderRadius="950px 909px 800px 1000px"
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
        <Typography variant="h5">Je veux m'inscrire comme étudiant</Typography>
        <Box display="flex" color="orange">
          <HourglassBottomIcon />

          <Typography variant="body1">Ponctualité et souplesse</Typography>
        </Box>
        <Box display="flex" color="orange">
          <LocationOnIcon />
          <Typography>disponible où que vous souyez</Typography>
        </Box>
        <Typography variant="body3">
          Participez à des sessions de tutorat en direct où vous pouvez poser
          des questions, clarifier vos doutes et consolider vos connaissances.
          Nos tuteurs vous guideront à travers des concepts complexes, vous
          aideront à résoudre des problèmes et vous prépareront pour les
          examens.
        </Typography>
      </Box>
    </Box>
    // </Box>
  );
};

export default StudentBloc;
