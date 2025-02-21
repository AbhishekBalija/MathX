
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./src/pages/LandingPage";

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                {/* <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} /> */}
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;