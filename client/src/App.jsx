import { GlobalStyle, lightTheme, darkTheme } from "./globalStyles";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//Pages
import Dashboard from "./pages/dashboard/Dashboard";
import Landing from "./pages/landing/Landing";
import Error from "./pages/error/Error";
import Register from "./pages/register/Register";
import { ThemeProvider } from "styled-components";
function App() {
    return (
        <ThemeProvider theme={lightTheme}>
            <GlobalStyle />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/landing" element={<Landing />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="*" element={<Error />} />
                </Routes>
            </BrowserRouter>
        </ThemeProvider>
    );
}

export default App;
