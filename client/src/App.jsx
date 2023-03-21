import { GlobalStyle, lightTheme, darkTheme } from "./globalStyles";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//redux

import { useSelector } from "react-redux";

//Pages
import { CreateTask, Tasks, Profile, Stats } from "./pages/dashboard";

import Landing from "./pages/landing/Landing";
import Error from "./pages/error/Error";
import Register from "./pages/register/Register";
import { ThemeProvider } from "styled-components";
function App() {
    //theme redux
    const theme = useSelector((state) => state.app.theme);

    const themeMode = theme === "light" ? lightTheme : darkTheme;

    return (
        <ThemeProvider theme={themeMode}>
            <GlobalStyle />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<div>dashboard</div>} />
                    <Route path="/landing" element={<Landing />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="*" element={<Error />} />
                </Routes>
            </BrowserRouter>
        </ThemeProvider>
    );
}

export default App;
