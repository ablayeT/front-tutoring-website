import {React, useState} from 'react';
import { Link, useNavigate} from 'react-router-dom';
import { AppBar, Box, Button,Toolbar, Typography, CssBaseline, IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material';
import { makeStyles } from 'tss-react/mui';
import MenuIcon from '@mui/icons-material/Menu';

const drawerWidth = 240;

const useStyles = makeStyles()((theme) =>{
  return {
  navlinks: {
    margingLeft: theme.spacing(2),
    display: 'flex',
    flexWrap:'wrap',
    gap:'15px',
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
  },
  header:{
    color:'black',
    background: '#FFA500',
  },
  logo: {
    flexGrow: 1,
    cursor: 'pointer',
  },
  link: {
    textDecoration: 'none',
    color: 'black',
    fontSize: '20px',
    margingLeft: theme.spacing(20),
    "&:hover": {
      color: 'white',
      borderBottom: "1px solid brown",
      background: 'black',
    },
  },
  drawer: {
    [theme.breakpoints.up('md')]: {
      display: 'none',
      background: '#FFA500',
    },
    width: drawerWidth,
    height: '100px',
    flexShrink: 0,
   
  },
  drawerPaper :{
    width: drawerWidth,
    height: '300px',
    background: 'FEFE00',
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}
})

function Header({isLoggedIn, handleLogout }) {
  const {classes} = useStyles();
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const userType = localStorage.getItem('userType');
  console.log('userType in Header: ',userType);

  const handleLogoutClick = () => {
    console.log('handleLogoutClick');
    if(isLoggedIn) {
      handleLogout();
    }

    // navigate('/');
  }
  

  return (
    <AppBar className={classes.header} position='static'>
      <CssBaseline />
      <Toolbar>
        <Typography variant='h4' className={classes.logo}>Logo</Typography>
        <Box className={classes.navlinks}>
        <Button component={Link} to="/" className={classes.link}>
              <ListItemText primary="Accueil" />
        </Button>
        <Button component={Link} to="/cours" className={classes.link}>
              <ListItemText primary="Cours" />
        </Button>
        <Button component={Link} to="/devenir-tuteur" className={classes.link}>
              <ListItemText primary="Devenir Tuteur" />
        </Button>      
        <Button component={Link} to="/contact" className={classes.link}>
              <ListItemText primary="Contact" />
        </Button> 
           {userType === 'Tutor' || userType === 'Student' ? (
        <Button component={Link} onClick={handleLogoutClick} to="/auth" className={classes.link}>
              <ListItemText primary="Connexion" />
        </Button> 
        ): (
          <Button component={Link} to="/auth" onClick={handleLogoutClick} className={classes.link}>
              <ListItemText primary="Déconnexion" />
        </Button>
        )}    
           </Box>
        <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
      </Toolbar>
    
    <Drawer
    className={classes.drawer}
    variant="temporary"
    anchor="right"
    open={mobileOpen}
    onClose={handleDrawerToggle}
    classes={{
      paper: classes.drawerPaper,
    }}
  >
    <List>
          <ListItem>
            <Button component={Link} to="/" className={classes.link}>
              <ListItemText primary="Accueil" />
            </Button>
          </ListItem>
          <ListItem>
            <Button component={Link} to="/cours" className={classes.link}>
              <ListItemText primary="Cours" />
            </Button>
          </ListItem>
          <ListItem>
            <Button component={Link} to="/devenir-tuteur" className={classes.link}>
              <ListItemText primary="Devenir Tuteur" />
            </Button>
          </ListItem>
          <ListItem>
            <Button component={Link} to="/contact" className={classes.link}>
              <ListItemText primary="Contact" />
            </Button>
          </ListItem>
          <ListItem>
          {userType === 'Tutor' || userType === 'Student' ? (
          <Button onClick={handleLogoutClick} className={classes.link}>
             <ListItemText primary="Déconnexion" />
          </Button>
                    ) : (
          <Button component={Link} to="/auth" onClick={handleLogoutClick} className={classes.link}>
             <ListItemText primary="Connexion" />
          </Button>
)}

          </ListItem>
        </List>
  </Drawer>
  </AppBar>
 
  );
}

export default Header;

