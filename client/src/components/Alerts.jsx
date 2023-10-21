import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Alert } from '@mui/material';
import { clearAlert } from '../redux/slices/authSlice';
import { useDispatch, useSelector } from 'react-redux';
import { LinearProgress } from '@mui/material';

const Alerts = ({ type, text }) => {
  const dispatch = useDispatch();
  const { error } = useSelector((state) => state.auth);

  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let timer;
    if (error) {
      let progressValue = 1;
      setProgress(progressValue);

      timer = setInterval(() => {
        progressValue += 1;
        setProgress(progressValue);
        if (progressValue >= 100) {
          clearInterval(timer);
          dispatch(clearAlert());
        }
      }, 50); // Adjust the interval value to control the speed of the progress bar
    }

    return () => {
      clearInterval(timer); // Clean up the timer if component unmounts
    };
  }, [dispatch, error]);

  return (
    <Alert severity={type} sx={{ width: '100%' }}>
      {text}
      <LinearProgress variant="determinate" value={progress} />
    </Alert>
  );
};

Alerts.propTypes = {
  type: PropTypes.oneOf(['success', 'error']).isRequired,
  text: PropTypes.string.isRequired,
};

export default Alerts;
