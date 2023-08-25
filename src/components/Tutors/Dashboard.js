import {React, useEffect, useState} from 'react';
import { Route, Routes, NavLink } from 'react-router-dom';
import Profile from './ProfileManager';
import CreateSession from './SessionManager/CreateSession'
import Sessions from './SessionManager/Sessions';
import EditProfile from './ProfileManager/EditProfile'
import Toolbar from '@mui/material/Toolbar';
import ListItemButton from '@mui/material/ListItemButton';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import { Box, Stack,List, ListItem, ListItemIcon, ListItemText, Typography} from '@mui/material';
import Image from '../Image';
import api from '../../services/api';
import TutorProfileForm from './ProfileManager/TutorProfileForm';
import { styled, useTheme } from '@mui/material/styles';
import MuiAppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
// import { makeStyles } from 'tss-react/mui';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CastForEducationIcon from '@mui/icons-material/CastForEducation';
import CreateNewFolderIcon from '@mui/icons-material/CreateNewFolder';



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

function Dashboard () {
  // const {classes} = useStyles();
  const theme = useTheme();

  const  [profileData, setProfileData] = useState(null);
  const [userData, setUserData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isProfileComplete, setIsProfileComplete] = useState(false);
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

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
        if(profileResponse ===  null) {
          setIsProfileComplete(true);
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
// console.log('profileData in Dashboard:',profileData);
// console.log('userData in Dashboard:',userData);

if (isLoading) {
  return <Typography>Loading</Typography>;
}

  return (
    <Box display='flex'  height='100vh' sx={{marginTop:'80px'}}  >
      <CssBaseline />
      <AppBar position='fixed' sx={{marginTop:'4rem', backgroundColor:'#ffe19c', color:'#4a4a49'}} open={open}>
        <Toolbar >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            sx={{ mr: 2, ...(open && { display: 'none' })}}
          >
            <MenuIcon />
          </IconButton>

          <Box sx={{display:'flex', justifyContent:'space-between', width:'100%'}}>
          <Typography variant="h6" noWrap component="div">
            Tableau de bord 
          </Typography>
          {userData && profileData && (
          <Box display='flex' gap='10px'>
            <Typography>Bienvenue, <br/>{userData.user.first_name} </Typography>
            <Stack>
          <Image imageUrl={profileData.profile.imageUrl} alt='ProfileImage'   width= '50px' height= '50px'/>
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
            marginTop:'5rem',
            backgroundColor:'#ffe19c',
          },
          
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader sx={{background:'white'}}>
          <IconButton onClick={handleDrawerClose} >
            {theme.direction === 'ltr' ? <ChevronLeftIcon color='white' /> : <ChevronRightIcon/>}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List >
            <ListItem sx={{display:'block',listStyle:'none', flexDirection:'column'}} disablePadding>
              <ListItemButton  sx={{minHeight:48, justifyContent: open ? "initial" :  "center", px:2.5}} >
                <ListItemIcon>
                   <AccountCircleIcon /> 
                </ListItemIcon>
                <NavLink to='profile' display='flex'>
                <ListItemText primary='Profil' sx={{listStyle:'none'}} />
                </NavLink>
              </ListItemButton >
              <ListItemButton   sx={{display:'flex', minHeight:48, justifyContent: open ? "initial" :  "center", px:2.5}}>
                <ListItemIcon>
                   <CastForEducationIcon /> 
                </ListItemIcon>
                <NavLink to="sessions" display='flex'>
                <ListItemText primary='Sessions de tutorat' />
                </NavLink>
              </ListItemButton>
              <ListItemButton   sx={{display:'flex', minHeight:48, justifyContent: open ? "initial" :  "center", px:2.5}}>
                <ListItemIcon>
                   <CreateNewFolderIcon /> 
                </ListItemIcon>
                <NavLink to="create-session" display='flex'>
                <ListItemText primary='Créer une session' />
                </NavLink>
              </ListItemButton>
            </ListItem>
        </List>
        <Divider />
      </Drawer>
      <Main flex='1' padding='20px' open={open}>
       {isProfileComplete ? <TutorProfileForm /> 
       :(<Routes>
        <Route path="profile" element={<Profile profileData={profileData} userData={userData}/>} />
        <Route path="profile/edit" element={<EditProfile profileData={profileData} />} />
        <Route path="sessions" element={<Sessions />} />
        <Route path="create-session" element={<CreateSession />} />
      </Routes>)}
      </Main>
      <Box display="flex" gap='10px' margin='15px'>
        <Typography marginTop='30px'>Benvenue,  {userData.user.full_name}</Typography>
      </Box>
    </Box>
  );
};

export default Dashboard;           
