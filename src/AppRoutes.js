// Routes.js
import React from 'react';
import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import PrivateRoute from './components/Auth/PrivateRoute';
import { useAuth } from './components/Auth/AuthContext/AuthContext';
import Home from './page/Home/Home';
import TutorDashboard from './page/Tutors/TutorDashboard';
import StudentDashboard from './page/Students/StudentDashboard';
import Auth from './page/Auth/Auth';
import Contact from './page/Contacts/Contat';
import AllSessions from './page/Courses/AllSessions/AllSessions';
import { Navigate } from 'react-router-dom';
import NotFound from './page/NotFound';
function AppRoutes() {
  const { isLoggedIn, verifyLogin } = useAuth();
  //   const navigate = useNavigate();

  useEffect(() => {
    verifyLogin();
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/auth" element={<Auth />} />
      <Route path="/courses" element={<AllSessions />} />
      <Route
        path="/tutor-dashboard/*"
        element={
          isLoggedIn ? (
            <PrivateRoute element={<TutorDashboard />} />
          ) : (
            <Navigate to="/auth" />
          )
        }
      />
      <Route
        path="/student-dashboard/*"
        element={
          isLoggedIn ? (
            <PrivateRoute element={<StudentDashboard />} />
          ) : (
            <Navigate to="/auth" />
          )
        }
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default AppRoutes;
