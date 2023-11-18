import React, { useState } from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import foto1 from "../images/banner2.jpg";
import foto2 from "../images/banners.jpg";
import foto3 from "../images/foto.jpg";
import foto4 from "../images/plan.jpg";

const Container = styled.section`
  width: 100%;
  height: "auto";
  padding-bottom: 65px;
`;

const AboutComponent = styled.div`
  width: 65%;
  ${mobile({ width: "95%" })}
`;

const Header = styled.h1`
  text-align: center;
  padding: 30px;
  font-weight: 800;
  font-size: 28px;
`;

const CorporationMenu = styled.div`
  width: 100%;
  display: flex;
  padding: 25px 0px;

  ${mobile({ flexDirection: "column" })}
`;

const BoxMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  border: 1px solid #e9e9e9;
  font-size: 16px;
  padding: 25px;
  font-weight: 700;
  transition: all 0.5s;
  cursor: pointer;

  ${mobile({ padding: "20px 0px" })}

  &:hover {
    background-color: #f2f2f2;
  }

  &:active {
    background-color: #ffd0009e;
  }
`;

const Box = styled.div`
  display: flex;
  ${mobile({ flexDirection: "column" })}
`;
const Left = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  font-weight: 300;
  line-height: 1.5;
  color: #1c1c1c;
`;

const InfoArea = styled.div``;
const Text = styled.div`
  ${mobile({ paddingLeft: "12px", paddingBottom: "16px" })}
`;
const Right = styled.div``;
const Image = styled.img`
  width: 540px;
  height: 350px;
  padding-left: 15px;

  ${mobile({ width: "350px", height: "300px", paddingLeft: "0px" })}
`;

const About = () => {
  const [selectedBox, setSelectedBox] = useState("about");

  const changeState = (box) => {
    setSelectedBox(box);
  };

  return (
    <Container>
      <AboutComponent>
        <Header>Özken Mühendislik Hakkında</Header>
        <CorporationMenu>
          <BoxMenu
            className="about"
            onClick={(e) => changeState(e.target.className.split(" ")[2])}
          >
            Hakkımızda
          </BoxMenu>

          <BoxMenu
            className="mission"
            onClick={(e) => changeState(e.target.className.split(" ")[2])}
          >
            Misyon
          </BoxMenu>

          <BoxMenu
            className="vision"
            onClick={(e) => changeState(e.target.className.split(" ")[2])}
          >
            Vizyon
          </BoxMenu>

          <BoxMenu
            className="quality"
            onClick={(e) => changeState(e.target.className.split(" ")[2])}
          >
            Kalite Politikamız
          </BoxMenu>
        </CorporationMenu>
        <InfoArea>
          <Box
            style={{
              display: selectedBox === "about" ? true : "none",
            }}
          >
            <Left>
              <Text>
                Özken Mühendislik ilk olarak 1995 yılında Makineciliğin ve Metal
                Sanayi'nin Merkezi olan Bursa'da İsmail Özken tarafından
                kurularak faaliyete başlamıştır. Yenilikçi politika anlayışıyla
                günümüzün teknolojisi ile yılların deneyimini birleştirerek
                sektöründe 28 senedir Kalite ve Müşteri Memnuniyetini esas
                alarak hizmet vermektedir. Firmamız, hatalar oluştuktan sonra
                düzeltmek yerine, bu hatalar oluşmadan önleyici tedbirleri alır,
                müşterisine daha iyi hizmet verebilmek için işlerinde sürekli
                iyileştirmeler ve teknolojik yatırımlar yapar.
              </Text>
            </Left>
            <Right>
              <Image src={foto1} alt="Bursa CNC" />
            </Right>
          </Box>
          <Box style={{ display: selectedBox === "mission" ? true : "none" }}>
            <Left>
              <Text>
                Müşteri odaklığı üzerine kurulmuş olup, bunu sağlamak için;
                müşteri şartlarının yerine getirilmesi ve müşteri memnuniyetinin
                sağlanmasını esas almıştır. Amacımız müşterilerimizin
                beklentilerine tamamıyla cevap verebilmek, firmanızın rekabet ve
                gelişim gücünü arttırabilmektir. Firmamız, hedefleri tespit eder
                ve kalite politikalarının uygulanması ve geliştirilmesi için
                planlama yapar ve gerekli desteği sağlar. Takım ruhu içerisinde
                şirket ve birim hedeflerine ulaşmak için çalışırız.
              </Text>
            </Left>
            <Right>
              <Image src={foto2} alt="Bursa Torna" />
            </Right>
          </Box>
          <Box style={{ display: selectedBox === "vision" ? true : "none" }}>
            <Left>
              <Text>
                Hedefimiz; bilgimizi ve yaratıcılığımızı Sürekli olarak
                geliştirerek, müşteri memnuniyeti ve rekabet için etkin ürünler
                tasarlamaktır. İmalat prensibimiz İlk Seferde Doğru Yapmak ve
                “Sıfır Hata”dır. İmal etmekte olduğumuz ürünlerin zamanında,
                eksiksiz ve problemsiz olarak imalatı ve teslim edilmesi
                vazgeçilemez bir ilkedir. Özken Mühendislik, hatalar oluştuktan
                sonra düzeltmek yerine, bu hatalar oluşmadan önleyici tedbirleri
                alır, müşterisine daha iyi hizmet verebilmek için işlerinde
                sürekli iyileştirmeler ve teknolojik yatırımlar yapar.
              </Text>
            </Left>
            <Right>
              <Image src={foto3} alt="Bursa Freze" />
            </Right>
          </Box>
          <Box style={{ display: selectedBox === "quality" ? true : "none" }}>
            <Left>
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
            <Right>
              <Image src={foto4} alt="Bursa Özken Mühendislik" />
            </Right>
          </Box>
        </InfoArea>
      </AboutComponent>
    </Container>
  );
};

export default About;
