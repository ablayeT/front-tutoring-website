import React from 'react';
import {
  Typography,
  Button,
  Paper,
  Box,
  Divider,
  CardMedia,
} from '@mui/material';
import photoStudent from '../../../Assets/studentPagePhoto.webp';
import { Container, Stack } from '@mui/system';
import useStyles from './style';

const StudentPageBanner = () => {
  const { classes } = useStyles();
  return (
    <Container className={classes.pageContainer}>
      <Container sx={{ flex: '1' }}>
        <Stack display="flex" flexDirection="column" gap="3rem" flex="1">
          <Typography fontWeight="bold" variant="h4">
            The best courses you can get in Eduguide
          </Typography>
          <Divider
            sx={{ background: 'lightgreen', height: '4px', width: '150px' }}
          />
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime,
            consectetur nostrum. Neque dolore voluptatum voluptatibus molestiae
            odio minima molestias iste nesciunt possimus.
          </Typography>
          <Button
            sx={{
              background:
                'linear-gradient(to right, #7fff7f, #4682b4, #9370db)',
              width: '250px',
              borderRadius: '30px 4px 4px 4px',
              color: 'white',
              padding: '10px',
              fontWeight: 'bold',
            }}
          >
            Enjoy new Era in e-learning
          </Button>
        </Stack>
      </Container>

      <Container className={classes.imageContainer}>
        <Box
          flex="1"
          display="flex"
          justifyContent="center"
          alignItems="center"
          gap="1rem"
        >
          <Paper variant="text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente,
            reprehenderit! Tempora quisquam facilis laborum dignissimos
            inventore non quis soluta minus, ipsa sed consequatur eos illo qui,
            nostrum culpa quam nulla. Et laborum at accusantium explicabo
            deserunt vel, quo praesentium, tempore, natus libero iusto
            assumenda! Repellendus est iusto inventore dignissimos? Velit vero
            veritatis exercitationem ut necessitatibus minima cum eligendi
            consequatur voluptatem aut iste molestiae, error voluptatum aliquam,
            repudiandae incidunt minus fugit voluptas praesentium! Ad nemo
            recusandae est labore animi nesciunt,
          </Paper>
        </Box>
        <Stack flex="1" position="relative">
          <Stack className={classes.circle1}></Stack>
          <CardMedia component="img" src={photoStudent}></CardMedia>
          <Stack className={classes.circle2}></Stack>
        </Stack>
      </Container>
    </Container>
  );
};

export default StudentPageBanner;
