import React from "react";
import styled from "styled-components";
import { BsFillTelephoneFill } from "react-icons/bs";
import { GrMail } from "react-icons/gr";
import { mobile } from "../responsive";

const Container = styled.div`
  width: 100%;
  height: 42px;
  background-color: #313131;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-size: 12px;
  font-weight: 400;
  ${mobile({ fontSize: "10px", height: "28px" })}
`;

const Left = styled.div`
  letter-spacing: 2px;
`;

const Right = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  ${mobile({ display: "none" })}
`;

const Headline = () => {
  return (
    <Container>
      <Left>Duaçınarı Mh. Uslu Çk. No:1 Yıldırım / Bursa</Left>

      <Right>
        <BsFillTelephoneFill style={{ fontSize: "14px", marginRight: "8px" }} />
        +90 224 363 83 15
        <GrMail
          style={{ fontSize: "16px", marginLeft: "18px", marginRight: "8px" }}
        />
        info@ozkenmuhendislik.com
      </Right>
    </Container>
  );
};

export default Headline;
