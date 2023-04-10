import React, { useState } from "react";
import styled from "styled-components";
import Headline from "../components/Headline";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { mobile } from "../responsive";
import { motion } from "framer-motion";
import { BoxContext } from "../Context";
import MobileMenu from "../components/MobileMenu";
import PageInfo from "../components/PageInfo";
import foto from "../images/foto.jpg";

const Container = styled.div`
  width: 100%;
  height: auto;
  overflow: hidden;
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
      <Container>
        <Headline />
        <Navbar />

        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          exit={{ x: window.innerWidth, transition: { duration: 0.6 } }}
        >
          <MobileMenu />
          <PageInfo />
          <AboutArea>
            <Box>
              <Right>
                <Image src={foto} />
              </Right>
              <Left>
                <Header>VİZYON</Header>
                <Text>
                  Özken Mühendislik, müşteri memnuniyetini ve ürün kalitesini
                  sürekli geliştirmek amacıyla yaratıcılığını ve bilgisini
                  kullanan bir şirkettir. İmalat prensipleri arasında "İlk
                  Seferde Doğru Yapmak" ve "Sıfır Hata" yer almaktadır. Bu
                  prensipler doğrultusunda, şirket ürünlerinin zamanında,
                  eksiksiz ve problemsiz olarak imal edilmesi ve teslim
                  edilmesini garanti etmektedir.
                  <br />
                  Hataları önlemek için önceden tedbirler alarak müşterisine en
                  iyi hizmeti sunmak için çalışmaktadır. Şirket, sürekli
                  iyileştirmeler ve teknolojik yatırımlar yaparak işlerini daha
                  da geliştirmekte ve müşteri beklentilerini karşılamak için
                  çalışmaktadır.
                  <br />
                  Bu hedeflere ulaşmak için, şirketin vizyonu, mükemmellik ve
                  yenilikçilik üzerine kuruludur. Müşterilerin talepleri
                  doğrultusunda özelleştirilmiş çözümler sunmakta ve teknolojik
                  yeniliklerle sürekli olarak kendisini geliştirmektedir.
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
