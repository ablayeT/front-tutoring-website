// import React from 'react';
import { useAuth } from './AuthContext'; // Importer le hook
import { Navigate} from 'react-router-dom';

const PrivateRoute = ({ element, ...rest }) => {
  const { verifyLogin } = useAuth();
  
   
  if(verifyLogin()) {
    return  element
}else {
  return <Navigate to='/auth' />;
}
}
export default  PrivateRoute;