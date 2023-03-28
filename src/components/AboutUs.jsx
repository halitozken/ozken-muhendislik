import React from "react";
import styled from "styled-components";
import cnc from "../images/cnc.png";
import { Link } from "react-router-dom";
import { mobile } from "../responsive";

const Container = styled.div`
  width: 100%;
  height: 75vh;

  display: flex;

  ${mobile({ height: "50vh" })}
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
`;

const Right = styled.div`
  width: 35%;
`;
// const Header = styled.h5`
//   padding-bottom: 25px;
//   color: #0086bc;
// `;

const Text = styled.div`
  font-size: 20px;
  padding-bottom: 25px;
  ${mobile({ fontSize: "16px" })}
`;

const Button = styled.button`
  color: white;
  border: 1px orange;
  border-radius: 24%;
  padding: 22px;
  align-items: center;
  background-color: #0086bc;
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
    background-color: #0086bc;
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
  ${mobile({ fontSize: "22px" })}
  padding-bottom: 25px;
`;

const Image = styled.img`
  width: 100%;
  height: 45vh;

  ${mobile({ height: "20vh" })}
`;

const AboutUs = () => {
  return (
    <Container>
      <AboutArea>
        <Left>
          <Title>Özken Mühendislik</Title>
          <Text>
            CNC İşleme, CAD - CAM - CNC Tasarım, Torna, Freze, 3D Tasarım ve
            Baskı
          </Text>
          <Link
            to="/iletisim"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <Button>BİZE ULAŞIN</Button>
          </Link>
        </Left>
        <Right>
          <Image src={cnc} />
        </Right>
      </AboutArea>
    </Container>
  );
};

export default AboutUs;
