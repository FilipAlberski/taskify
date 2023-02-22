import GlobalStyle from "./globalStyles";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//Pages

import Dashboard from "./pages/dashboard/Dashboard";
function App() {
    return (
        <>
            <GlobalStyle />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Dashboard />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
