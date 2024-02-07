import React, { useState, useEffect } from 'react';
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
import Dropzone from 'react-dropzone';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import api from '../../services/api';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

function Header() {
  const { isLoggedIn, logout, user } = useAuth();
  const { classes } = useStyles();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [userData, setUserData] = useState(null);
  const [greeting, setGreeting] = useState('');
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [newProfileImage, setNewProfileImage] = useState(null);
  const userId = localStorage.getItem('userId');

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

  useEffect(() => {
    const storedProfileImage = localStorage.getItem('newProfileImage');
    if (storedProfileImage) {
      setNewProfileImage(storedProfileImage);
    }
  }, []); // Run only once when the component mounts

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const userType = localStorage.getItem('userType');
  const newButtonsData = buttonsData(isLoggedIn, userType);

  const handleProfileImageChange = () => {
    setIsDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
  };

  const handleDrop = async (acceptedFile) => {
    try {
      if (acceptedFile.length === 0) {
        console.error('Aucun fichier sélectionné.');
        return;
      }

      const uploadedFile = acceptedFile[0];
      const formData = new FormData();
      formData.append('imageUrl', uploadedFile);

      const response = await api.put(
        `/users/${userType}/${userId}/profile-image`,
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        },
      );

      console.log('response:', response);

      if (response.status === 200) {
        console.log('Image téléchargée avec succès.');
        const { updatedProfile } = response.data;
        console.log('updatedProfile:', updatedProfile);
        setNewProfileImage(updatedProfile.imageUrl); // Mettre à jour avec la nouvelle URL d'image
        console.log('updatedProfile.imageUrl :', updatedProfile.imageUrl);
        localStorage.setItem('newProfileImage', updatedProfile.imageUrl);
        setIsDialogOpen(false);
      } else {
        console.error("Échec du téléchargement de l'image.");
      }
    } catch (error) {
      console.error(
        "Une erreur est survenue lors du téléchargement de l'image.",
        error,
      );
    }
  };
  console.log('newProfileImage : ', newProfileImage);
  // console.log('userData.imageUrl : ', userData.imageUrl);
  return (
    <AppBar className={classes.header} position="fixed">
      <CssBaseline />
      <Button component={Link} to="/">
        <Box
          component="img"
          className={classes.logo}
          srcSet={logoImg}
          alt="Logo"
        ></Box>
      </Button>
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
            <IconButton color="inherit" onClick={handleProfileImageChange}>
              {newProfileImage ? (
                <Image
                  key={newProfileImage ? 'preview' : 'original'}
                  imageUrl={
                    newProfileImage ? newProfileImage : userData.imageUrl
                  }
                  className={classes.avatar}
                  alt="ProfileImage"
                  width="30%"
                  height="40px"
                  border="1px solid red"
                  object-fit="fill"
                  borderRadius="50%"
                />
              ) : (
                <Image
                  imageUrl={userData.imageUrl}
                  className={classes.avatar}
                  alt="ProfileImage"
                  width="50%"
                  height="40px"
                  border="1px solid red"
                  object-fit="fill"
                  borderRadius="50%"
                />
              )}
              {isDialogOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </IconButton>
          </Box>
        )}

        <Dialog open={isDialogOpen} onClose={handleCloseDialog}>
          <DialogTitle>Télécharger une nouvelle photo de profil</DialogTitle>
          <DialogContent>
            <Dropzone onDrop={handleDrop}>
              {({ getRootProps, getInputProps }) => (
                <div {...getRootProps()} className={classes.dropzone}>
                  <input {...getInputProps()} />
                  <Button className={classes.dialogButton}>
                    Glissez et déposez une image ici ou cliquez pour
                    sélectionner une image.
                  </Button>
                </div>
              )}
            </Dropzone>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseDialog} color="primary">
              Annuler
            </Button>
          </DialogActions>
        </Dialog>

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
