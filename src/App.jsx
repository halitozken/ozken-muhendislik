import React from "react";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Services from "./pages/Services";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Gallery from "./pages/Gallery";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/hakkimizda" element={<About />} />
        <Route path="/projeler" element={<Projects />} />
        <Route path="/hizmetler" element={<Services />} />
        <Route path="/galeri" element={<Gallery />} />
        <Route path="/iletisim" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;
