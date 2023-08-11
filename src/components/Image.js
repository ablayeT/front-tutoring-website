import React from 'react'

function Image({src, alt, width, height, url}) {
  return (
    <img src={src} alt={alt} width={width} height={height}/>
  )
}

export default Image