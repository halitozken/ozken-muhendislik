import React from "react";
import styled from "styled-components";


const Container = styled.div`
  width: 100%;
  height: 42px;
  background-color: #313131;
  color: #ffffffde;
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-size: 12px;
  font-weight: 400;
`;

const Left = styled.div`
  letter-spacing: 2px;
`;

// const Right = styled.div``;

const Headline = () => {
  return (
    <Container>
      <Left>Duaçınarı Mh. Uslu Çk. No:1 Yıldırım / Bursa</Left>
    </Container>
  );
};

export default Headline;
