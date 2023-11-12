import React from 'react';
import { Box } from '@mui/material';

function OrangeBar() {
  return (
    <Box
      sx={{
        height: 2,
        backgroundColor: (theme) =>
          theme.palette.mode === 'light'
            ? 'rgba(255, 165, 0, 0.6)'
            : 'rgb(255 132 132 / 25%)',
      }}
    ></Box>
  );
}

export default OrangeBar;
