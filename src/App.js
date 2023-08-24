import {React, useState} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import PrivateRoute from './components/Home/PrivateRoute'
import { AuthProvider } from './components/Home/AuthContext';
import TutorProfile from './page/Tutor/TutorProfile';
import StudentProfile from './page/Students/StudentProfile';
import Home from './page/Home/Home';
import TutorDashboard from './page/Tutor/TutorDashboard';
import StudentDashboard from './page/Students/StudentDashboard';
import LoginForm from './components/Home/LoginForm';
import Header from './components/Header/index';
import Auth from './page/Auth/Index';  
import Contact from './page/Contacts/Contat';
import Footer from './components/Footer/Index'

function App() {
  const userType= localStorage.getItem('userType');
  console.log('userType in App.js: ',userType);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    console.log('handleLogin');
    setIsLoggedIn(true);
  };

  console.log('isLoggedIn :', isLoggedIn);
  
  return (
    <AuthProvider>
    <Router>
      <Header isLoggedIn={isLoggedIn} handleLogin={handleLogin}  />
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
      <Footer/>
    </Router>
    </AuthProvider>
  );
}

export default App;

