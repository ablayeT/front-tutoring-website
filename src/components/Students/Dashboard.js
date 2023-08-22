import { useEffect, useState } from 'react';
import { Route, Routes, NavLink } from 'react-router-dom';
import Profile from './profileManager';
import CssBaseline from '@mui/material/CssBaseline';
import Sessions from './Sessions';
import { Box, Typography, List, Stack, } from '@mui/material';
import ListItem from '@mui/material/ListItem';
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
import { styled, useTheme } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import Image from '../Image';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CastForEducationIcon from '@mui/icons-material/CastForEducation';
import api from '../../services/api';

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
  const theme = useTheme();
  const [profileInfos, setProfileInfos] = useState()
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

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
        // console.error(error);
      }
    };
    fetchProfileData();
  }, []);
console.log('prfileInfos : ',profileInfos)
  return (
    <Box display='flex' border='1px solid lightgray' sx={{marginTop:'80px'}} >
       <CssBaseline />
       <AppBar position='fixed' sx={{marginTop:'5rem', backgroundColor:'#ffe19c', color:'#4a4a49'}} open={open}>
        <Toolbar sx={{background: 'transparent'}}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>

          <Box sx={{display:'flex', justifyContent:'space-between', border:'1px solid red', width:'100%', height:'100%'}}>
          <Typography variant="h6" noWrap component="div">
            Tableau de bord 
          </Typography>
          <Stack>
          <Image imageUrl={'profileData.profile.imageUrl'} alt='ProfileImage'   width= '100%' height= '100%'/>
          </Stack>
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
        <List>
            <ListItem sx={{display:'block', flexDirection:'column'}} disablePadding>
              <ListItemButton sx={{minHeight:48, justifyContent: open ? "initial" :  "center", px:2.5}} >
                <ListItemIcon>
                   <AccountCircleIcon /> 
                </ListItemIcon>
                <NavLink to='profile' display='flex'>
                <ListItemText primary='Profil' sx={{listStyle:'none'}} />
                </NavLink>
              </ListItemButton >
              <ListItemButton sx={{display:'flex'}}>
                <ListItemIcon>
                   <CastForEducationIcon /> 
                </ListItemIcon>
                <NavLink to="sessions" display='flex'>
                <ListItemText primary='Sessions' />
                </NavLink>
              </ListItemButton>
            </ListItem>
       
        </List>
        <Divider />
       
      </Drawer>
      {/* <Box flex='0 0 20%' backgroundColor='#FFA500'  padding='20px'>
        <Box>
      <h1>Tableau de bord l'étudiant</h1>
      <nav>
        <ul>
          <li>
            <NavLink to="profile">Profil</NavLink>
          </li>
          <li>
            <NavLink to="sessions">Sessions</NavLink>
          </li>

        </ul>
      </nav>
      </Box>
      </Box> */}
        
      <Main  flex='1' padding='20px' open={open}>
      <DrawerHeader />
      <Routes>
        <Route path="profile" element={<Profile profileInfos={profileInfos} />} />
        <Route path="sessions" element={<Sessions />} />
        {/* <Route path="/student-dashboard/create-session" element={<CreateSession />} /> */}
      </Routes>
      <Typography paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non
          enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus
          imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus.
          Convallis convallis tellus id interdum velit laoreet id donec ultrices.
          Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
          adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra
          nibh cras. Metus vulputate eu scelerisque felis imperdiet proin fermentum
          leo. Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis
          feugiat vivamus at augue. At augue eget arcu dictum varius duis at
          consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa
          sapien faucibus et molestie ac.
        </Typography>
        <Typography paragraph>
          Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper
          eget nulla facilisi etiam dignissim diam. Pulvinar elementum integer enim
          neque volutpat ac tincidunt. Ornare suspendisse sed nisi lacus sed viverra
          tellus. Purus sit amet volutpat consequat mauris. Elementum eu facilisis
          sed odio morbi. Euismod lacinia at quis risus sed vulputate odio. Morbi
          tincidunt ornare massa eget egestas purus viverra accumsan in. In hendrerit
          gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem
          et tortor. Habitant morbi tristique senectus et. Adipiscing elit duis
          tristique sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis
          eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla
          posuere sollicitudin aliquam ultrices sagittis orci a.
        </Typography>
      </Main>
    </Box>
  );
};

export default Dashboard;
