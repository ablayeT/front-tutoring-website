import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Box, Container, Stack, Typography } from '@mui/material';
import useStyles from './style';

const subjects = [
  'Mathématiques',
  'Sciences',
  'Histoire',
  'Géographie',
  'Français',
  'Anglais',
];

const CarouselComponent = () => {
  const { classes } = useStyles();
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    spacing: 1,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          dots: true,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Box
      style={{
        width: '70%',
        margin: 'auto',
        padding: '1.5rem',
      }}
    >
      <Slider {...settings} className={classes.slider}>
        {subjects.map((subject, index) => (
          <Box key={index} display="block" gap="10px" margin="auto">
            <Container
              gap="1rem"
              margin="1rem"
              display="flex"
              alignItems="center"
              alignSelf="center"
              justifyContent="center"
              width="150px"
              sx={{ marginRight: '10px' }}
              height="40px"
              backgroundColor="white"
              border="1px solid green"
            >
              <Typography>{subject}</Typography>
            </Container>
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default CarouselComponent;
