import { Alert } from '@mui/material';

const Alerts = ({ type, text }) => {
  return (
    <Alert severity={type} sx={{ width: '100%' }}>
      {text}
    </Alert>
  );
};

export default Alerts;
