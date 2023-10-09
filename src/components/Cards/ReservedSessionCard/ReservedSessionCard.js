import { Box, Typography } from '@mui/material';
import React from 'react';
import Button from '../../Buttons/Button';
import useStyles from './Styles';
// import api from '../../../services/api';

function ReservedSessionCard({
  session,
  buttonText = 'Annuler',
  onCancelClick,
}) {
  const { classes } = useStyles();

  console.log(session.imageUrl);
  console.log('session :', session);
  return (
    <Box className={classes.boxContent}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          backgroundImage: `url(http://localhost:3000/images/${session.imageUrl})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          width: '100%',
          height: '250px',
          pl: 1,
          pb: 1,
        }}
      ></Box>
      <Box>
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '10px',
            width: '100%',
          }}
        >
          <Typography component="div" variant="h6" fontWeight="bold">
            {session.first_name}
          </Typography>
          <Typography component="div" variant="h6" fontWeight="bold">
            {session.last_name}{' '}
          </Typography>
        </Box>

        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            flexDirection: 'column',
            gap: '8px',
            marginTop: '1rem',
          }}
        >
          <Typography>Date : {session.date}</Typography>
          <Typography>Début : {session.start_time}</Typography>
          <Typography>Fin :{session.end_time}</Typography>
          <Typography>Lieu : {session.location}</Typography>
        </Box>
      </Box>
      <Box>
        <Typography component="div" variant="h6">
          {session.subject_name}
        </Typography>
        <Typography component="div">{session.subject_description}</Typography>
      </Box>

      <Box
        display="flex"
        justifyContent="space-between"
        width="100%"
        margin="1rem"
      >
        {/* <Button onClick={handleCancelClick}>Annuler</Button> */}

        <Button onClick={onCancelClick}>{buttonText}</Button>

        <Typography component="div" variant="h5" color="green">
          ${session.price}
        </Typography>
      </Box>
    </Box>
  );
}

export default ReservedSessionCard;
