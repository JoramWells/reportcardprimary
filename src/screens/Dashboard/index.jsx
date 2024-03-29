/* eslint-disable import/no-extraneous-dependencies */
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PropTypes from 'prop-types';
import DashboardIcon from '@mui/icons-material/Dashboard';

import LayersIcon from '@mui/icons-material/Layers';
import SchoolIcon from '@mui/icons-material/School';
import BorderOuterIcon from '@mui/icons-material/BorderOuter';
import AbcIcon from '@mui/icons-material/Abc';
import BoyIcon from '@mui/icons-material/Boy';
import {
  Collapse,
  ListItemButton, ListItemIcon, ListItemText, ListSubheader, Box,
  Toolbar, List, Typography, Badge, Container, Grid,
} from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
import AssignmentIcon from '@mui/icons-material/Assignment';
import { ExpandLess, ExpandMore } from '@material-ui/icons';
import { useState } from 'react';

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    '& .MuiDrawer-paper': {
      position: 'relative',
      whiteSpace: 'nowrap',
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      boxSizing: 'border-box',
      ...(!open && {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
          width: theme.spacing(9),
        },
      }),
    },
  }),
);

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function Dashboard({ children }) {
  const location = useLocation();
  const { pathname } = location;

  const [open, setOpen] = useState(true);

  const [studentOpen, setStudentOpen] = useState(false);
  const [systemOpen, setSystemOpen] = useState(false);

  const navigate = useNavigate();
  const toggleDrawer = () => {
    setOpen(!open);
  };

  const handleSystemOpen = () => {
    setSystemOpen(!systemOpen);
  };

  const handleStudentOpen = () => {
    setStudentOpen(!studentOpen);
  };

  // main list
  const mainListItems = (
    <>
      <ListItemButton selected={pathname === '/'}>
        <ListItemIcon>
          <DashboardIcon sx={{ color: pathname === '/' && '#349EFF' }} />
        </ListItemIcon>
        <ListItemText
          primary={(
            <span style={{
              color: pathname === '/' && '#349EFF',
            }}
            >
              Dashboard
            </span>
)}
          onClick={() => navigate('/')}
        />
      </ListItemButton>

      {/* class */}
      <ListItemButton selected={pathname === '/classes' || pathname === '/add-class'} onClick={() => navigate('/classes')}>
        <ListItemIcon>
          <BoyIcon />
        </ListItemIcon>
        <ListItemText primary="Classes" />
      </ListItemButton>

      {/* subject */}
      <ListItemButton onClick={() => navigate('/subjects')} selected={pathname === '/subjects'}>
        <ListItemIcon>
          <LayersIcon sx={{ color: pathname === '/subjects' && '#349EFF' }} />
        </ListItemIcon>
        <ListItemText
          primary={(
            <p style={{
              color: pathname === '/add-subject' && '#349EFF',
              padding: '0',
              margin: '0',
            }}
            >
              Subjects
            </p>
)}
          onClick={() => navigate('/')}
        />
      </ListItemButton>

      {/* students */}
      <ListItemButton
        onClick={handleStudentOpen}
        selected={
          pathname === '/add-student'
        || pathname.startsWith('/student-profile')
      || pathname.startsWith('/students')
}
      >
        <ListItemIcon>
          <SchoolIcon />
        </ListItemIcon>
        <ListItemText primary="Students" />
        {studentOpen ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={studentOpen} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton onClick={() => navigate('/students')} sx={{ pl: 4, pt: 0, pb: 0 }}>
            <ListItemIcon />
            <ListItemText primary="View Students" />
          </ListItemButton>

        </List>
      </Collapse>

      {/* streams */}
      <ListItemButton selected={pathname === '/streams'}>
        <ListItemIcon>
          <DashboardIcon sx={{ color: pathname === '/streams' && '#349EFF' }} />
        </ListItemIcon>
        <ListItemText
          primary={(
            <p style={{
              color: pathname === '/streams' && '#349EFF',
              padding: '0',
              margin: '0',
            }}
            >
              Streams
            </p>
)}
          onClick={() => navigate('/streams')}
        />
      </ListItemButton>

      {/* system */}

      <ListItemButton onClick={handleSystemOpen}>
        <ListItemIcon>
          <BorderOuterIcon />
        </ListItemIcon>
        <ListItemText primary="System" />
        {systemOpen ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={systemOpen} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{
            pl: 4, pt: 0, pb: 0, fontSize: '10px',
          }}
          >
            <ListItemIcon />
            <ListItemText
              primary="ECD"
              sx={{
                fontSize: '10px',
                fontWeight: 'bold',
              }}
            />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4, pt: 0, pb: 0 }}>
            <ListItemIcon />
            <ListItemText primary="Primary" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4, pt: 0, pb: 0 }}>
            <ListItemIcon />
            <ListItemText primary="Secondary" />
          </ListItemButton>
        </List>
      </Collapse>

      {/* Streams */}
      <ListItemButton onClick={() => navigate('/terms')}>
        <ListItemIcon>
          <AbcIcon />
        </ListItemIcon>
        <ListItemText primary="Terms" />
      </ListItemButton>

      <ListItemButton selected={pathname === '/add-teacher' || pathname === '/teacher'} onClick={() => navigate('/teacher')}>
        <ListItemIcon>
          <BoyIcon />
        </ListItemIcon>
        <ListItemText primary="Teachers" />
      </ListItemButton>

    </>
  );

  const secondaryListItems = (
    <>
      <ListSubheader component="div" inset>
        Saved reports
      </ListSubheader>
      <ListItemButton onClick={() => navigate('/report1')}>
        <ListItemIcon>
          <AssignmentIcon />
        </ListItemIcon>
        <ListItemText primary="Generate Report 1" />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <AssignmentIcon />
        </ListItemIcon>
        <ListItemText primary="Last quarter" />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <AssignmentIcon />
        </ListItemIcon>
        <ListItemText primary="Year-end sale" />
      </ListItemButton>
    </>
  );

  return (
    <ThemeProvider theme={defaultTheme}>
      <Box sx={{ display: 'flex', margin: '0', height: '100vh' }}>
        <CssBaseline />

        <AppBar
          position="absolute"
          open={open}
          style={{
            backgroundColor: '#291749',
          }}
        >
          <Toolbar
            sx={{
              pr: '24px', // keep right padding when drawer closed
            }}
          >
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer}
              sx={{
                marginRight: '36px',
                ...(open && { display: 'none' }),
              }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              sx={{ flexGrow: 1 }}
              onClick={() => navigate('/')}
            >
              Dashboard
            </Typography>

            <IconButton color="inherit">
              <Badge badgeContent={4} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={open}>
          <Toolbar
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              px: [1],
            }}
          >
            <IconButton onClick={toggleDrawer}>
              <ChevronLeftIcon />
            </IconButton>
          </Toolbar>
          <Divider />
          <List component="nav">
            {mainListItems}
            <Divider sx={{ my: 1 }} />
            {secondaryListItems}
          </List>
        </Drawer>
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) => (theme.palette.mode === 'light'
              ? theme.palette.grey[100]
              : theme.palette.grey[900]),
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
          }}
        >
          <Toolbar />
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={3}>
              {/* Chart */}
              {children}
            </Grid>
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

Dashboard.propTypes = {
  // eslint-disable-next-line react/require-default-props
  children: PropTypes.node,
};
