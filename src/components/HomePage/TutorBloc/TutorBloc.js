import React from 'react';
import { Box, Typography } from '@mui/material';
import useStyles from './style';
import BannerImage from '../../Assets/photoTuteur2.jpg';

const TutorBloc = () => {
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
        padding="10px"
        flexDirection="column"
        justifyContent="center"
      >
        <Typography variant="h5">Je veux devenir Formateur </Typography>
        <Typography variant="body3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
          facilisi. Proin non bibendum ipsum. Etiam auctor, sem a hendrerit
          feugiat, purus leo fringilla sapien.
        </Typography>
      </Box>
      <Box
        className={classes.imageContainer}
        // borderRadius="950px 909px 800px 1000px"
      >
        <Box
          component="img"
          src={BannerImage}
          className={classes.bannerImage}
        />
      </Box>
    </Box>
    // </Box>
  );
};

export default TutorBloc;
