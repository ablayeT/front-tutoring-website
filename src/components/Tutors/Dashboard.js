import {React, useEffect, useState} from 'react';
import { Route, Routes, NavLink } from 'react-router-dom';
import Profile from './ProfileManager';
import CreateSession from './SessionManager/CreateSession'
import Sessions from './SessionManager/Sessions';
import EditProfile from './ProfileManager/EditProfile'
import { Box, List, ListItem, ListItemIcon, ListItemText, Typography} from '@mui/material';
import Image from '../Image';
import api from '../../services/api';
import TutorProfileForm from './ProfileManager/TutorProfileForm';
import { makeStyles } from 'tss-react/mui';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CastForEducationIcon from '@mui/icons-material/CastForEducation';
import CreateNewFolderIcon from '@mui/icons-material/CreateNewFolder';

const useStyles = makeStyles()((theme) =>{
  return {
  // navlinks: {
  //   margingLeft: theme.spacing(2),
  //   display: 'flex',
  //   flexWrap:'wrap',
  //   gap:'15px',
  //   [theme.breakpoints.down('md')]: {
  //     display: 'none',
  //   },
  // },
  link: {
    display:'flex',
    alignItems:'center',
    textDecoration: 'none',
    color: 'black',
    fontSize: '20px',
    margingLeft: theme.spacing(20),
    border:'1px solid  none',
    borderRadius: '10px',
    width: '100%',
    paddingLeft:'10px',
    "&:hover": {
      color: 'white',
      borderBottom: "1px solid brown",
      background: 'black',
    },
  },
  icons : {
    background : '#FFA500',
    color: 'black',
    border:'1px solid none',
    borderRadius: '5px'
  },
  
}
})


function Dashboard () {
  const {classes} = useStyles();
  const  [profileData, setProfileData] = useState(null);
  const [userData, setUserData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isProfileComplete, setIsProfileComplete] = useState(false);


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
console.log('profileData in Dashboard:',profileData);
// console.log('userData in Dashboard:',userData);

if (isLoading) {
  return <Typography>Loading</Typography>;
}

  return (
    <Box display='flex' border='1px solid lightgray' borderRadius='20px' margin='25px'  >
      <Box flex='0 0 20%' backgroundColor='#FFA500' borderRadius='20px 0 0 20px' padding='20px' >
      <Box>
        <List>
          <ListItem  >
            <ListItemIcon  >
               < AccountCircleIcon className={classes.icons}  />          
            </ListItemIcon>
            <NavLink to="profile" className={classes.link}>
             <ListItemText primary='Profil' />   
             </NavLink>
          </ListItem>
          <ListItem>
          <ListItemIcon >
               < CastForEducationIcon  className={classes.icons}/>
            </ListItemIcon>
            <NavLink to="sessions"className={classes.link} >
             <ListItemText  primary='Sessions de tutorat' />
              </NavLink>
          </ListItem>
          <ListItem>
            <ListItemIcon >
               < CreateNewFolderIcon className={classes.icons} />
            </ListItemIcon>
            <NavLink to="create-session" className={classes.link}>
             <ListItemText  primary='Créer une session' />
              </NavLink>
          </ListItem>
        </List>
      </Box>
      
      </Box>

      <Box flex='1' padding='20px'>
       {isProfileComplete ? <TutorProfileForm /> 
       :(<Routes>
        <Route path="profile" element={<Profile />} />
        <Route path="profile/edit" element={<EditProfile />} />
        <Route path="sessions" element={<Sessions />} />
        <Route path="create-session" element={<CreateSession />} />
      </Routes>)}
      </Box>
      <Box display="flex" gap='10px' margin='15px'>
        <Typography marginTop='30px'>Benvenue,  {userData.user.full_name}</Typography>
        <Box width='110px' height='110px'>
        <Image imageUrl={profileData.profile.imageUrl} alt='ProfileImage'   width= '100%' height= '100%'/>
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;           
