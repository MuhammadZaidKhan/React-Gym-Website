import React from "react";
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import Home from "./Home";


const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                {/* <Route path="/Courses" element={<Courses />} /> */}
            </Routes>
        </BrowserRouter>
    )
}

export default Router