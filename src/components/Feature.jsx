import React from "react";
import styled from "styled-components";
import ft1 from "../images/feature-1.png";
import ft2 from "../images/feature-2.png";
import ft3 from "../images/feature-3.png";
import { mobile } from "../responsive";

const Container = styled.section`
  width: 100%;
  height: 40vh;
  background-color: #f8f8f8;
  display: flex;
  justify-content: center;
  align-items: center;
  ${mobile({ display: "block", height: "auto" })}
`;

const Box = styled.div`
  width: 24%;
  display: flex;

  ${mobile({ width: "98%", alignItems: "center", justifyContent: "center" })}
`;

const Info = styled.div`
  padding-left: 16px;
  padding: 24px;
`;

const Text = styled.div`
  letter-spacing: 1px;
`;

const Image = styled.img`
  width: 55%;
  height: 12vh;
  ${mobile({ width: "13%", height: "4vh" })}
`;
const Title = styled.h3`
  padding-bottom: 12px;
`;

const Feature = () => {
  return (
    <Container>
      <Box>
        <Image src={ft1} alt="Bursa CNC" />
        <Info>
          <Title>Güvenilir</Title>
          <Text>
            Güvenilir hizmet anlayışı, müşterilerin ihtiyaçlarını karşılamak
            için kaliteli ve dürüst bir yaklaşımı benimsemektir.
          </Text>
        </Info>
      </Box>
      <Box>
        <Image src={ft2} alt="Bursa Torna" />
        <Info>
          <Title>En iyi kalite</Title>
          <Text>
            En iyi kalite, müşteri memnuniyetini maksimize eden ve sürekli
            iyileştirme hedefleriyle desteklenen bir işletme yaklaşımıdır.
          </Text>
        </Info>
      </Box>
      <Box>
        <Image src={ft3} alt="Bursa Freze" />
        <Info>
          <Title>Düşük maliyetli</Title>
          <Text>
            Düşük maliyet, işletmelerin ürün veya hizmetlerini daha verimli bir
            şekilde üreterek ve maliyetleri minimumda tutarak müşterilere daha
            uygun fiyatlar sunmalarını sağlar.
          </Text>
        </Info>
      </Box>
    </Container>
  );
};

export default Feature;
