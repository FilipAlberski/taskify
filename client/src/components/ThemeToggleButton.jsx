import { useDispatch, useSelector } from 'react-redux';

import { toggleTheme } from '../redux/slices/uiSlice.js';

import { IconButton } from '@mui/material';
import Brightness2Icon from '@mui/icons-material/Brightness2'; //dark
import Brightness5Icon from '@mui/icons-material/Brightness5'; //light

const ThemeToggleButton = () => {
  const dispatch = useDispatch();
  const uiTheme = useSelector((state) => state.ui.theme);
  return (
    <IconButton
      onClick={() => {
        dispatch(toggleTheme());
      }}
      color="inherit"
    >
      {uiTheme === 'dark' ? <Brightness2Icon /> : <Brightness5Icon />}
    </IconButton>
  );
};

export default ThemeToggleButton;
