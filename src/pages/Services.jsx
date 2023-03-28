import React from "react";
import styled from "styled-components";
import Headline from "../components/Headline";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
// import freze from "../images/freze.png";
import printer from "../images/3d.png";
import { mobile } from "../responsive";
import cnc from "../images/pexels-pixabay-50691.jpg";
import torna from "../images/pexels-alex-11951233.jpg";
import freze2 from "../images/pexels-daniel-smyth-10406128.jpg";

const Container = styled.div`
  width: 70%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  ${mobile({ width: "100%" })}
`;

const ServicesArea = styled.div`
  width: 100%;
  height: auto;
`;

const FirstLine = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 36px;

  ${mobile({ flexDirection: "column", padding: "0px" })}
`;

const SecondLine = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 36px;
  ${mobile({ flexDirection: "column", padding: "0px" })}
`;

const Box = styled.div`
  ${mobile({ paddingBottom: "12px" })}
`;

const Image = styled.img`
  width: 286px;
  height: 204px;

  --c: #006790; /* the border color */
  --b: 5px; /* the border thickness*/
  --g: 5px; /* the gap on hover */

  padding: calc(var(--g) + var(--b));
  --_g: #0000 25%, var(--c) 0;
  background: conic-gradient(
        from 180deg at top var(--b) right var(--b),
        var(--_g)
      )
      var(--_i, 200%) 0 /200% var(--_i, var(--b)) no-repeat,
    conic-gradient(at bottom var(--b) left var(--b), var(--_g)) 0
      var(--_i, 200%) / var(--_i, var(--b)) 200% no-repeat;
  transition: 0.3s, background-position 0.3s 0.3s;
  cursor: pointer;

  &:hover {
    --_i: 100%;
    transition: 0.3s, background-size 0.3s 0.3s;
  }

  ${mobile({ width: "360px", height: "240px" })}
`;

const ServiceName = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 15px;
  text-align: center;
  font-size: 18px;

  ${mobile({ fontSize: "14px" })}
`;

const Services = () => {
  return (
    <>
      <Headline />
      <Navbar />
      <Container>
        <ServicesArea>
          <FirstLine>
            <Box>
              <Image src={cnc} />
              <ServiceName>CNC İşleme</ServiceName>
            </Box>
            <Box>
              <Image src={torna} />
              <ServiceName>Torna</ServiceName>
            </Box>
            <Box>
              <Image src={freze2} />
              <ServiceName>Freeze</ServiceName>
            </Box>
          </FirstLine>

          <SecondLine>
            <Box>
              <Image
                src={
                  "https://www.aydinkalipsanayi.com/Admin/Sayfalar/urunler/55cdb4db0075d96e38cc81520ebde3.jpg"
                }
              />
              <ServiceName>CAD, CAM, CNC Tasarım</ServiceName>
            </Box>
            <Box>
              <Image
                src={
                  "https://www.aydinkalipsanayi.com/Admin/Sayfalar/urunler/a418f9653b10aa0a4819f69cbf4ec9.jpg"
                }
              />
              <ServiceName>Kalıp İmalatı</ServiceName>
            </Box>
            <Box>
              <Image src={printer} />
              <ServiceName>3D Tasarım ve Baskı</ServiceName>
            </Box>
          </SecondLine>
        </ServicesArea>
      </Container>
      <Footer />
    </>
  );
};

export default Services;
