import { useState } from 'react';
import AppBarDashboardSchema from './AppBarDashboard.schema';
import { AppBar, useStyles } from './style/AppBarDashboard.style';
import { Box, Button, Drawer } from '@mui/material';
import { NavLink } from 'react-router-dom';
import SearchComponent from '../Search';
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';

function AppBarDashboard({ handleMain }) {
  const { classes } = useStyles();
  const [mobileOpen, setMobileOpen] = useState(false);
  const userType = localStorage.getItem('userType');
  console.log('userType in appBar:', userType);

  const handleNewMain = () => {
    handleMain();
  };
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  return (
    <AppBar className={classes.appBar} open={open}>
      <Box
        className={
          userType === 'Tutor'
            ? classes.appBarTutorDashboard
            : classes.appBarStudentDashboard
        }
      >
        {AppBarDashboardSchema.map((item, index) => (
          <>
            <Box
              key={index}
              onClick={handleNewMain}
              className={classes.buttonBox}
            >
              <NavLink to={item.path}>
                <Button className={classes.button}>{item.label}</Button>
              </NavLink>
            </Box>

            <Drawer
              open={mobileOpen}
              conButton
              color="inherit"
              aria-label="open drawer"
              edge="right"
              onClick={handleDrawerToggle}
              className={classes.drawer}
            >
              <Box>
                <NavLink to={item.path}>
                  <Button className={classes.button}>{item.label}</Button>
                </NavLink>
              </Box>
            </Drawer>
          </>
        ))}
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="end"
          onClick={handleDrawerToggle}
          className={classes.menuButton}
        >
          <MoreVertIcon className={classes.menuIcon} />
        </IconButton>
      </Box>
      {userType === 'Student' ? (
        <Box textAlign="center" width="70%" border="1px solid yellow">
          <SearchComponent />
        </Box>
      ) : null}
    </AppBar>
  );
}
export default AppBarDashboard;
