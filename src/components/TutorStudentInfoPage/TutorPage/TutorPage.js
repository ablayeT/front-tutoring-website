import React from 'react';
import { Typography, Container, Box } from '@mui/material';
import useStyles from './style';
import TutorPageBanner from './TutorPageBanner';
import WhyBecomeTutor from './WhyBecomeTutor';
import EarnMoney from './EarnMoney';
import JoinTheTeam from './JoinTheTeam';
const TutorPage = () => {
  const { classes } = useStyles();
  return (
    <Box className={classes.container}>
      <Box>
        <TutorPageBanner />
      </Box>
      <Box>
        <WhyBecomeTutor />
      </Box>
      <Box>
        <EarnMoney />
      </Box>
      <Box>
        <JoinTheTeam />
      </Box>
    </Box>
  );
};

export default TutorPage;
