import React from "react";
import styled from "styled-components";
import ft1 from "../images/feature-1.png";
import ft2 from "../images/feature-2.png";
import ft3 from "../images/feature-3.png";
import { mobile } from "../responsive";

const Container = styled.div`
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
  ${mobile({ width: "28%" })}
`;
const Title = styled.h3`
  padding-bottom: 12px;
`;

const Feature = () => {
  return (
    <Container>
      <Box>
        <Image src={ft1} />
        <Info>
          <Title>Güvenilir</Title>
          <Text>
            Lorem ipsum dolor sit amet, consec tetur adipisizing elit. Resmi
            olarak bir kurum.
          </Text>
        </Info>
      </Box>
      <Box>
        <Image src={ft2} />
        <Info>
          <Title>En iyi kalite</Title>
          <Text>
            Lorem ipsum dolor sit amet, consec tetur adipisizing elit. Resmi
            olarak bir kurum.
          </Text>
        </Info>
      </Box>
      <Box>
        <Image src={ft3} />
        <Info>
          <Title>Düşük maliyetli</Title>
          <Text>
            Lorem ipsum dolor sit amet, consec tetur adipisizing elit. Resmi
            olarak bir kurum.
          </Text>
        </Info>
      </Box>
    </Container>
  );
};

export default Feature;
