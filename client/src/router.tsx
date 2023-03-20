import { BrowserRouter, Routes, Route} from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import NotFound from "./pages/NotFound";
import React from "react"
import LoginPage from "./pages/LoginPage";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" Component={LandingPage}/>
                <Route Component={NotFound}/>
                <Route path="/login" Component={LoginPage}/>
            </Routes>
        </BrowserRouter>
    );
};

export default Router;