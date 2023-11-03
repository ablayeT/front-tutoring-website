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
import { Box } from '@mui/material';
import ProfileManager from '../src/components/Students/profileManager';
import Sessions from '../src/components/Students/SessionManager/MySessions/MySessions';
import SearchResults from '../src/components/Students/SearchResults/SearchResults';
import DashboardHomePage from '../src/components/DashboardHomePage';

function App() {
  return (
    <Box
      backgroundColor="white"
      paddingTop="7rem"
      paddingBottom="5rem"
      height="100%"
      width="100%"
      minWidth="10%"
    >
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
              path="/student-dashboard"
              element={<PrivateRoute element={<StudentDashboard />} />}
            >
              <Route path="profile" element={<ProfileManager />} />
              <Route path="sessions" element={<Sessions />} />
              <Route path="search" element={<SearchResults />} />
              <Route path="" element={<DashboardHomePage />} />
            </Route>
          </Routes>
          <Footer />
        </AuthProvider>
      </Router>
    </Box>
  );
}

export default App;
