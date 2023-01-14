import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Error404 from "../Pages/Error404";
import About from "../Pages/About";
import Home from "../Pages/Home";
import Idtest from "../Pages/Idtest";
import { data } from "../Data/Data";
import CardDetails from "../Components/CardDetails";

const MainRoutes = () => {
  console.log(data);
  console.log(data.length);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<Error404 />} />
      <Route path="/test" element={<Idtest />} />
      {data.map(({id, title, cover, tags, equipments, location }, index ) => (
        <Route
          key={index + 1}
          path={`/card/${index + 1}`}
          element={<CardDetails index={index + 1} id={id} title={title} imgCover={cover} tags={tags} equipments={equipments} location={location} dataLength={data.length} />}
        />
      ))}

    </Routes>
  );
};

export default MainRoutes;
