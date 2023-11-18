import React, { useState } from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { mobile } from "../responsive";
import { motion } from "framer-motion";
import MobileMenu from "../components/MobileMenu";
import { BoxContext } from "../Context";
import PageInfo from "../components/PageInfo";
import foto from "../images/banner2.jpg";
import { Helmet } from "react-helmet-async";

const Container = styled.div`
  width: 100%;
  height: auto;
  overflow: hidden;
  position: relative;
`;

const AboutArea = styled.div`
  width: 100%;
  height: auto;
  padding: 8% 0%;
  display: flex;
  justify-content: center;
  align-items: center;

  ${mobile({ height: "auto", paddingBottom: "20px" })}
`;

const Box = styled.div`
  width: 70%;
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

const Header = styled.h1`
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
  width: 580px;
  height: 360px;
  padding-left: 1rem;

  ${mobile({
    width: "360px",
    height: "202px",
    padding: "20px 0px",
  })}
`;

const About = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <BoxContext.Provider value={{ isOpen, setOpen }}>
      <Helmet>
        <meta charset="utf-8" />
        <title>Özken Mühendislik | Hakkımızda</title>
        <meta
          name="description"
          content="28 yıldır sektörde Torna, CNC ve Freze
          gibi öncü teknolojileri, deneyimle birleştirerek müşteri
          memnuniyeti ve kalite odaklı hizmet sunuyoruz."
        />
        <link
          rel="canonical"
          href={`https://ozkenmuhendislik.com/hakkimizda`}
        />
      </Helmet>
      <Container>
        <Navbar />

        <motion.div
          initial={{ width: "0" }}
          animate={{ width: "100%" }}
          exit={{ x: window.innerWidth, transition: { duration: 0.2 } }}
        >
          <MobileMenu />
          <PageInfo />
          <AboutArea>
            <Box>
              <Left>
                <Header>HAKKIMIZDA</Header>
                <Text>
                  Özken Mühendislik, Makineciliğin ve Metal Sanayi'nin önde
                  gelen merkezlerinden olan Bursa'da 1995 yılında İsmail Özken
                  tarafından kuruldu. 28 yıldır sektörde Torna, CNC ve Freze
                  gibi öncü teknolojileri, deneyimle birleştirerek müşteri
                  memnuniyeti ve kalite odaklı hizmet sunuyoruz. Hataların
                  oluşmasını engellemek için önceden tedbir alarak,
                  müşterilerimize en üst seviyede hizmet sunmayı hedefliyoruz.
                  Sürekli iyileştirmeler ve teknolojik yatırımlarla işlerimizi
                  geliştirerek, Torna, CNC ve Freze alanında öncü bir firma olma
                  yolunda ilerliyoruz. Özken Mühendislik olarak, Torna, CNC ve
                  Freze gibi teknolojileri kullanarak sektördeki 28 yıllık
                  deneyimimizi kalite ve müşteri memnuniyetiyle birleştiriyoruz.
                  Müşterilerimize en iyi hizmeti sunmak için sürekli olarak
                  teknolojik yeniliklere ve işlerimizi geliştirmeye
                  odaklanıyoruz.
                </Text>
              </Left>
              <Right>
                <Image src={foto} />
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
