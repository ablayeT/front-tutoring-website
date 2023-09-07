// ButtonData.js

export const buttonsData = (isLoggedIn, userType) => [
  {
    label: 'Accueil',
    path: '/',
    display: true,
  },
  {
    label: 'Cours',
    path: '/courses',
    display: isLoggedIn && userType === 'Student',
  },
  {
    label: 'Devenir Tuteur',
    path: '/auth',
    display: !isLoggedIn && userType !== 'Tutor',
  },
  {
    label: 'Contact',
    path: '/contact',
    display: true,
  },
  {
    label: 'Connexion',
    path: '/auth',
    display: !isLoggedIn,
  },
  {
    label: 'Déconnexion',
    path: '/auth',
    display: isLoggedIn,
  },
];
