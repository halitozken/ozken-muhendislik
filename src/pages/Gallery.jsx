import React from "react";
import styled from "styled-components";
import Headline from "../components/Headline";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


const Container = styled.div`
  width: 100%;
`;

const ContactInfo = styled.div`
  width: 100%;
  height: 100vh;
`;

const Gallery = () => {
  return (
    <Container>
      <Headline />
      <Navbar />
      <ContactInfo />
      <Footer />
    </Container>
  );
};

export default Gallery;
