import React from 'react'
import { Box } from '@mui/material'
function Image({imageUrl, alt, width, height}) {
  const src = process.env.REACT_APP_BASE_URL + process.env.REACT_APP_IMAGE_URL + imageUrl
  console.log('src:',src)
  return (
    <Box component='img' src={src} alt={alt} borderRadius='50%'  width={width} height={height}/>
  )
}

export default Image