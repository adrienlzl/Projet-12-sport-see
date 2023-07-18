import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Error from "./pages/Error";
import Home from "./pages/Home";
import Profile from "./pages/Profile"
import './css/normalizer.scss'
import './css/general.scss'

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Home />} errorElement={<Error />} />
                <Route path="/profile/:id" element={<Profile />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
