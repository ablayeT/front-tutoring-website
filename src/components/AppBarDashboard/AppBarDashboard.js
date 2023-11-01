import React, { useState, useEffect, useRef } from 'react';
import AppBarDashboardSchema from './AppBarDashboard.schema';
import { AppBar, useStyles } from './style/AppBarDashboard.style';
import { Box, Button } from '@mui/material';
import { NavLink } from 'react-router-dom';
import SearchComponent from '../Search';
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';

function AppBarDashboard() {
  const { classes } = useStyles();
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const userType = localStorage.getItem('userType');
  const menuButtonRef = useRef(null);
  const [popupPosition, setPopupPosition] = useState({ top: 0, left: 0 });

  // const handleNewMain = () => {
  //   handleMain();
  // };

  const handlePopupToggle = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  useEffect(() => {
    // s'assurer que la référence est non nulle avant d'utiliser ses propriétés
    if (menuButtonRef.current) {
      const rect = menuButtonRef.current.getBoundingClientRect();
      const top = rect.top - 20; // Ajustement de la position du pop-up au-dessus de l'icône
      const left = rect.left;
      // Mise à jour la position du pop-up
      setPopupPosition({ top, left });
    }

    // Gestionnaire d'événement pour fermer le pop-up lorsqu'on clique à l'extérieur
    const handleClickOutside = (event) => {
      if (
        isPopupOpen &&
        menuButtonRef.current &&
        !menuButtonRef.current.contains(event.target)
      ) {
        setIsPopupOpen(false);
      }
    };

    // Gestionnaire d'événements au document entier
    document.addEventListener('click', handleClickOutside);

    // Nettoyage du gestionnaire d'événements lorsqu'on démonte le composant
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isPopupOpen]);

  return (
    <AppBar
      className={
        userType === 'Student' ? classes.appBarStudent : classes.appBarTutor
      }
    >
      <Box
        className={
          userType === 'Tutor'
            ? classes.appBarTutorDashboard
            : classes.appBarStudentDashboard
        }
      >
        {AppBarDashboardSchema.map((item, index) => (
          <Box
            key={index}
            // onClick={handleNewMain}
            className={classes.buttonBox}
          >
            <NavLink to={item.path}>
              <Button className={classes.button}>{item.label}</Button>
            </NavLink>
          </Box>
        ))}
        {/* Bouton de l'icône MoreVert pour ouvrir/fermer le pop-up */}
        <IconButton
          aria-label="open popup"
          edge="end"
          onClick={handlePopupToggle}
          className={
            userType === 'Student'
              ? classes.studentMenuButton
              : classes.tutorMenuButton
          }
          ref={menuButtonRef} // Attribution de  la référence à l'icône MoreVert
        >
          <MoreVertIcon className={classes.menuIcon} />
        </IconButton>
        {/* Pop-up */}
        {isPopupOpen && (
          <Box
            top={popupPosition.top} // Ajustement de la position du pop-up au-dessus de l'icône
            left={popupPosition.left}
            className={classes.mobileMenuOpen}
          >
            {AppBarDashboardSchema.map((item, index) => (
              <Box key={index} margin="10px 0">
                <NavLink to={item.path}>
                  <Button className={classes.toggleButton}>{item.label}</Button>
                </NavLink>
              </Box>
            ))}
          </Box>
        )}
      </Box>
      {userType === 'Student' && (
        <Box textAlign="center" width="70%">
          <SearchComponent />
        </Box>
      )}
    </AppBar>
  );
}

export default AppBarDashboard;
