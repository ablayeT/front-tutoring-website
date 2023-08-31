import { useAuth } from '../AuthContext/AuthContext'; // Importer le hook
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ element }) => {
  const { verifyLogin } = useAuth();

  if (verifyLogin()) {
    return element;
  } else {
    return <Navigate to="/auth" />;
  }
};
export default PrivateRoute;
