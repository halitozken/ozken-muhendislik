import React, { useState } from "react";
import Navbar from "../components/Navbar";
import styled from "styled-components";
import Services from "../components/Services";
import Footer from "../components/Footer";
import { BoxContext } from "../Context";
import AboutUs from "../components/AboutUs";
import Feature from "../components/Feature";
import About from "../components/About";
import SwiperSlider from "../components/SwiperSlider";
import { motion } from "framer-motion";
import MobileMenu from "../components/MobileMenu";
import { Helmet } from "react-helmet-async";

const Container = styled.main`
  width: 100%;
  overflow: hidden;
  position: relative;
`;

const Home = () => {
  const [selectedBox, setSelectedBox] = useState("makine");
  const [isOpen, setOpen] = useState(false);

  const choosenBox = (data) => {
    setSelectedBox(data);
  };

  return (
    <BoxContext.Provider value={{ selectedBox, choosenBox, isOpen, setOpen }}>
      <Helmet>
        <meta charset="utf-8" />
        <title>Özken Mühendislik | Anasayfa</title>
        <meta
          name="description"
          content="Makine Tasarımı ve İmalatı,
          Kalıp Tasarımı ve İmalatı,
          Fikstür Tasarımı ve İmalatı,
          Aparat Tasarımı ve İmalatı,
          Yedek Parça İmalatı,
          3D Tasarım ve Baskı, CNC, Torna"
        />
        <link rel="canonical" href={`https://ozkenmuhendislik.com/`} />
      </Helmet>
      <Container>
        <Navbar />

        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          exit={{ x: window.innerWidth, transition: { duration: 0.2 } }}
        >
          <MobileMenu />
          <SwiperSlider />
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
