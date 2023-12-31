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

  // ...

  const handleDrop = async (acceptedFile) => {
    console.log('userType in Header.js :', userType);
    console.log('userId in Header js :', userId);
    try {
      if (acceptedFile.length === 0) {
        // Gérer le cas où aucun fichier n'est sélectionné
        console.error('Aucun fichier sélectionné.');
        return;
      }

      const uploadedFile = acceptedFile[0]; // Récupérer le fichier
      console.log('previewImage:', uploadedFile);

      const formData = new FormData();
      formData.append('imageUrl', uploadedFile); // Ajouter le fichier à FormData avec la clé attendue par le backend

      console.log('formData:', formData);

      // Effectuer la requête vers le serveur
      const response = await api.put(
        `/users/${userType}/${userId}/profile-image`,
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data', // Ajouter l'entête pour indiquer le type de contenu
          },
        },
      );

      console.log('response.data:', response.data);
      // Vérifier si le téléchargement a réussi
      if (!response.ok) {
        console.error("Échec du téléchargement de l'image.");
        return;
      }

      // Mettre à jour l'état local avec le chemin de l'image téléchargée
      const responseBody = await response.json();
      const uploadedImageUrl = responseBody.imageUrl;

      console.log(uploadedImageUrl);

      // Mettre à jour l'état local avec la nouvelle image téléchargée
      setNewProfileImage(previewImage);
      forceUpdate(); //  pour forcer un rendu

      // Fermer la boîte de dialogue après le téléchargement de l'image
      setIsDialogOpen(false);
    } catch (error) {
      console.error(
        "Une erreur est survenue lors du téléchargement de l'image.",
        error,
      );
    }
  };

  console.log('newProfileImage    : ', newProfileImage);

  // ...

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
                  } // Utiliser la prévisualisation du fichier pour l'affichage temporaire
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
