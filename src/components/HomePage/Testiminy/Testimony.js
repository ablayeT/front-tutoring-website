import React from 'react';
import { Box, Paper, Typography } from '@mui/material';
import testimonials from './Testimonials.schema';
import useStyles from './style';

const TutorBloc = () => {
  const { classes } = useStyles();

  return (
    <Box
      display="flex"
      gap="15px"
      height="100%"
      flexDirection="column"
      alignItems="center"
      flexWrap="wrap"
      width="100%"
      className={classes.gridContainer}
    >
      <Box className={classes.imageContainer}>
        <Typography variant="h5">Ils nous ont fait confiance</Typography>
      </Box>
      <Box className={classes.textCards}>
        {testimonials.map((testimonial, index) => (
          <Paper className={classes.testimony} key={index}>
            <Typography variant="h6">{testimonial.name}</Typography>
            <Typography variant="body3">{testimonial.message}</Typography>
          </Paper>
        ))}
      </Box>
    </Box>
  );
};

export default TutorBloc;
