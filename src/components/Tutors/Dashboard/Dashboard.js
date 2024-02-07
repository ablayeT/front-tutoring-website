// import { React, useState } from 'react';
// import { Route, Routes } from 'react-router-dom';
// import ProfileManager from '../ProfileManager/ProfileManager';
// import CreateSession from '../SessionManager/CreateSession/CreateSession';
// import Sessions from '../SessionManager/Sessions/Sessions';

// import { Box, Typography } from '@mui/material';
// import CssBaseline from '@mui/material/CssBaseline';

// import { useStyles } from './Styles';
// import ReservedSessions from '../SessionManager/ReservedSessions/ReservedSessions';
// import AppBarDashboard from '../../AppBarDashboard';
// import DashboardHomePage from '../../DashboardHomePage';

// function Dashboard() {
//   const { classes } = useStyles();
//   const [isLoading, setIsLoading] = useState(true);
//   const [open, setOpen] = useState(false);

//   return (
//     <Box className={classes.dashboard}>
//       <CssBaseline />
//       <AppBarDashboard />
//       <Box open={open} width="100%">
//         <Box sx={{ textAlign: 'left' }}>
//           <Routes>
//             <Route path="profile" element={<ProfileManager />} />

//             <Route path="sessions" element={<Sessions />} />
//             <Route path="create-session" element={<CreateSession />} />
//             <Route path="reserved-sessions" element={<ReservedSessions />} />
//             <Route path="/" element={<DashboardHomePage />} />
//           </Routes>
//         </Box>
//       </Box>
//     </Box>
//   );
// }

// export default Dashboard;
