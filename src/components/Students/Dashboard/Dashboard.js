import { useEffect, useState } from 'react';
import { Route, Routes, NavLink } from 'react-router-dom';
import Profile from '../profileManager/ProfileManager';
import CssBaseline from '@mui/material/CssBaseline';
import Sessions from '../SessionManager/Sessions/Sessions';
import { Box, Typography, List, Stack } from '@mui/material';
import InputBase from '@mui/material/InputBase';
import ListItem from '@mui/material/ListItem';
import SearchIcon from '@mui/icons-material/Search';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import IconButton from '@mui/material/IconButton';
import Drawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { styled, useTheme, alpha } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import Image from '../../Assets/Image';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CastForEducationIcon from '@mui/icons-material/CastForEducation';
import api from '../../../services/api';

const drawerWidth = 220;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);

const Search = styled('div')(({ theme }) => ({
  position: 'relative',

  backgroundColor: alpha(theme.palette.common.white, 1),
  border: `2px solid rgba(255, 187, 51, 1)`,
  borderRadius: '0.6rem',
  '&:hover': {
    backgroundColor: 'rgba(240, 240, 240, 0.8)',
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: '50%',
  },
}));
const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));
const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

function Dashboard() {
  const theme = useTheme();
  const [profileInfos, setProfileInfos] = useState();
  const [userInfos, setUserInfos] = useState();
  const [open, setOpen] = useState(false);
  const [showMain, setShowMain] = useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    const fetchUserInfos = async () => {
      try {
        const userId = localStorage.getItem('userId');
        const userResponse = await api.get(`/users/profiles/${userId}`, {
          headers: {
            authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        });

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

        const response = await api.get(`/students/profile/${userId}`, {
          headers: {
            authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        });

        setProfileInfos(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchProfileData();
  }, []);
  // console.log('profileInfos : ',profileInfos)
  // console.log('userInfos in Dashboard :', userInfos)

  function handleMain() {
    setShowMain(false);
  }

  return (
    <Box display="flex" height="100vh" sx={{ marginTop: '80px' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ marginTop: '4rem', backgroundColor: '#ffe19c', color: '#4a4a49' }}
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

          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              width: '100%',
            }}
          >
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
              />
            </Search>
            {userInfos && profileInfos && (
              <Box display="flex" gap="10px">
                <Typography>
                  Bienvenue, <br />
                  {userInfos.user.first_name}{' '}
                </Typography>
                <Stack>
                  <Image
                    imageUrl={profileInfos.imageUrl}
                    alt="ProfileImage"
                    width="50px"
                    height="50px"
                  />
                </Stack>
              </Box>
            )}
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer
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
      </Drawer>

      <Main flex="1" padding="20px" open={open}>
        <DrawerHeader />
        {!showMain ? (
          <Routes>
            <Route
              path="profile"
              element={
                <Profile profileInfos={profileInfos} userInfos={userInfos} />
              }
            />
            <Route path="sessions" element={<Sessions />} />
            {/* <Route path="/student-dashboard/create-session" element={<CreateSession />} /> */}
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
