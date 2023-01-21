import React from "react";
import {Routes, Route } from "react-router-dom";
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
      {data.map((dataCard, index) => (
        <Route
          key={index + 1}
          path={`/card/${index + 1}`}
          element={
            <AccomodationSheet
              index={index + 1}
              dataCard={dataCard}
              datasListLength={data.length}
            />
          }
        />
      ))}
    </Routes>
  );
};

export default MainRoutes;
