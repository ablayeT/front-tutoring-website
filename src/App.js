import { React } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PrivateRoute from './components/Auth/PrivateRoute';
import { AuthProvider } from './components/Auth/AuthContext/AuthContext';
import Home from './page/Home/Home';
import TutorDashboard from './page/Tutors/TutorDashboard';
import StudentDashboard from './page/Students';
import Header from './components/Header/Header';
import Auth from './page/Auth/Auth';
import Contact from './page/Contacts/Contat';
import Footer from './components/Footer/Footer';
import AllSessions from './page/Courses/AllSessions/AllSessions';

function App() {
  return (
    <Router>
      <AuthProvider>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/courses" element={<AllSessions />} />
          <Route
            path="/tutor-dashboard/*"
            element={<PrivateRoute element={<TutorDashboard />} />}
          />
          <Route
            path="/student-dashboard/*"
            element={<PrivateRoute element={<StudentDashboard />} />}
          />
        </Routes>
        <Footer />
      </AuthProvider>
    </Router>
  );
}

export default App;
