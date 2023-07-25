import { useSelector, useDispatch } from 'react-redux';
import { useGetUserDetailsQuery } from '../services/authService';

import {
  Button,
  Typography,
  Container,
  Box,
  CircularProgress,
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { setCredentials } from '../redux/slices/authSlice';

import { Outlet } from 'react-router-dom';
import { useEffect } from 'react';

const ProtectedRoute = () => {
  const { userInfo } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  // automatically authenticate user if token is found
  const { data, isFetching } = useGetUserDetailsQuery('userDetails', {
    pollingInterval: 900000,
  });

  useEffect(() => {
    if (data) {
      dispatch(setCredentials(data));
    }
  }, [data, dispatch]);

  if (isFetching)
    return (
      <Container component="main" maxWidth="xs">
        <Box>
          <CircularProgress />
        </Box>
      </Container>
    );

  if (!userInfo) {
    return (
      <Container component="main" maxWidth="xs">
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          mt={8}
        >
          <LockOutlinedIcon />
          <Typography component="h1" variant="h5">
            Unauthorized
          </Typography>
          <Button
            component={RouterLink}
            to="/login"
            variant="contained"
            color="primary"
          >
            Login
          </Button>
        </Box>
      </Container>
    );
  }

  return <Outlet />;
};

export default ProtectedRoute;
