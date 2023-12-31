import { Box, CardMedia, Container, Typography } from '@mui/material';
import React from 'react';
import useStyles from './style';
import earnMoneyPhoto from '../../../Assets/eduguidePicture2.png';
import { Stack } from '@mui/system';

function EarnMoney() {
  const { classes } = useStyles();
  return (
    <Container className={classes.container}>
      <Box className={classes.imgBox}>
        <CardMedia
          component="img"
          className={classes.cardMedia}
          src={earnMoneyPhoto}
        ></CardMedia>
      </Box>
      <Box className={classes.textBox}>
        <Stack>
          <Typography variant="h5">
            <span className={classes.span}>Gagnez de l'argent</span> pour <br />
            payer vos factures
          </Typography>
        </Stack>
        <Stack>
          <Typography>
            Le tutorat est un moyen ideal d'apporter de l'apporter de l'argent
            pendant que étudiez.Cela paie mieux que la plupart des emplois
            d"étudiant et vous faites vos propres horaires. De plus, vous serez
            payer directement sur votre compte bancaire à chaque deux semaines.
          </Typography>
        </Stack>
      </Box>
    </Container>
  );
}

export default EarnMoney;
