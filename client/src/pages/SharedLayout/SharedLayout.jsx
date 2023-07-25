import React from 'react';
import { Link } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Container,
  CssBaseline,
} from '@mui/material';

import { Outlet } from 'react-router-dom';

const drawerWidth = 240;

const appBarStyle = {
  zIndex: 1300, // Set the z-index to keep the AppBar above the drawer
};

const drawerStyle = {
  width: drawerWidth,
  flexShrink: 0,
};

const drawerPaperStyle = {
  width: drawerWidth,
};

const contentStyle = {
  flexGrow: 1,
  padding: '20px', // Adjust padding as needed
};

const SharedLayout = () => {
  return (
    <div style={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" style={appBarStyle}>
        <Toolbar>
          <Typography variant="h6" noWrap>
            My App
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        anchor="left"
        style={drawerStyle}
        classes={{
          paper: drawerPaperStyle,
        }}
      >
        <List>
          <ListItem button component={Link} to="/">
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem button component={Link} to="/about">
            <ListItemText primary="About" />
          </ListItem>
          <ListItem button component={Link} to="/contact">
            <ListItemText primary="Contact" />
          </ListItem>
        </List>
      </Drawer>
      <main style={contentStyle}>
        <Toolbar />
        <Container maxWidth="lg">
          <Outlet />
        </Container>
      </main>
    </div>
  );
};

export default SharedLayout;
