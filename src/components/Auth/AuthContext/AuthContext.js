import { createContext, useContext, useState } from 'react';
import instanceAxios from '../../../services/api';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const login = async (email, password) => {
    try {
      const response = await instanceAxios.post('/auth/login', {
        email,
        password,
      });
      const token = response.data.token;
      console.log('toKen :', token);
      const userId = response.data.userId;
      console.log('userId :', userId);
      const userType = response.data.userType;
      console.log('userType :', userType);
      localStorage.setItem('token', token);
      localStorage.setItem('userId', userId);
      localStorage.setItem('userType', userType);
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
      await instanceAxios.post(
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
      const response = await instanceAxios.get('/auth/current', {
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
    <AuthContext.Provider value={{ isLoggedIn, login, logout, verifyLogin }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
