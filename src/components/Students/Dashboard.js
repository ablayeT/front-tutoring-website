import React from 'react';
import { Route, Routes, NavLink } from 'react-router-dom';
import Profile from './profileManager';
// import CreateSession from './CreateSession'
import Sessions from './Sessions';


const Dashboard = () => {
  return (
    <div>
      <h1>Tableau de bord l'étudiant</h1>
      <nav>
        <ul>
          <li>
            <NavLink to="profile">Profil</NavLink>
          </li>
          <li>
            <NavLink to="sessions">Sessions</NavLink>
          </li>
          {/* <li>
            <NavLink to="/student-dashboard/s=create-session">Create a session</NavLink>
          </li> */}
        </ul>
      </nav>
      <Routes>
        <Route path="profile" element={<Profile />} />
        <Route path="sessions" element={<Sessions />} />
        {/* <Route path="/student-dashboard/create-session" element={<CreateSession />} /> */}
      </Routes>
    </div>
  );
};

export default Dashboard;
