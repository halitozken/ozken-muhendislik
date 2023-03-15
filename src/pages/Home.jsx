import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Headline from "../components/Headline";
import Slider from "../components/Slider";
import styled from "styled-components";
import Services from "../components/Services";
import Info from "../components/Info";
import Footer from "../components/Footer";
import { BoxContext } from "../components/Context";

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
        <Slider />
        <Services />
        <Info />
        <Footer />
      </Container>
    </BoxContext.Provider>
  );
};

export default Home;
