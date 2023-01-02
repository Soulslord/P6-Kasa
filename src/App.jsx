import "./App.scss";
import React, {Component} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainRoutes from "./assets/Routes/MainRoutes";
import Header from "./assets/Components/Header";
import Footer from "./assets/Components/Footer";

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Header />



      <MainRoutes />


      <Footer />
    </div>
    </BrowserRouter>
  );
}

export default App;
