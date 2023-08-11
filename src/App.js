import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TutorProfile from './page/Tutor/TutorProfile';
import StudentProfile from './page/Students/StudentProfile';
import Home from './page/Home/Home';
import TutorDashboard from './page/Tutor/TutorDashboard';
import StudentDashboard from './page/Students/StudentDashboard';
import LoginForm from './components/Home/LoginForm';
import Header from './components/Header/index';
import Auth from './page/Auth/Index';

function App() {
  const userType= localStorage.getItem('userType');
  console.log('userType in App.js: ',userType);
  return (
    <Router>
      <Header />
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
        <Route exact path="/tutor-profile" element={<TutorProfile />} />
        <Route exact path="/student-profile"  element={<StudentProfile />} />
      </Routes>
    </Router>
  );
}

export default App;

