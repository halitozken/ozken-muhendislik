import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Gallery from "../pages/Gallery";
import Mission from "../pages/Mission";
import Vision from "../pages/Vision";
import About from "../pages/About";
import Quality from "../pages/Quality";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
// import Projects from "../pages/Projects";
import Services from "../pages/Services";

import { AnimatePresence } from "framer-motion";

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/hakkimizda" element={<About />} />
        <Route path="/misyon" element={<Mission />} />
        <Route path="/vizyon" element={<Vision />} />
        <Route path="/kalite" element={<Quality />} />
        {/* <Route path="/projeler" element={<Projects />} /> */}
        <Route path="/hizmetler" element={<Services />} />
        <Route path="/galeri" element={<Gallery />} />
        <Route path="/iletisim" element={<Contact />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
