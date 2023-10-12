import { React, useState } from 'react';
import { useAuth } from '../Auth/AuthContext/AuthContext';
import { Link } from 'react-router-dom';
import logoImg from '../Assets/logoTutorat.png';
import {
  AppBar,
  Box,
  Button,
  Toolbar,
  Typography,
  CssBaseline,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import useStyles from './Styles';
import buttonsData from './ButtonsData.schema';
import Image from '../Assets/Image';

function Header() {
  const { isLoggedIn, logout, user } = useAuth();
  const { classes } = useStyles();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const userType = localStorage.getItem('userType');
  const newButtonsData = buttonsData(isLoggedIn, userType);
  console.log('user.image:', user.imageUrl);
  return (
    <AppBar className={classes.header} position="fixed">
      <CssBaseline />
      <Toolbar>
        <Typography variant="h4" className={classes.logo}>
          <Box
            textAlign="center"
            srcSet={logoImg}
            alt="photoLogo"
            width="300px"
            height="140px"
            component="img"
            marginBottom="1rem"
          ></Box>
        </Typography>
        <Box className={classes.navlinks}>
          {newButtonsData.map(
            (button, index) =>
              button.display && (
                <Button
                  key={index}
                  to={button.path}
                  component={Link}
                  className={classes.link}
                  onClick={button.label === 'Déconnexion' ? logout : undefined}
                >
                  <ListItemText primary={button.label} />
                </Button>
              ),
          )}
        </Box>
        <Box className={classes.userInfo}>
          {isLoggedIn && (
            <Box display="flex" alignItems="center">
              <Typography variant="body1" className={classes.userName}>
                {`Bienvenue, ${user.first_name}`}
              </Typography>
              <Image
                imageUrl={user.imageUrl}
                className={classes.avatar}
                alt="ProfileImage"
                width="50px"
                height="50px"
                object-fit="fill"
                borderRadius="50px"
              />
            </Box>
          )}
        </Box>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="end"
          onClick={handleDrawerToggle}
          className={classes.menuButton}
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>

      <Drawer
        className={classes.drawer}
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <List>
          {newButtonsData.map(
            (button, index) =>
              button.display && (
                <ListItem key={index}>
                  <Button
                    to={button.path}
                    component={Link}
                    className={classes.link}
                    onClick={
                      button.label === 'Déconnexion' ? logout : undefined
                    }
                  >
                    <ListItemText primary={button.label} />
                  </Button>
                </ListItem>
              ),
          )}
        </List>
      </Drawer>
    </AppBar>
  );
}

export default Header;
