import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Error404 from "../Pages/Error404";
import About from "../Pages/About";
import Home from "../Pages/Home";
import Idtest from "../Pages/Idtest";

const MainRoutes = () => {




  return (
    // <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Error404 />} />
        <Route path="/test" element={<Idtest />} />
      </Routes>
    // </BrowserRouter>
  );
};

export default MainRoutes;
