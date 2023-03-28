import React, { useContext } from "react";
import styled from "styled-components";
import { BoxContext } from "../Context";
import { mobile } from "../responsive";
import Info from "./Info";
import freze from "../images/freze.png";
import printer from "../images/3d.png";

const ServicesArea = styled.div`
  width: 100%;
  height: 80vh;
  background-color: #f8f8f8;
  ${mobile({ height: "auto" })}
`;

const Container = styled.div`
  width: 80%;
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
  width: 20vw;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 24px 15px;
  padding: 8px;
  /* width: 44%;
  height: 4vh;
  
  text-align: center;
 
 
  background-color: white; */
  box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px,
    rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
  transition: all 0.2s;
  &:hover {
    background-color: #0086bc;
    color: white;
  }

  &:active {
    background-color: #0084ff8b;
    color: white;
  }

  ${mobile({
    width: "100%",
    height: "74px",
    margin: "16px auto",
    padding: "0px",
  })}
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
          <Box
            className="printer"
            onClick={(e) =>
              context.choosenBox(e.target.className.split(" ")[2])
            }
          >
            <Image src={printer}></Image>
            <Title>3D Tasarım</Title>
          </Box>
        </BoxArea>
        <Info />
      </Container>
    </ServicesArea>
  );
};

export default Services;
