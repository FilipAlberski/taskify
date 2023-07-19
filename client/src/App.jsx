import { RouterProvider } from 'react-router-dom';
import router from './utils/router';

//theme
import { darkTheme, lightTheme } from './utils/theme.js';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

//redux
import { useSelector } from 'react-redux';

function App() {
  const uiTheme = useSelector((state) => state.ui.theme);

  return (
    <ThemeProvider
      theme={uiTheme === 'dark' ? darkTheme : lightTheme}
    >
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
