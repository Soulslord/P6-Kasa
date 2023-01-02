import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Error404 from "../Pages/Error404";
import About from "../Pages/About";
import Home from "../Pages/Home";

const MainRoutes = () => {
  return (
    // <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    // </BrowserRouter>
  );
};

export default MainRoutes;
