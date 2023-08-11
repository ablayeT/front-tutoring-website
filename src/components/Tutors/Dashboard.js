import React from 'react';
import { Route, Routes, NavLink } from 'react-router-dom';
import Profile from './ProfileManager';
import CreateSession from './SessionManager/CreateSession'
import Sessions from './SessionManager/Sessions';
import EditProfile from './ProfileManager/EditProfile'
import { Box} from '@mui/material';


function Dashboard () {


  return (
    <Box display='flex' border='1px solid red'>
      <Box flex='0 0 20%' backgroundColor='#FFA500' padding='20px' >
      <Box>
        <ul>
          <li>
            <NavLink to="profile">Profil</NavLink>
          </li>
          <li>
            <NavLink to="sessions" >Sessions de tutorat</NavLink>
          </li>
          <li>
            <NavLink to="create-session">Créer une session</NavLink>
          </li>
        </ul>
      </Box>
      
      </Box>

      <Box flex='1' padding='20px'>
        <Routes>
        <Route path="profile" element={<Profile />} />
        <Route path="profile/edit" element={<EditProfile />} />
        <Route path="sessions" element={<Sessions />} />
        <Route path="create-session" element={<CreateSession />} />
      </Routes>
      </Box>
    </Box>
  );
};

export default Dashboard;           
