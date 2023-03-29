import React, { useState } from "react";
import styled from "styled-components";
import Headline from "../components/Headline";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
// import freze from "../images/freze.png";
import printer from "../images/3d.png";
import { mobile } from "../responsive";

import { motion } from "framer-motion/dist/framer-motion";
import MobileMenu from "../components/MobileMenu";
import { BoxContext } from "../Context";
import kalip from "../images/kalip.png";
import aparat from "../images/aparat.png";
import makine from "../images/makine.png";
import fikstür from "../images/fixture.png";

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

  --c: #0086bc; /* the border color */
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
  font-size: 20px;

  ${mobile({ fontSize: "14px" })}
`;

const Services = () => {
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
        <Container>
          <ServicesArea>
            <FirstLine>
              <Box>
                <Image src={makine} />
                <ServiceName>Makine Tasarımı ve İmalatı</ServiceName>
              </Box>
              <Box>
                <Image src={kalip} />
                <ServiceName>Kalıp Tasarımı ve İmalatı</ServiceName>
              </Box>
              <Box>
                <Image src={fikstür} />
                <ServiceName>Fikstür Tasarımı ve İmalatı</ServiceName>
              </Box>
            </FirstLine>

            <SecondLine>
              <Box>
                <Image src={aparat} />
                <ServiceName>Aparat Tasarımı ve İmalatı</ServiceName>
              </Box>
              <Box>
                <Image
                  style={{ width: "256px", height: "160px" }}
                  src={
                    "https://cdn.tridi.co/images/p-become-partner/alt_hizmet_torna.png?format=webp&width=1400&rmode=min"
                  }
                />
                <ServiceName>Yedek Parça İmalatı</ServiceName>
              </Box>
              <Box>
                <Image src={printer} style={{ height: "234px" }} />
                <ServiceName>3D Tasarım ve Baskı</ServiceName>
              </Box>
            </SecondLine>
          </ServicesArea>
        </Container>
      </motion.div>
      <Footer />
    </BoxContext.Provider>
  );
};

export default Services;
