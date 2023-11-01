import { React, useState, useEffect } from 'react';
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
  const [userData, setUserData] = useState(null);
  const [greeting, setGreeting] = useState('');

  useEffect(() => {
    const hour = new Date().getHours();
    if (hour >= 6 && hour < 12) {
      setGreeting('Bonjour');
    } else {
      setGreeting('Bonsoir');
    }
  }, []);

  useEffect(() => {
    if (isLoggedIn) {
      setUserData(user);
    } else {
      setUserData(null);
    }
  }, [isLoggedIn, user]);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const userType = localStorage.getItem('userType');
  const newButtonsData = buttonsData(isLoggedIn, userType);

  return (
    <AppBar className={classes.header} position="fixed">
      <CssBaseline />
      <Box
        className={classes.logo}
        component="img"
        srcSet={logoImg}
        alt="Logo"
      ></Box>
      <Toolbar className={classes.Toolbar}>
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

        {isLoggedIn && userData && (
          <Box className={classes.userInfoChild}>
            <Typography className={classes.userName}>
              {greeting}, <br /> {userData.first_name}
            </Typography>
            <Image
              imageUrl={userData.imageUrl}
              className={classes.avatar}
              alt="ProfileImage"
              width="30%"
              height="40px"
              border="1px solid red"
              object-fit="fill"
              borderRadius="50%"
            />
          </Box>
        )}

        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="end"
          onClick={handleDrawerToggle}
          className={classes.menuButton}
        >
          <MenuIcon className={classes.menuIcon} />
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
                    className={classes.menuToggleLink}
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
