import React from "react";
import { Routes, Route } from "react-router-dom";
import Error404 from "../Pages/Error404";
import About from "../Pages/About";
import Home from "../Pages/Home";
import { data } from "../Data/Data";
import AccomodationSheet from "../Pages/AccomodationSheet";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<Error404 />} />
      <Route path="/accomodation_sheet">
        <Route
          path=":idLogement"
          element={<AccomodationSheet dataCard={data} />}
        />
      </Route>
    </Routes>
  );
};

export default MainRoutes;
