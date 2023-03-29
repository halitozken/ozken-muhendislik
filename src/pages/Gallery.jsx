import React, { useState } from "react";
import styled from "styled-components";
import Headline from "../components/Headline";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion/dist/framer-motion";
import { BoxContext } from "../Context";
import MobileMenu from "../components/MobileMenu";

const GalleryArea = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 32px;
  font-weight: 600;
`;

const Gallery = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <BoxContext.Provider value={{ isOpen, setOpen }}>
      <Headline />
      <Navbar />
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        exit={{ x: window.innerWidth, transition: { duration: 0.5 } }}
      >
        <MobileMenu />
        <GalleryArea>Hazırlanıyor...</GalleryArea>
      </motion.div>
      <Footer />
    </BoxContext.Provider>
  );
};

export default Gallery;
