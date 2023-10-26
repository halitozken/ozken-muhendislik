import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 35px;
  background-color: red;
  color: white;
  font-weight: 600;
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Republic = () => {
  return <Container>Cumhuriyetimizin 100. Yılı Kutlu Olsun!</Container>;
};

export default Republic;
