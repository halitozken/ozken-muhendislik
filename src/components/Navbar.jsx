import React from "react";
import styled from "styled-components";
import logo from "../2.png";
import { Link } from "react-router-dom";
import { mobile } from "../responsive";
import { BsFillTelephoneFill } from "react-icons/bs";
import { GrMail } from "react-icons/gr";

const Container = styled.div`
  width: 100%;
  height: 124px;
  /* background-color: #f8f8f8; */
  /* background: rgb(59, 59, 59);
  background: linear-gradient(
    180deg,
    rgba(59, 59, 59, 1) 0%,
    rgba(248, 248, 248, 1) 5%
  ); */
  background-color: white;
  display: flex;
  justify-content: space-around;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

  ${mobile({ flexDirection: "Column", height: "142px;" })}
`;

const Logo = styled.div`
  font-size: 28px;
  font-weight: 600;
  color: black;

  cursor: pointer;
  /* ${mobile({ width: "120px", height: "120px" })} */
`;

const Right = styled.div`
  /* ${mobile({ flexDirection: "column" })} */
  display:flex;
  align-items:center;
  font-weight: 500;
`;

const LogoLink = styled.a``;

const Navbar = () => {
  return (
    <>
      <Container>
        <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
          <Logo>Özken Mühendislik</Logo>
        </Link>

        <Right>
          <BsFillTelephoneFill
            style={{ fontSize: "18px", marginRight: "8px" }}
          />
          +90 224 363 83 15
          <GrMail
            style={{ fontSize: "20px", marginLeft: "18px", marginRight: "8px" }}
          />
          info@ozkenmuhendislik.com
        </Right>
      </Container>
    </>
  );
};

export default Navbar;
