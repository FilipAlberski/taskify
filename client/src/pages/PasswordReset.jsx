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

// import { resetPassword } from '../redux/actions/authActions';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import Alerts from '../components/Alerts';

import { useParams } from 'react-router-dom';

const PasswordReset = () => {
  const { userId, token } = useParams();

  const dispatch = useDispatch();

  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    // dispatch(resetPassword(data, userId, token));
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
        <Typography component="h1" variant="h5" p={2}>
          Reset Password
        </Typography>
        <Alerts />
        <Box
          component="form"
          sx={{ mt: 3 }}
          onSubmit={handleSubmit(onSubmit)}
        >
          <TextField
            margin="normal"
            required
            fullWidth
            id="password"
            label="New Password"
            name="password"
            autoComplete="password"
            {...register('password')}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="confirmPassword"
            label="Confirm New Password"
            name="confirmPassword"
            autoComplete="confirmPassword"
            {...register('confirmPassword')}
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Reset Password
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default PasswordReset;
