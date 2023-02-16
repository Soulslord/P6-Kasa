import "./App.scss";
import React, { Component, useState } from "react";
import MainRoutes from "./assets/Routes/MainRoutes";
import Header from "./assets/Header-footer/Header";
import Footer from "./assets/Header-footer/Footer";

function App() {
  // const [stateRoute, setStateRoute] = useState("empty");

  // const getRoute = (varTest) => {
  //   setStateRoute(varTest);
  // };

  return (
    <div className="App">
      <Header />

      <MainRoutes testProps="text test" className="test-grow" />

      <Footer />
    </div>
  );
}

export default App;
