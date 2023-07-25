import React from 'react';
import ThemeToggleButton from '../components/ThemeToggleButton';
import { Container, Typography, Box } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';

import { useGetUserDetailsQuery } from '../services/authService';

const Test = () => {
  const { userInfo } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  // automatically authenticate user if token is found

  const { data, isFetching } = useGetUserDetailsQuery('userDetails', {
    // perform a refetch every 15mins
    pollingInterval: 900000,
  });

  console.log(data); // user object

  return (
    <Container component="main">
      <ThemeToggleButton />
    </Container>
  );
};

export default Test;
