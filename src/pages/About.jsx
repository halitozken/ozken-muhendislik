import React, { useState } from "react";
import styled from "styled-components";
import Headline from "../components/Headline";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { mobile } from "../responsive";
import { motion } from "framer-motion/dist/framer-motion";
import MobileMenu from "../components/MobileMenu";
import { BoxContext } from "../Context";

const Container = styled.div`
  width: 100%;
  height: auto;
`;

const AboutArea = styled.div`
  width: 100%;
  height: 65vh;
  display: flex;
  justify-content: center;
  align-items: center;

  ${mobile({ height: "auto", paddingBottom: "20px" })}
`;

const Box = styled.div`
  width: 60%;
  height: auto;
  display: flex;
  justify-content: center;
  ${mobile({
    width: "92%",
    height: "auto",
    paddingTop: "25px",
    flexDirection: "column",
  })}
`;

const Left = styled.div``;

const Header = styled.div`
  font-size: 28px;
  font-weight: 800;
  text-decoration: underline #0086bc 5px;

  border-spacing: 5px;
  padding-bottom: 3rem;
`;

const Text = styled.p`
  font-size: 17px;
  line-height: 1.5;
  color: #666666;
`;

const Right = styled.div``;

const Image = styled.img`
  /* width: 360px;
  height: 203px; */
  width: 570px;
  height: 320px;
  padding-left: 2rem;

  ${mobile({
    width: "360px",
    height: "202px",
    paddingTop: "20px",
    paddingLeft: "0px",
  })}
`;

const About = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <BoxContext.Provider value={{ isOpen, setOpen }}>
      <Container>
        <Headline />
        <Navbar />

        <motion.div
          initial={{ width: "0" }}
          animate={{ width: "100%" }}
          exit={{ x: window.innerWidth, transition: { duration: 0.5 } }}
        >
          <MobileMenu />
          <AboutArea>
            <Box>
              <Left>
                <Header>HAKKIMIZDA</Header>
                <Text>
                  Özken Mühendislik ilk olarak 1995 yılında Makineciliğin ve
                  Metal Sanayi'nin Merkezi olan Bursa'da İsmail Özken tarafından
                  kurularak faaliyete başlamıştır. Yenilikçi politika
                  anlayışıyla günümüzün teknolojisi ile yılların deneyimini
                  birleştirerek sektöründe 28 senedir Kalite ve Müşteri
                  Memnuniyetini esas alarak hizmet vermektedir. Firmamız,
                  hatalar oluştuktan sonra düzeltmek yerine, bu hatalar
                  oluşmadan önleyici tedbirleri alır, müşterisine daha iyi
                  hizmet verebilmek için işlerinde sürekli iyileştirmeler ve
                  teknolojik yatırımlar yapar.
                </Text>
              </Left>
              <Right>
                <Image src="https://www.aydinkalipsanayi.com/Admin/Sayfalar/Galeri/c09adf03ee.jpg" />
              </Right>
            </Box>
          </AboutArea>
        </motion.div>
        <Footer />
      </Container>
    </BoxContext.Provider>
  );
};

export default About;
