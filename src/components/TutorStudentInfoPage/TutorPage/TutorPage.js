import React from 'react';
import { Typography, Container, Box } from '@mui/material';
import useStyles from './style';
import TutorPageBanner from './TutorPageBanner';
import WhyBecomeTutor from './WhyBecomeTutor';
import EarnMoney from './EarnMoney';
import JoinTheTeam from './JoinTheTeam';
import TutorTestimony from './TutorTestymony';
import { motion } from 'framer-motion';
const TutorPage = ({ isVisible }) => {
  const { classes } = useStyles();
  return (
    <motion.Box
      className={classes.container}
      animate={{ opacity: isVisible ? 1 : 0 }}
    >
      <Box className={classes.containerChildren}>
        <TutorPageBanner />
      </Box>
      <Box className={classes.containerChildren}>
        <WhyBecomeTutor />
      </Box>
      <Box className={classes.containerChildren}>
        <EarnMoney />
      </Box>
      <Box className={classes.containerChildren}>
        <TutorTestimony />
      </Box>
      <Box className={classes.containerChildren}>
        <JoinTheTeam />
      </Box>
    </motion.Box>
  );
};

export default TutorPage;
