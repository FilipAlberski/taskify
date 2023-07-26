import React, { useState } from 'react';
import { Button, Box, Drawer } from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Typography from '@mui/material/Typography';
import { Resizable } from 'react-resizable';

const drawerWidth = 200; // Initial width of the drawer

const SharedLayout = () => {
  const [drawerWidth, setDrawerWidth] = useState(200); // Initial state of the drawer width

  const handleResize = (event, { size }) => {
    setDrawerWidth(size.width);
  };

  const renderDrawerContent = () => {
    if (drawerWidth < 150) {
      // Small size: show only icons
      return (
        <div>
          <Button onClick={() => setDrawerWidth(200)}>
            <ChevronRightIcon />
          </Button>
          {/* Add other small-size icons here */}
        </div>
      );
    } else {
      // Large size: show icons and text
      return (
        <div>
          <Button onClick={() => setDrawerWidth(50)}>
            <ChevronLeftIcon />
          </Button>
          {/* Add other large-size icons and text here */}
          <Typography variant="h6">Drawer</Typography>
        </div>
      );
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
      }}
    >
      <Resizable
        width={drawerWidth}
        height={Infinity}
        onResize={handleResize}
        minConstraints={[50, Infinity]}
        maxConstraints={[400, Infinity]}
      >
        <Drawer
          variant="permanent"
          sx={{
            width: drawerWidth,
            flexShrink: 0,
          }}
          classes={{
            paper: {
              width: drawerWidth,
            },
          }}
          anchor="left"
        >
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              padding: '8px 16px',
              justifyContent: 'flex-end',
            }}
          >
            {renderDrawerContent()}
          </Box>
        </Drawer>
      </Resizable>
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
