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
import StudentProfileManager from '../src/components/Students/profileManager';
import StudentSessions from '../src/components/Students/SessionManager/MySessions/MySessions';
import SearchResults from '../src/components/Students/SearchResults/SearchResults';
import DashboardHomePage from '../src/components/DashboardHomePage';
import CreateSession from './components/Tutors/SessionManager/CreateSession';
import ReservedSessions from './components/Tutors/SessionManager/ReservedSessions/ReservedSessions';
import TutorProfileManager from './components/Tutors/ProfileManager';
import TutorSessions from './components/Tutors/SessionManager/Sessions';
import { React } from 'react';

function App() {
  return (
    <Box
      backgroundColor="white"
      paddingTop="8rem"
      paddingBottom="5rem"
      height="100%"
      width="100%"
      fontStyle="normal"
      fontFamily="Nunito sans"
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
            >
              <Route path="profile" element={<TutorProfileManager />} />
              <Route path="sessions" element={<TutorSessions />} />
              <Route path="create-session" element={<CreateSession />} />
              <Route path="reserved-sessions" element={<ReservedSessions />} />
              <Route path="" element={<DashboardHomePage />} />
            </Route>
            <Route
              path="/student-dashboard"
              element={<PrivateRoute element={<StudentDashboard />} />}
            >
              <Route path="profile" element={<StudentProfileManager />} />
              <Route path="sessions" element={<StudentSessions />} />
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
