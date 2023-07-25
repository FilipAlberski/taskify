import React from 'react';
import ThemeToggleButton from '../components/ThemeToggleButton';
import { Container, Typography, Box } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';

import { useGetUserDetailsQuery } from '../services/authService';

const Test = () => {
  return (
    <Container component="main">
      <ThemeToggleButton />
    </Container>
  );
};

export default Test;
