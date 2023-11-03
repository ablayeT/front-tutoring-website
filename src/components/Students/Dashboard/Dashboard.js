import { Route, Routes } from 'react-router-dom';
import ProfileManager from '../profileManager/ProfileManager';
import CssBaseline from '@mui/material/CssBaseline';
import Sessions from '../SessionManager/MySessions';
import { Box } from '@mui/material';

import SearchResults from '../SearchResults';
import AppBarDashboard from '../../AppBarDashboard';
import DashboardHomePage from '../../DashboardHomePage';

function Dashboard() {
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
          <Route path="profile" element={<ProfileManager />} />
          <Route path="sessions" element={<Sessions />} />
          <Route path="search" element={<SearchResults />} />
          <Route path="/" element={<DashboardHomePage />} />
        </Routes>
      </Box>
    </Box>
  );
}

export default Dashboard;
