import {React, useEffect, useState} from 'react';
import { Route, Routes, NavLink } from 'react-router-dom';
import Profile from './ProfileManager';
import CreateSession from './SessionManager/CreateSession'
import Sessions from './SessionManager/Sessions';
import EditProfile from './ProfileManager/EditProfile'
import { Box, Typography} from '@mui/material';
import Image from '../Image';
import api from '../../services/api';
import TutorProfileForm from './ProfileManager/TutorProfileForm';

function Dashboard () {
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
console.log('userData in Dashboard:',userData);

if (isLoading) {
  return <Typography>Loading</Typography>;
}

  return (
    <Box display='flex' border='1px solid lightgray' borderRadius='30px' margin='25px' height='100vh' >
      <Box flex='0 0 20%' backgroundColor='#FFA500' borderRadius='30px 0 0 30px' padding='20px' >
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
