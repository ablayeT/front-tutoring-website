import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import useStyles from './style';
import BannerImage from '../../Assets/photoTuteur2.jpg';
import { Link } from 'react-router-dom';

const TutorBloc = () => {
  const { classes } = useStyles();

  return (
    <Box className={classes.gridContainer}>
      <Box
        flex="1"
        display="flex"
        padding="10px"
        gap="1rem"
        flexDirection="column"
        justifyContent="center"
      >
        <Typography variant="h5">Je veux devenir Formateur </Typography>
        <Typography variant="body3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
          facilisi. Proin non bibendum ipsum. Etiam auctor, sem a hendrerit
          feugiat, purus leo fringilla sapien.
        </Typography>
        <Button component={Link} to="/tutorInfoPage">
          En savoir plus
        </Button>
      </Box>
      <Box
        className={classes.imageContainer}
        // borderRadius="950px 909px 800px 1000px"
      >
        <Box className={classes.orangeCircle}></Box>
        <Box className={classes.yellowCircle}></Box>
        <Box
          component="img"
          src={BannerImage}
          className={classes.bannerImage}
        />
        <Box
          className={classes.blueCircle}
          shape="heart"
          width={100}
          height={100}
        ></Box>
      </Box>
    </Box>
    // </Box>
  );
};

export default TutorBloc;
