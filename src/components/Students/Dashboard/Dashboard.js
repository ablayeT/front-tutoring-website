import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Profile from '../profileManager/ProfileManager';
import CssBaseline from '@mui/material/CssBaseline';
import Sessions from '../SessionManager/MySessions';
import { Box, Container } from '@mui/material';

import api from '../../../services/api';
import SearchResults from '../SearchResults';
import AppBarDashboard from '../../AppBarDashboard';
import DashboardHomePage from '../../DashboardHomePage';

function Dashboard() {
  const [profileInfos, setProfileInfos] = useState();
  const [userInfos, setUserInfos] = useState();

  useEffect(() => {
    const fetchUserInfos = async () => {
      try {
        const userId = localStorage.getItem('userId');
        const userResponse = await api.get(`/users/profiles/${userId}`);

        setUserInfos(userResponse.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchUserInfos();
  }, []);

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const userId = localStorage.getItem('userId');
        console.log('userId in Dashboard:', userId);

        const response = await api.get(`/students/profile/${userId}`);

        setProfileInfos(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchProfileData();
  }, []);

  return (
    <Box display="flex" flexWrap="wrap" width="100%" minHeight="100vh">
      <CssBaseline />

      <AppBarDashboard />

      <Box
        sx={{
          display: 'flex',
          width: '100%',
          flexWrap: 'wrap',
        }}
      >
        <Routes>
          <Route
            path="profile"
            element={
              <Profile profileInfos={profileInfos} userInfos={userInfos} />
            }
          />
          <Route path="sessions" element={<Sessions />} />
          <Route path="search" element={<SearchResults />} />
          <Route path="/" element={<DashboardHomePage />} />
        </Routes>
      </Box>
    </Box>
  );
}

export default Dashboard;
