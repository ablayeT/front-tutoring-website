import React, { useState, useEffect, useRef } from 'react';
import { AppBar, useStyles } from './style/AppBarDashboard.style';
import { Box } from '@mui/material';
import SearchComponent from '../Search';

function AppBarDashboard() {
  const { classes } = useStyles();
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const userType = localStorage.getItem('userType');
  const menuButtonRef = useRef(null);

  // const handleNewMain = () => {
  //   handleMain();
  // };

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
      {userType === 'Student' && (
        <Box className={classes.searComponent}>
          <SearchComponent />
        </Box>
      )}
    </AppBar>
  );
}

export default AppBarDashboard;
