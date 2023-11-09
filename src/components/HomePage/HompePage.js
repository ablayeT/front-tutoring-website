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

      <Box>
        <ChooseYourTime />
      </Box>
      <Box height="400px" backgroundColor="rgba(255, 165, 0, 0.2)">
        <TutorBloc />
      </Box>
      <Box height="400px" backgroundColor="white">
        <StudentBloc />
      </Box>
      <Box
        boxShadow="0px 0px 10px 0px rgba(34, 34, 34, 0.6)"
        backgroundColor="rgba(255, 165, 0, 0.2)"
      >
        <Carousel />
      </Box>
      <Box
        backgroundColor="rgba(255, 165, 0, 0.2)"
        display="flex"
        justifyContent="center"
        padding="25px"
      >
        <Testimony />
      </Box>
    </Box>
  );
}

export default HompePage;
