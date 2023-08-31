import React from 'react';

function ProfileImage({ imageUrl, alt, width, height }) {
  const src =
    process.env.REACT_APP_BASE_URL + process.env.REACT_APP_IMAGE_URL + imageUrl;
  return <img src={src} alt={alt} width={width} height={height} />;
}

export default ProfileImage;
