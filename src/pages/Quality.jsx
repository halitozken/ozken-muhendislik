import React, { useState } from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { mobile } from "../responsive";
import { motion } from "framer-motion";
import { BoxContext } from "../Context";
import MobileMenu from "../components/MobileMenu";
import PageInfo from "../components/PageInfo";
import foto from "../images/plan.jpg";
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
  padding-right: 2rem;

  ${mobile({
    width: "360px",
    height: "202px",
    paddingBottom: "28px",
  })}
`;

const Mission = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <BoxContext.Provider value={{ isOpen, setOpen }}>
      <Helmet>
        <meta charset="utf-8" />
        <title>Özken Mühendislik | Kalite Politikamız</title>
        <meta
          name="description"
          content="Müşteri odaklığı üzerine kurulmuş olup, bunu sağlamak için;
          müşteri şartlarının yerine getirilmesi ve müşteri memnuniyetinin sağlanmasını esas almıştır. "
        />
        <link rel="canonical" href={`https://ozkenmuhendislik.com/kalite`} />
      </Helmet>
      <Container>
        <Navbar />

        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          exit={{ x: window.innerWidth, transition: { duration: 0.2 } }}
        >
          <MobileMenu />
          <PageInfo />
          <AboutArea>
            <Box>
              <Right>
                <Image src={foto} />
              </Right>
              <Left>
                <Header>Kalite Politikamız</Header>
                <Text>
                  Müşteri odaklığı üzerine kurulmuş olup, bunu sağlamak için;
                  müşteri şartlarının yerine getirilmesi ve müşteri
                  memnuniyetinin sağlanmasını esas almıştır. Bu esaslar; Ürün
                  kalitesinin, zamanında sevkiyatın, uygun fiyatın, hizmet
                  kalitesinin gerçekleşmesiyle sağlanabilir. Bunu
                  gerçekleştirmenin;
                  <br />
                  <br />
                  * Çalışanlarının bilinçli katılımcılığı ve liderliği <br />*
                  Tedarikçilerin geliştirilmesi ve kalitelerinin arttırılması
                  <br /> * Yönetimin süreç yaklaşımıyla verilere dayalı karar
                  vermesi
                  <br /> * Ortaklarının gurur duyacağı bir yaklaşım izlenmesi
                  <br /> * Uygun çalışma ortamının sağlanması <br />* Doğal
                  kaynak kullanımlarının ve oluşan atıkların azaltılması <br />*
                  Yürürlükteki yasalara uygunluk
                </Text>
              </Left>
            </Box>
          </AboutArea>
        </motion.div>
        <Footer />
      </Container>
    </BoxContext.Provider>
  );
};

export default Mission;
