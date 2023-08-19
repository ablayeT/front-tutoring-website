import {React, useState} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TutorProfile from './page/Tutor/TutorProfile';
import StudentProfile from './page/Students/StudentProfile';
import Home from './page/Home/Home';
import TutorDashboard from './page/Tutor/TutorDashboard';
import StudentDashboard from './page/Students/StudentDashboard';
import LoginForm from './components/Home/LoginForm';
import Header from './components/Header/index';
import Auth from './page/Auth/Index';  
import Contact from './page/Contacts/Contat';
import api from './services/api';

function App() {
  const userType= localStorage.getItem('userType');
  console.log('userType in App.js: ',userType);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = async () => {
    setIsLoggedIn(false);
    try {
      // Faire une requête à l'API pour déconnecter l'utilisateur
      await api.post('/auth/logout',null,
        {
          headers: {
            authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        }
      );

      // Supprimez le token de l'utilisateur du stockage local
      localStorage.removeItem('token');

    }catch (error) {
      console.error('Erreur lors de la déconnexion :', error);
    }

  };

  
  return (
    <Router>
      <Header isLoggedIn={isLoggedIn} handleLogin={handleLogin} handleLogout={handleLogout}  />
      <Routes>
        <Route exact path="/" element={<Home />} /> 
        <Route  path="/auth" element={<Auth />} />
                              
        {/* Rediriger vers page appropriée en fonction du type si l'utilisateur a déjà un compte et un profil */}
        {userType === 'Tutor' && (
          <Route path="/tutor-dashboard/*" element={<TutorDashboard />} />
        )}
        {userType === 'Student' && (       
          <Route path="/student-dashboard/*" element={<StudentDashboard />} />
        )}
        <Route exact path="/login" element={<LoginForm />} /> 
        <Route path="/contact" element={<Contact/>} />
        <Route exact path="/tutor-profile" element={<TutorProfile />} />
        <Route exact path="/student-profile"  element={<StudentProfile />} />
      </Routes>
    </Router>
  );
}

export default App;

