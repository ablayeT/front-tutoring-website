import { createContext, useContext, useState } from 'react';
import instanceAxios from '../../services/api';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

export  const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate()


  const login = async (email , password) => {
    try {
      const response = await instanceAxios.post('/auth/login', {
        email,
        password,
      });
      console.log('User ID:', response.data.userId);
      const token = response.data.token;
      const userId = response.data.userId;
      const userType = response.data.userType;
       console.log('token in AuthProvider :',token);
       localStorage.setItem('token', token);
       localStorage.setItem('userId', userId);
       localStorage.setItem('userType', userType);
    setIsLoggedIn(true);
    return response.data;
  }catch(error) {
    console.error(error);
    return {error :  "Une erreur s'est produite lors de la connexion"};
  }

}

  const logout = async () => {
    try {
        // Faire une requête à l'API pour déconnecter l'utilisateur
        await instanceAxios.post('/auth/logout', {},
          {
            headers: {
              authorization: `Bearer ${localStorage.getItem('token')}`,
            },
          }
       );
  
        // Supprimez le token de l'utilisateur du stockage local
        localStorage.removeItem('token');
        setIsLoggedIn(false);
        navigate('/auth'); 
      }catch (error) {
        console.error('Erreur lors de la déconnexion :', error);
      }

  };

  const verifyLogin = async () =>{
      try {
        const response = await instanceAxios.get('/auth/current',{
          headers: {
            authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        })
        console.log(response);
        if(response.data.isLoggedIn) {
          setIsLoggedIn(true);
        }else {
          setIsLoggedIn(false);
          navigate('/auth')
        }
      }catch(error) {
        console.log(error)
        setIsLoggedIn(false);
        navigate('/auth')
        
      }
  }

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout, verifyLogin }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
