import React from "react";
import ReactDOM from "react-dom/client";
import LoginPage from "./LoginPage";
import AnalyserPage from "./frontend/Pages/AnalyserPage/AnalyserPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutPage from "./frontend/Pages/AboutPage/AboutPage";
import ContactsPage from "./frontend/Pages/ContactsPage";
import { Homepage } from "./frontend/Pages/Homepage/Homepage";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route exact path="/login-page" element={<LoginPage />} />
       <Route exact path="/analyser" element={<AnalyserPage />} />
       <Route exact path="/about-me" element={<AboutPage />} /> 
       <Route exact path="/contact" element={<ContactsPage />} />
       <Route exact path="/homepage" element={<Homepage />} />  
      </Routes>
    </Router>
  </React.StrictMode>
);
