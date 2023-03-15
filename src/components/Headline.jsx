import React from "react";
import styled from "styled-components";
import { BsFillTelephoneFill } from "react-icons/bs";
import { GrMail } from "react-icons/gr";

const Container = styled.div`
  width: 100%;
  height: 34px;
  background-color: #3b3b3b;
  color: #ffffffde;
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-size: 12px;
  font-weight: 500;
`;

const Left = styled.div`
  letter-spacing: 2px;
`;

const Right = styled.div``;

const Headline = () => {
  return (
    <Container>
      <Left>Duaçınarı Mh. Uslu Sk. No:1 Yıldırım / Bursa</Left>
      <Right>
        <BsFillTelephoneFill style={{ marginRight: "8px" }} />
        +90 224 363 83 15
        <GrMail style={{ marginLeft: "18px", marginRight: "8px" }} />
        info@ozkenmuhendislik.com
      </Right>
    </Container>
  );
};

export default Headline;
