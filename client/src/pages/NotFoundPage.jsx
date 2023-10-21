import React from 'react';

import {
  Box,
  Typography,
  Button,
  Container,
  Grid,
  Paper,
} from '@mui/material';

const NotFoundPage = () => {
  return (
    <Container variant="main">
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper>
            <Box>
              <Typography variant="h1">404</Typography>
              <Typography variant="h2">Page Not Found</Typography>
              <Typography variant="body1">
                The page you are looking for does not exist.
              </Typography>
              <Button href="/" variant="contained">
                Go Home
              </Button>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default NotFoundPage;
