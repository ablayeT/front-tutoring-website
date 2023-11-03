import { useEffect, useState } from 'react';
import { useAuth } from '../AuthContext/AuthContext'; // Importer le hook
// import { Navigate } from 'react-router-dom';
import { CircularProgress } from '@mui/material';

const PrivateRoute = ({ element }) => {
  const { verifyLogin } = useAuth();
  const [isVerified, setIsverified] = useState(false);

  useEffect(() => {
    const verification = async () => {
      await verifyLogin();
      setIsverified(true);
    };
    verification();
  }, []);

  if (isVerified) {
    return element;
  } else {
    return <CircularProgress />;
  }
};
export default PrivateRoute;
