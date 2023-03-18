import React, { useContext } from "react";
import styled from "styled-components";
import { BoxContext } from "../Context";
import { mobile } from "../responsive";
import Info from "./Info";
import freze from "../images/freze.png";

const ServicesArea = styled.div`
  width: 100%;
  height: 75vh;
  background-color: #ffffff;
  ${mobile({ height: "auto" })}
`;

const Container = styled.div`
  width: 70%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;

  ${mobile({ flexDirection: "column" })}
`;

const Head = styled.h1`
  color: #0086bc;
  text-align: center;
  padding: 32px 54px;
  text-decoration-line: underline;
`;

const Box = styled.div`
  width: 54%;
  height: 4vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 28px;
  margin: 34px 25px;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
    rgba(0, 0, 0, 0.22) 0px 15px 12px;
  transition: all 0.2s;

  &:hover {
    background-color: #0086bc;
    color: white;
  }

  &:active {
    background-color: #0084ff8b;
    color: white;
  }

  ${mobile({ width: "65%", height: "10px" })}
`;

const Image = styled.img`
  width: 25%;
  pointer-events: none;
`;

const Title = styled.h2`
  pointer-events: none;
`;

const BoxArea = styled.div``;

const Services = () => {
  const context = useContext(BoxContext);

  return (
    <ServicesArea>
      <Head>Hizmetlerimiz</Head>
      <Container>
        <BoxArea>
          <Box
            className="cnc"
            onClick={(e) =>
              context.choosenBox(e.target.className.split(" ")[2])
            }
          >
            <Image src="https://cdn.tridi.co/images/p-become-partner/alt_hizmet_isleme.png?format=webp&width=1400&rmode=min"></Image>
            <Title>CNC İşleme</Title>
          </Box>
          <Box
            className="torna"
            onClick={(e) =>
              context.choosenBox(e.target.className.split(" ")[2])
            }
          >
            <Image src="https://cdn.tridi.co/images/p-become-partner/alt_hizmet_torna.png?format=webp&width=1400&rmode=min"></Image>
            <Title>Torna</Title>
          </Box>
          <Box
            className="freze"
            onClick={(e) =>
              context.choosenBox(e.target.className.split(" ")[2])
            }
          >
            <Image src={freze}></Image>
            <Title>Freze</Title>
          </Box>
        </BoxArea>

        <Info />
      </Container>
    </ServicesArea>
  );
};

export default Services;
