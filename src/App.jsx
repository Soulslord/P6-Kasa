import "./App.scss";
import React, { Component, useState } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import MainRoutes from "./assets/Routes/MainRoutes";
import Header from "./assets/Header-footer/Header";
import Footer from "./assets/Header-footer/Footer";

function App() {
  const [stateRoute, setStateRoute] = useState("empty");

  const getRoute = (varTest) => {
    setStateRoute(varTest);
  };

  return (
    <div className="App">
      <Header />

      <MainRoutes testProps="text test" funcRouteProps={getRoute} />

      <Footer />
    </div>
  );
}

export default App;
