import React from 'react';
import {
  Typography,
  Button,
  Paper,
  Box,
  Divider,
  CardMedia,
} from '@mui/material';
import photoStudent from '../../Assets/studentPagePhoto.webp';
import { Container, Stack } from '@mui/system';
import useStyles from './style';
import StudentPageBanner from './StudentPageBanner';
import BookSessionToday from './BookSessionToday';

const StudentPage = () => {
  const { classes } = useStyles();
  return (
    <Container className={classes.pageContainer}>
      <Box>
        <StudentPageBanner />
      </Box>
      <Box>
        <BookSessionToday />
      </Box>
    </Container>
  );
};

export default StudentPage;
