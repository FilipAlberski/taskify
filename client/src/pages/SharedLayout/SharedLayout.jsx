import React, { useState } from 'react';
import { Box, AppBar, IconButton } from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Typography from '@mui/material/Typography';

const drawerWidth = 200; // Initial width of the drawer
const closedDrawerWidth = 60; // Width of the drawer when closed

const SharedLayout = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(true); // Initial state of the drawer (open)

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const getDrawerWidth = () => {
    return isDrawerOpen ? drawerWidth : closedDrawerWidth;
  };

  return (
    <Box
      sx={{
        display: 'flex',
      }}
    >
      <Box
        sx={{
          width: getDrawerWidth(),
          flexShrink: 0,
          transition: 'width 0.2s',
          backgroundColor: 'red',
          height: '100vh',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            padding: '8px 16px',
            justifyContent: 'flex-end',
          }}
        >
          {isDrawerOpen ? (
            <IconButton onClick={toggleDrawer}>
              <ChevronLeftIcon />
            </IconButton>
          ) : (
            <IconButton onClick={toggleDrawer}>
              <ChevronRightIcon />
            </IconButton>
          )}
        </Box>
        {isDrawerOpen && (
          <Box sx={{ padding: '8px 16px' }}>
            {/* Add other large-size icons and text here */}
            <Typography variant="h6">Drawer</Typography>
            <Typography>essa</Typography>
          </Box>
        )}
      </Box>
      <AppBar
        sx={{
          left: getDrawerWidth(),
          transition: 'left 0.2s',
        }}
      >
        teteststetsetesst
      </AppBar>
      <Box
        sx={{
          flexGrow: 1,
          padding: 3,
        }}
      >
        {/* Add your main content here */}
      </Box>
    </Box>
  );
};

export default SharedLayout;
