import React from "react";
import styled from "styled-components";
import Headline from "../components/Headline";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { mobile } from "../responsive";

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

  ${mobile({ height: "auto" })}
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
  return (
    <Container>
      <Headline />
      <Navbar />

      <AboutArea>
        <Box>
          <Left>
            <Header>HAKKIMIZDA</Header>
            <Text>
              Özken Mühendislik İlk Olarak 1995 yılında Kalıpçılığın Merkezi
              Olan Bursa'da İsmail Özken Tarafından Kurularak Faaliyete
              Başlamıştır. Yenilikçi Politika Anlayışıyla Günümüzün Teknolojisi
              ile Yılların Deneyimini Birleştirerek Sektöründe 28 Senedir Kalite
              ve Müşteri Memnuniyetini Esas Alarak Hizmet Vermektedir. Firmamız,
              hatalar oluştuktan sonra düzeltmek yerine, bu hatalar oluşmadan
              önleyici tedbirleri alır, müşterisine daha iyi hizmet verebilmek
              için işlerinde sürekli iyileştirmeler ve teknolojik yatırımlar
              yapar.
            </Text>
          </Left>
          <Right>
            <Image src="https://www.aydinkalipsanayi.com/Admin/Sayfalar/Galeri/c09adf03ee.jpg" />
          </Right>
        </Box>
      </AboutArea>

      <Footer />
    </Container>
  );
};

export default About;
