import React from "react";
import ReactDOM from "react-dom/client";
import LoginPage from "./LoginPage";
import AnalyserPage from "./AnalyserPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutPage from "./AboutPage";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route exact path="/login-page" element={<LoginPage />} />
       <Route exact path="/analyser" element={<AnalyserPage />} />
       <Route exact path="/about-me" element={<AboutPage />} /> 
      </Routes>
    </Router>
  </React.StrictMode>
);
