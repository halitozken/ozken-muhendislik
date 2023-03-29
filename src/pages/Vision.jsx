import React, { useState } from "react";
import styled from "styled-components";
import Headline from "../components/Headline";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { mobile } from "../responsive";
import { motion } from "framer-motion/dist/framer-motion";
import { BoxContext } from "../Context";
import MobileMenu from "../components/MobileMenu";

const Container = styled.div`
  width: 100%;
  height: auto;
  overflow: hidden;
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
  padding-right: 2rem;

  ${mobile({
    width: "360px",
    height: "202px",
    paddingTop: "20px",
    paddingLeft: "0px",
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
          exit={{ x: window.innerWidth, transition: { duration: 0.5 } }}
        >
          <MobileMenu />
          <AboutArea>
            <Box>
              <Right>
                <Image src="https://www.aydinkalipsanayi.com/Admin/Sayfalar/Galeri/ee6d81c58f.jpg" />
              </Right>
              <Left>
                <Header>VİZYON</Header>
                <Text>
                  Hedefimiz; bilgimizi ve yaratıcılığımızı Sürekli olarak
                  geliştirerek, müşteri memnuniyeti ve rekabet için etkin
                  ürünler tasarlamaktır. İmalat prensibimiz İlk Seferde Doğru
                  Yapmak ve “Sıfır Hata”dır. İmal etmekte olduğumuz ürünlerin
                  zamanında, eksiksiz ve problemsiz olarak imalatı ve teslim
                  edilmesi vazgeçilemez bir ilkedir. Özken Mühendislik, hatalar
                  oluştuktan sonra düzeltmek yerine, bu hatalar oluşmadan
                  önleyici tedbirleri alır, müşterisine daha iyi hizmet
                  verebilmek için işlerinde sürekli iyileştirmeler ve teknolojik
                  yatırımlar yapar.
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
