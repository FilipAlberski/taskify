import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link, Outlet } from 'react-router-dom';
import { Typography, Box, CircularProgress } from '@mui/material';

const ProtectedRoute = () => {
  const { userInfo, userToken, loading } = useSelector(
    (state) => state.auth
  );
  const [dataLoaded, setDataLoaded] = useState(false);

  useEffect(() => {
    if (!loading) {
      setDataLoaded(true);
    }
  }, [loading]);

  if (loading) {
    return (
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  if (!userInfo || !userToken) {
    if (dataLoaded) {
      return (
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component="h1" variant="h5">
            You need to be logged in to access this page.
          </Typography>
          <Link to="/login">Go to Login</Link>
        </Box>
      );
    } else {
      return null;
    }
  }

  return <Outlet />;
};

export default ProtectedRoute;
