import React from "react";
import styled from "styled-components";
import Headline from "../components/Headline";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Menu from "../components/Menu";

const Container = styled.div`
  width: 100%;
`;

const ContactInfo = styled.div`
  width: 100%;
  height: 100vh;
`;

const Projects = () => {
  return (
    <Container>
      <Headline />
      <Navbar />
      <Menu />
      <ContactInfo />
      <Footer />
    </Container>
  );
};

export default Projects;
