import React, { useContext, useState } from "react";
import styled from "styled-components";
import { BoxContext } from "./Context";

const Container = styled.div`
  width: 100%;
  height: 35vh;
  display: flex;
  align-items: center;
  padding-bottom: 45px;
`;

const Head = styled.h1`
  padding: 32px 54px;
  text-decoration-line: underline;
`;

const Box = styled.div`
  width: 18%;
  height: 28vh;
  display: inline-block;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 28px;
  background-color: #f5f5f5;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
    rgba(0, 0, 0, 0.22) 0px 15px 12px;
  transition: all 0.5s;

  &:hover {
    background-color: #dcdcdc;
  }
`;

const Image = styled.img`
  pointer-events: none;
`;

const Title = styled.h3`
  pointer-events: none;
`;

const Services = () => {
  const context = useContext(BoxContext);

  return (
    <>
      <Head>Hizmetlerimiz</Head>
      <Container>
        <Box
          className="cnc"
          onClick={(e) => context.choosenBox(e.target.className.split(" ")[2])}
        >
          <Image src="https://cdn.tridi.co/images/p-become-partner/alt_hizmet_isleme.png?format=webp&width=1400&rmode=min"></Image>
          <Title>CNC İşleme</Title>
        </Box>
        <Box
          className="torna"
          onClick={(e) => context.choosenBox(e.target.className.split(" ")[2])}
        >
          <Image src="https://cdn.tridi.co/images/p-become-partner/alt_hizmet_torna.png?format=webp&width=1400&rmode=min"></Image>
          <Title>Torna</Title>
        </Box>
      </Container>
    </>
  );
};

export default Services;
