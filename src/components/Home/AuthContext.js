import { createContext, useContext, useState } from 'react';
import api from '../../services/api';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = async () => {
    try {
        // Faire une requête à l'API pour déconnecter l'utilisateur
        await api.post('/auth/logout', {},
          {
            headers: {
              authorization: `Bearer ${localStorage.getItem('token')}`,
            },
          }
  
          
  
        );
  
        // Supprimez le token de l'utilisateur du stockage local
        localStorage.removeItem('token');
        setIsLoggedIn(false);
      }catch (error) {
        console.error('Erreur lors de la déconnexion :', error);
      }
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, handleLogin, handleLogout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
