import { createContext, useContext, useState } from 'react';
import api from '../../../services/api';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const login = async (email, password) => {
    try {
      const response = await api.post('/auth/login', {
        email,
        password,
      });
      const token = response.data.token;
      const userId = response.data.userId;
      const userType = response.data.userType;
      const userFirstName = response.data.userFirstName;
      const userLastName = response.data.userLastName;

      // Convertir la première lettre de userType en minuscule pour l'URL de la requête
      const userTypeLowercase =
        userType.charAt(0).toLowerCase() + userType.slice(1);

      const profileResponse = await api.get(
        `/${userTypeLowercase}s/profile/${userId}`,
        {
          headers: {
            authorization: `Bearer ${token}`,
          },
        },
      );

      let userImage;

      if (userType === 'Tutor') {
        userImage = profileResponse.data.profile.imageUrl;
      } else if (userType === 'Student') {
        userImage = profileResponse.data.imageUrl;
      } else {
        // Gérez le cas par défaut ici si nécessaire
        userImage = ''; // ou null ou une autre valeur par défaut
      }

      const userData = {
        id: userId,
        type: userType,
        first_name: userFirstName,
        last_name: userLastName,
        imageUrl: userImage,
      };

      localStorage.setItem('token', token);
      localStorage.setItem('userId', userId);
      localStorage.setItem('userType', userType);
      localStorage.setItem('userFirstName', userFirstName);
      localStorage.setItem('userLastName', userLastName);
      localStorage.setItem('userImage', userImage);

      setUser(userData);
      setIsLoggedIn(true);
      return response.data;
    } catch (error) {
      console.error(error);
      return { error: "Une erreur s'est produite lors de la connexion" };
    }
  };

  const logout = async () => {
    try {
      // Faire une requête à l'API pour déconnecter l'utilisateur
      await api.post(
        '/auth/logout',
        {},
        {
          headers: {
            authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        },
      );

      // Supprimez le token de l'utilisateur du stockage local
      localStorage.clear();
      setIsLoggedIn(false);
      navigate('/auth');
    } catch (error) {
      console.error('Erreur lors de la déconnexion :', error);
    }
  };

  const verifyLogin = async () => {
    try {
      const response = await api.get('/auth/current', {
        headers: {
          authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      if (response.data.isLoggedIn) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
        navigate('/auth');
      }
    } catch (error) {
      console.log(error);
      setIsLoggedIn(false);
      navigate('/auth');
    }
  };
  return (
    <AuthContext.Provider
      value={{ isLoggedIn, login, user, logout, verifyLogin }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
