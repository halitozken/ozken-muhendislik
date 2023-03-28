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
  height: 75vh;
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
  padding-right: 2rem;

  ${mobile({
    width: "360px",
    height: "202px",
    paddingTop: "20px",
    paddingLeft: "0px",
  })}
`;

const Quality = () => {
  return (
    <Container>
      <Headline />
      <Navbar />
      <AboutArea>
        <Box>
          <Right>
            <Image src="https://www.aydinkalipsanayi.com/Admin/Sayfalar/Galeri/e44c551357.jpg" />
          </Right>
          <Left>
            <Header>Kalite Politikamız</Header>
            <Text>
              Müşteri odaklığı üzerine kurulmuş olup, bunu sağlamak için;
              müşteri şartlarının yerine getirilmesi ve müşteri memnuniyetinin
              sağlanmasını esas almıştır. Bu esaslar; Ürün kalitesinin,
              zamanında sevkiyatın, uygun fiyatın, hizmet kalitesinin
              gerçekleşmesiyle sağlanabilir. Bunu gerçekleştirmenin;
              <br />
              <br />
              * Çalışanlarının bilinçli katılımcılığı ve liderliği <br />*
              Tedarikçilerin geliştirilmesi ve kalitelerinin arttırılması
              <br /> * Yönetimin süreç yaklaşımıyla verilere dayalı karar
              vermesi
              <br /> * Ortaklarının gurur duyacağı bir yaklaşım izlenmesi
              <br /> * Uygun çalışma ortamının sağlanması <br />* Doğal kaynak
              kullanımlarının ve oluşan atıkların azaltılması <br />*
              Yürürlükteki yasalara uygunluk
            </Text>
          </Left>
        </Box>
      </AboutArea>
      <Footer />
    </Container>
  );
};

export default Quality;
