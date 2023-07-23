//forgot password

import {
  Container,
  Typography,
  TextField,
  FormControlLabel,
  Button,
  Grid,
  Link,
  Box,
} from '@mui/material';

import { forgotPassword } from '../redux/actions/authActions';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';

const ForgotPassword = () => {
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    dispatch(forgotPassword(data));
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography component="h1" variant="h5">
          Forgot Password
        </Typography>
        <Box
          component="form"
          sx={{ mt: 3 }}
          onSubmit={handleSubmit(onSubmit)}
        >
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            {...register('email')}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Send Email
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default ForgotPassword;
