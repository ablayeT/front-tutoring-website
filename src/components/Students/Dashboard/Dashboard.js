import { useEffect, useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Profile from '../profileManager/ProfileManager';
import CssBaseline from '@mui/material/CssBaseline';
import Sessions from '../SessionManager/MySessions';
import { Box, Typography } from '@mui/material';

import api from '../../../services/api';
import SearchResults from '../SearchResults/Searchresults';
import { Main } from './Styles';
import AppBarDashboard from '../../AppBarDashboard';
import SearchComponent from '../../Search';
import Toolbar from '@mui/material/Toolbar';
import AppBar from '@mui/material/AppBar';

function Dashboard() {
  const [profileInfos, setProfileInfos] = useState();
  const [userInfos, setUserInfos] = useState();
  const [showMain, setShowMain] = useState(true);
  // const navigate = useNavigate();

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

  function handleMain() {
    setShowMain(false);
  }

  return (
    <Box
      display="flex"
      flexDirection="column"
      border="1px solid yellow"
      minHeight="100vh"
    >
      <CssBaseline />

      <AppBarDashboard handleMain={handleMain} />

      <Main flex="1" padding="20px">
        {!showMain ? (
          <Routes>
            <Route
              path="profile"
              element={
                <Profile profileInfos={profileInfos} userInfos={userInfos} />
              }
            />
            <Route path="sessions" element={<Sessions />} />
            <Route path="/search/:query" element={<SearchResults />} />
          </Routes>
        ) : (
          <Box>
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
  /* <AppBar
        position="fixed"
        sx={{
          height: '5rem',
          top: '5rem',
          backgroundColor: '#ffe19c',
          color: '#4a4a49',
        }}
        open={open}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
         
        </Toolbar>
      </AppBar> */
}
/** */

{
  /* <Drawer
sx={{
  width: drawerWidth,
  flexShrink: 0,
  '& .MuiDrawer-paper': {
    width: drawerWidth,
    boxSizing: 'border-box',
    marginTop: '5rem',
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
<List>
  <ListItem
    sx={{
      display: 'block',
      listStyle: 'none',
      flexDirection: 'column',
    }}
    disablePadding
  >
    <ListItemButton
      onClick={handleMain}
      sx={{
        minHeight: 48,
        justifyContent: open ? 'initial' : 'center',
        px: 2.5,
      }}
    >
      <ListItemIcon>
        <AccountCircleIcon />
      </ListItemIcon>
      <NavLink to="profile" display="flex">
        <ListItemText primary="Profil" sx={{ listStyle: 'none' }} />
      </NavLink>
    </ListItemButton>
    <ListItemButton
      onClick={handleMain}
      sx={{
        display: 'flex',
        minHeight: 48,
        justifyContent: open ? 'initial' : 'center',
        px: 2.5,
      }}
    >
      <ListItemIcon>
        <CastForEducationIcon />
      </ListItemIcon>
      <NavLink to="sessions" display="flex">
        <ListItemText primary="Sessions" />
      </NavLink>
    </ListItemButton>
    <ListItemButton
      onClick={handleMain}
      sx={{
        display: 'flex',
        minHeight: 48,
        justifyContent: open ? 'initial' : 'center',
        px: 2.5,
      }}
    >
      <ListItemIcon>
        <CastForEducationIcon />
      </ListItemIcon>
      <NavLink to="sessions" display="flex">
        <ListItemText primary="Mes tuteurs" />
      </NavLink>
    </ListItemButton>
  </ListItem>
</List>
<Divider />
</Drawer> */
}
