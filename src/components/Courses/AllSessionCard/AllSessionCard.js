import { Box, CardContent, Typography } from '@mui/material';
import React from 'react';
// import Image from '../../Assets/Image';
import { ListItemText } from '@mui/material';
import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => {
  return {
    boxContent: {
      '&:hover': {
        boxShadow: '3px 3px 5px #FFA500',
      },
    },
  };
});

function AllSessionCard({ session }) {
  const { classes } = useStyles();
  return (
    <Box
      sx={{
        position: 'relative',
        display: 'flex',
        marginBottom: '10px',
        width: '23%',
        height: '500px',
        padding: '1rem',
        borderRadius: '5px',
        boxShadow: '1px 1px 3px #FFA500',
        border: '1px solid #FFA500',
        flexWrap: 'wrap',
      }}
      className={classes.boxContent}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          backgroundImage: `url(http://localhost:3000/images/${session.imageUrl})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          borderRadius: '5px',
          backgroundRepeat: 'no-repeat',
          width: '100%',
          height: '100%',
          pl: 1,
          pb: 1,
        }}
      ></Box>
      <Box
        position="absolute"
        top="60px"
        bottom="50px"
        left="0"
        width="45%"
        backgroundColor="white"
      >
        <CardContent
          sx={{
            flex: '1 0 auto',
            display: 'flex',
            flexDirection: 'row',
            width: '100%',
          }}
        >
          <Typography
            component="div"
            variant="h5"
          >{`Nom du tuteur: ${session.first_name}`}</Typography>
          <Typography component="div" variant="h5">
            {`Prénom du tuteur: ${session.last_name}`}{' '}
          </Typography>
          <Typography
            component="div"
            variant="h5"
            color="green"
          >{`Prix: ${session.price}`}</Typography>
        </CardContent>

        <CardContent>
          <Typography>{`Date: ${session.date}`}</Typography>
          <Typography>{`Heure de début: ${session.start_time}`}</Typography>
          <Typography> {`Heure de fin: ${session.end_time}`}</Typography>
          <ListItemText>{`Lieu: ${session.location}`}</ListItemText>
        </CardContent>
      </Box>
    </Box>
  );
}

export default AllSessionCard;
