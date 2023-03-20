import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Headline from "../components/Headline";
import Slider from "../components/Slider";
import styled from "styled-components";
import Services from "../components/Services";
import Footer from "../components/Footer";
import { BoxContext } from "../Context";
import Menu from "../components/Menu";
import AboutUs from "../components/AboutUs";
import Feature from "../components/Feature";

const Container = styled.div`
  width: 100%;
  overflow: hidden;
`;

const Home = () => {
  const [selectedBox, setSelectedBox] = useState("cnc");

  const choosenBox = (data) => {
    setSelectedBox(data);
  };

  return (
    <BoxContext.Provider value={{ selectedBox, choosenBox }}>
      <Container>
        <Headline />
        <Navbar />
        <Menu />
        <Slider />
        <AboutUs />
        <Feature />
        <Services />
        {/* <Info /> */}
        <Footer />
      </Container>
    </BoxContext.Provider>
  );
};

export default Home;
