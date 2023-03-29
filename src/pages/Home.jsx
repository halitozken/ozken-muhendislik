import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Headline from "../components/Headline";
import Slider from "../components/Slider";
import styled from "styled-components";
import Services from "../components/Services";
import Footer from "../components/Footer";
import { BoxContext } from "../Context";
import AboutUs from "../components/AboutUs";
import Feature from "../components/Feature";
import About from "../components/About";

import { motion } from "framer-motion/dist/framer-motion";
import MobileMenu from "../components/MobileMenu";

const Container = styled.div`
  width: 100%;
  overflow: hidden;
`;

const Home = () => {
  const [selectedBox, setSelectedBox] = useState("makine");
  const [isOpen, setOpen] = useState(false);

  const choosenBox = (data) => {
    setSelectedBox(data);
  };

  console.log(isOpen);

  return (
    <BoxContext.Provider value={{ selectedBox, choosenBox, isOpen, setOpen }}>
      <Container>
        <Headline />
        <Navbar />
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          exit={{ x: window.innerWidth, transition: { duration: 0.5 } }}
        >
          <MobileMenu />

          <Slider />
          <AboutUs />
          <Services />
          <About />
          <Feature />
        </motion.div>
        <Footer />
      </Container>
    </BoxContext.Provider>
  );
};

export default Home;
