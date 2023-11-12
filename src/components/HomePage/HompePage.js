import { Box, Typography, Container } from '@mui/material';
import React from 'react';
import Banner from './Banner';
import Carousel from './Carousel';
import TutorBloc from './TutorBloc';
import ChooseYourTime from './chooseYourTimeBloc/index.js';
import Testimony from './Testiminy';
import StudentBloc from './StudentBloc/StudentBloc.js';
function HompePage() {
  return (
    <Box
      width="100%"
      display="flex"
      flexDirection="column"
      gap="2rem"
      margin="auto"

      // boxShadow="0px 0px 10px 0px rgba(34, 34, 34, 0.6)"
      // borderRadius="15px"
    >
      <Box height="400px">
        <Banner />
      </Box>

      <Box height="400px">
        <ChooseYourTime />
      </Box>
      <Box
        height="400px"
        backgroundColor="rgba(255, 165, 0, 0.2)"
        width="90%"
        margin="auto"
        borderRadius="15px"
      >
        <TutorBloc />
      </Box>
      <Box height="400px" backgroundColor="white">
        <StudentBloc />
      </Box>
      <Box
        boxShadow="0px 0px 10px 0px rgba(34, 34, 34, 0.6)"
        backgroundColor="rgba(255, 165, 0, 0.2)"
        width="90%"
        borderRadius="15px"
        marginTop="2rem"
        margin="auto"
      >
        <Typography variant="h5" textAlign="center" padding="10px">
          Découvez nos matières
        </Typography>
        <Carousel />
      </Box>
      <Box
        backgroundColor="rgba(255, 165, 0, 0.2)"
        display="flex"
        width="90%"
        borderRadius="15px"
        margin="auto"
        justifyContent="center"
        padding="25px"
      >
        <Testimony />
      </Box>
    </Box>
  );
}

export default HompePage;
