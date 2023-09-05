import React from 'react';
import { Box } from '@mui/material';

function Image({ imageUrl, alt, width, height, borderRadius }) {
  const src =
    process.env.REACT_APP_BASE_URL + process.env.REACT_APP_IMAGE_URL + imageUrl;

  return (
    <Box
      component="img"
      src={src}
      alt={alt}
      borderRadius={borderRadius}
      width={width}
      height={height}
    />
  );
}

export default Image;
