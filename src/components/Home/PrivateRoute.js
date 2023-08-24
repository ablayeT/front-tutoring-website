import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { useAuth } from './AuthContext'; // Importer le hook

const PrivateRoute = ({ element, ...rest }) => {
  const { isLoggedIn } = useAuth();

  return isLoggedIn ? <Route {...rest} element={element} /> : <Navigate to="/auth" />;
};

export default PrivateRoute;