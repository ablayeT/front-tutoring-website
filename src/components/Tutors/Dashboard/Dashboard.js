import { React, useEffect, useState } from 'react';
import { Route, Routes, NavLink } from 'react-router-dom';
import ProfileManager from '../ProfileManager/ProfileManager';
import CreateSession from '../SessionManager/CreateSession/CreateSession';
import Sessions from '../SessionManager/Sessions/Sessions';

import { Box, Typography } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';

import api from '../../../services/api';
import { useStyles } from './Styles';
import ReservedSessions from '../SessionManager/ReservedSessions/ReservedSessions';
import AppBarDashboard from '../../AppBarDashboard';

function Dashboard() {
  const { classes } = useStyles();
  const [profileData, setProfileData] = useState(null);
  const [userData, setUserData] = useState(null);
  const [sessionData, setSessionData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [open, setOpen] = useState(false);
  const [showMain, setShowMain] = useState(true);
  const [sessions, setSessions] = useState([]);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userId = localStorage.getItem('userId');
        const userResponse = await api.get(`/users/profiles/${userId}`);

        setUserData(userResponse.data);
      } catch (error) {
        console.error(error);
      }
    };

    const fetchProfileData = async () => {
      try {
        const userId = localStorage.getItem('userId');
        const profileResponse = await api.get(`/tutors/profile/${userId}`);
        if (profileResponse === null) {
        }
        setProfileData(profileResponse.data);
      } catch (error) {
        console.error(error);
      }
    };

    const fetchData = async () => {
      setIsLoading(true);
      await Promise.all([fetchUserData(), fetchProfileData()]);
      setIsLoading(false);
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchTutorSessions = async () => {
      try {
        const response = await api.get('tutors/sessions');

        setSessionData(response.data.sessions);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
      }
    };

    fetchTutorSessions();
  }, []);

  const updateSessions = (newSession) => {
    setSessions([...sessions, newSession]);
  };

  function handleMain() {
    setShowMain(false);
  }
  if (isLoading) {
    return <Typography>Loading</Typography>;
  }

  return (
    <Box className={classes.dashboard}>
      <CssBaseline />
      <AppBarDashboard handleMain={handleMain} />

      <Box open={open} width="100%">
        {!showMain ? (
          <Routes>
            <Route
              path="profile"
              element={
                <ProfileManager profileData={profileData} userData={userData} />
              }
            />

            <Route
              path="sessions"
              element={<Sessions sessionData={sessionData} />}
            />
            <Route
              path="create-session"
              element={<CreateSession updateSessions={updateSessions} />}
            />
            <Route
              path="reserved-sessions"
              element={<ReservedSessions sessionData={sessions} />}
            />
          </Routes>
        ) : (
          <Box open={!open}>
            <Typography paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Rhoncus dolor purus non enim praesent elementum facilisis leo vel.
              Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit
              gravida rutrum quisque non tellus. Convallis convallis tellus id
              interdum velit laoreet id donec ultrices. Odio morbi quis commodo
            </Typography>

            <Typography paragraph>
              Consequat mauris nunc congue nisi vitae suscipit. Fringilla est
              ullamcorper eget nulla facilisi etiam dignissim diam. Pulvinar
              elementum integer enim neque volutpat ac tincidunt. Ornare
              suspendisse sed nisi lacus sed viverra tellus. Purus sit amet
              volutpat consequat mauris. Elementum eu facilisis sed odio morbi.
              Euismod lacinia at quis risus sed vulputate odio. Morbi tincidunt
              ornare
            </Typography>
          </Box>
        )}
      </Box>
    </Box>
  );
}

export default Dashboard;
