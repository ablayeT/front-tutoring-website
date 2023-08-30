import {React, useState} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PrivateRoute from './components/Home/PrivateRoute'
import {AuthProvider}  from './components/Home/AuthContext';
import Home from './page/Home/index';
import TutorDashboard from './page/Tutor/TutorDashboard';
import StudentDashboard from './page/Students/StudentDashboard';
import Header from './components/Header/index';
import Auth from './page/Auth/Index';  
import Contact from './page/Contacts/Contat';
import Footer from './components/Footer/index'

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
  
    <Router>
   <AuthProvider>
   <Header isLoggedIn={isLoggedIn} handleLogin={handleLogin}  />
      <Routes>
        <Route exact path="/" element={<Home />} /> 
        <Route path="/contact" element={<Contact/>} />
        <Route  path="/auth" element={<Auth />} /> 
        <Route path="/tutor-dashboard/*" element={<PrivateRoute element={<TutorDashboard />} />} />      
        <Route path="/student-dashboard/*" element={<PrivateRoute element={<StudentDashboard />} />} />
      </Routes>
      <Footer/>
      </AuthProvider>
    </Router>
   
  
  );
}

export default App;

