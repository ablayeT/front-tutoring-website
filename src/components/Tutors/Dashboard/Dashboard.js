import { React, useEffect, useState } from 'react';
import { Route, Routes, NavLink } from 'react-router-dom';
import Profile from '../ProfileManager/ProfileManager';
import CreateSession from '../SessionManager/CreateSession/CreateSession';
import Sessions from '../SessionManager/Sessions/Sessions';
import EditProfile from '../ProfileManager/EditProfile/EditProfile';
import ListItemButton from '@mui/material/ListItemButton';
import {
  Box,
  ListItem,
  ListItemText,
  Typography,
  Divider,
  Stack,
} from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';

import api from '../../../services/api';
import { Main, AppBar, useStyles } from './Styles';
import ReservedSessions from '../SessionManager/ReservedSessions/ReservedSessions';
import Button from '../../Buttons/Button';

function Dashboard() {
  const { classes } = useStyles();
  const [profileData, setProfileData] = useState(null);
  const [userData, setUserData] = useState(null);
  const [sessionData, setSessionData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [open, setOpen] = useState(false);
  const [showMain, setShowMain] = useState(true);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userId = localStorage.getItem('userId');
        const userResponse = await api.get(`/users/profiles/${userId}`, {
          headers: {
            authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        });

        setUserData(userResponse.data);
      } catch (error) {
        console.error(error);
      }
    };

    const fetchProfileData = async () => {
      try {
        const userId = localStorage.getItem('userId');
        const profileResponse = await api.get(`/tutors/profile/${userId}`, {
          headers: {
            authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        });
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
        const response = await api.get('tutors/sessions', {
          headers: {
            authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        });

        setSessionData(response.data.sessions);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
      }
    };

    fetchTutorSessions();
  }, []);

  if (isLoading) {
    return <Typography>Loading</Typography>;
  }

  function handleMain() {
    setShowMain(false);
  }

  return (
    <Box>
      <CssBaseline />
      <AppBar className={classes.appBar} open={open}>
        <Divider sx={{ color: '#4a4a49' }} />
        <Typography variant="h5" color="white" textAlign="left">
          Tableau de bord
        </Typography>
        <Box className={classes.appBarDashboard}>
          <Box className={classes.appBarDashboardChildren}>
            <Stack onClick={handleMain}>
              <NavLink to="profile">
                <Button>Profil </Button>
              </NavLink>
            </Stack>
            <Stack onClick={handleMain}>
              <NavLink to="sessions" display="flex">
                <Button>Sessions</Button>
              </NavLink>
            </Stack>
          </Box>
          <Box className={classes.appBarDashboardChildren}>
            <Stack onClick={handleMain}>
              <NavLink to="create-session" display="flex">
                <Button>Créer Session</Button>
              </NavLink>
            </Stack>
            <Stack onClick={handleMain}>
              <NavLink to="reserved-sessions" display="flex">
                <Button>Réserver une Session</Button>
              </NavLink>
            </Stack>
          </Box>
        </Box>
      </AppBar>

      <Main open={open}>
        {!showMain ? (
          <Routes>
            <Route
              path="profile"
              element={
                <Profile profileData={profileData} userData={userData} />
              }
            />
            {/* <Route
              path="profile/edit"
              element={<EditProfile profileData={profileData} />}
            /> */}
            <Route
              path="sessions"
              element={<Sessions sessionData={sessionData} />}
            />
            <Route path="create-session" element={<CreateSession />} />
            <Route
              path="reserved-sessions"
              element={<ReservedSessions sessionData={sessionData} />}
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
              odio aenean sed adipiscing. Amet nisl suscipit adipiscing bibendum
              est ultricies integer quis. Cursus euismod quis viverra nibh cras.
              Metus vulputate eu scelerisque felis imperdiet proin fermentum
              leo. Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt
              lobortis feugiat vivamus at augue. At augue eget arcu dictum
              varius duis at consectetur lorem. Velit sed ullamcorper morbi
              tincidunt. Lorem donec massa sapien faucibus et molestie ac.
            </Typography>

            <Typography paragraph>
              Consequat mauris nunc congue nisi vitae suscipit. Fringilla est
              ullamcorper eget nulla facilisi etiam dignissim diam. Pulvinar
              elementum integer enim neque volutpat ac tincidunt. Ornare
              suspendisse sed nisi lacus sed viverra tellus. Purus sit amet
              volutpat consequat mauris. Elementum eu facilisis sed odio morbi.
              Euismod lacinia at quis risus sed vulputate odio. Morbi tincidunt
              ornare massa eget egestas purus viverra accumsan in. In hendrerit
              gravida rutrum quisque non tellus orci ac. Pellentesque nec nam
              aliquam sem et tortor. Habitant morbi tristique senectus et.
              Adipiscing elit duis tristique sollicitudin nibh sit. Ornare
              aenean euismod elementum nisi quis eleifend. Commodo viverra
              maecenas accumsan lacus vel facilisis. Nulla posuere sollicitudin
              aliquam ultrices sagittis orci a.
            </Typography>
          </Box>
        )}
      </Main>
    </Box>
  );
}

export default Dashboard;

{
  /* <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            top: '4rem',
            backgroundColor: '#ffe19c',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader sx={{ background: 'white' }}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? (
              <ChevronLeftIcon color="white" />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />

        <Divider />
      </Drawer> */
}

{
  /* <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton> */
}
{
  /* {userData && profileData && (
          <Box
            display="flex"
            justifyContent="space-between"
            gap="10px"
            flexWrap="wrap"
          >
            <Typography>
              Bienvenue, <br />
              {userData.user.first_name}{' '}
            </Typography>
            <Stack>
              <Image
                imageUrl={profileData.profile.imageUrl}
                alt="ProfileImage"
                width="50px"
                height="50px"
                object-fit="fill"
                borderRadius="50px"
              />
            </Stack>
          </Box>
        )} */
}
