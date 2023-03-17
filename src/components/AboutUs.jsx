import React from "react";
import styled from "styled-components";
import cnc from "../images/cnc.png";

const Container = styled.div`
  width: 100%;
  height: 75vh;
  background-color: #ffffff;
  display: flex;
`;

const AboutArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Left = styled.div`
  width: 35%;
  height: 55%;
  padding-bottom: 25px;

  padding-bottom: 12px;
`;
const Right = styled.div`
  width: 35%;
`;
const Header = styled.h5`
  padding-bottom: 25px;
  color: #f0542d;
`;
const Text = styled.div`
  font-size: 20px;
  padding-bottom: 25px;
`;
const Button = styled.button`
  color: white;
  border: 1px orange;
  border-radius: 24%;
  padding: 22px;

  /* CSS */

  align-items: center;
  background-color: #f0542d;
  border: 0;
  border-radius: 100px;
  box-sizing: border-box;
  color: #ffffff;
  cursor: pointer;
  display: inline-flex;
  font-family: -apple-system, system-ui, system-ui, "Segoe UI", Roboto,
    "Helvetica Neue", "Fira Sans", Ubuntu, Oxygen, "Oxygen Sans", Cantarell,
    "Droid Sans", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol",
    "Lucida Grande", Helvetica, Arial, sans-serif;
  font-size: 16px;
  font-weight: 600;
  justify-content: center;
  line-height: 20px;
  max-width: 480px;
  min-height: 40px;
  min-width: 0px;
  overflow: hidden;
  padding: 0px;
  padding-left: 20px;
  padding-right: 20px;
  text-align: center;
  touch-action: manipulation;
  transition: background-color 0.167s cubic-bezier(0.4, 0, 0.2, 1) 0s,
    box-shadow 0.167s cubic-bezier(0.4, 0, 0.2, 1) 0s,
    color 0.167s cubic-bezier(0.4, 0, 0.2, 1) 0s;
  user-select: none;
  -webkit-user-select: none;
  vertical-align: middle;

  &:hover,
  &:focus {
    background-color: #f0542da6;
    color: #ffffff;
  }

  &:active {
    background: #09223b;
    color: rgb(255, 255, 255, 0.7);
  }

  &:disabled {
    cursor: not-allowed;
    background: rgba(0, 0, 0, 0.08);
    color: rgba(0, 0, 0, 0.3);
  }
`;

const Title = styled.h1`
  padding-bottom: 25px;
`;
const Image = styled.img`
  width: 100%;
  height: 45vh;
`;
const AboutUs = () => {
  return (
    <Container>
      <AboutArea>
        <Left>
          <Header>HAKKIMIZDA</Header>
          <Title>Özken Mühendislik</Title>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do
            eiusmod tempor incididunt utlabore et dolore magna aliqua. Minimum
            reklam kullanın
          </Text>
          <Button>BİZE ULAŞIN</Button>
        </Left>
        <Right>
          <Image src={cnc} />
        </Right>
      </AboutArea>
    </Container>
  );
};

export default AboutUs;
