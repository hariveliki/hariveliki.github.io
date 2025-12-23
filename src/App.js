import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer";
import { HashRouter, Route, Routes, Navigate } from "react-router-dom";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ScrumDev from "./components/Blog/ScrumDev";
import Std from "./components/Blog/Std";
import Mps from "./components/Blog/Mps";
import Centralization from "./components/Blog/Centralization";
import Onboarding from "./components/Blog/Onboarding";
import Christmas2025 from "./components/Blog/Christmas2025";

function App() {
  return (
    <HashRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog/scrumdev" element={<ScrumDev />} />
          <Route path="/blog/std" element={<Std />} />
          <Route path="/blog/mps" element={<Mps />} />
          <Route path="/blog/centralization" element={<Centralization />} />
          <Route path="/blog/onboarding" element={<Onboarding />} />
          <Route path="/blog/christmas-2025" element={<Christmas2025 />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;
