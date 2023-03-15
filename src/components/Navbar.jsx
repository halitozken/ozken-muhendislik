import React from "react";
import styled from "styled-components";
import logo from "../2.png";
import { Link } from "react-router-dom";

const Container = styled.div`
  width: 100%;
  height: 114px;
  /* background-color: #f8f8f8; */
  background: rgb(59, 59, 59);
  background: linear-gradient(
    180deg,
    rgba(59, 59, 59, 1) 0%,
    rgba(248, 248, 248, 1) 5%
  );
  display: flex;
  justify-content: space-around;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

const Logo = styled.img`
  /* font-size: 34px;
  font-weight: 600;
  color: black; */
  width: 275px;
  height: 250px;
  cursor: pointer;
`;

const Right = styled.div``;

const MenuItem = styled.a`
  font-size: 18px;
  font-weight: 600;
  padding: 12px;
  color: black;
  transition: all 0.5s;
  &:hover {
    border-bottom: 2px solid black;
    box-shadow: rgba(0, 0, 0, 0.447) 0px 20px 30px -10px;
    /* transition: all 0.25s; */
  }
`;

const LogoLink = styled.a``;

const Navbar = () => {
  return (
    <>
      <Container>
        <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
          <Logo src={logo} />
        </Link>

        <Right>
          <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
            <MenuItem>Anasayfa</MenuItem>
          </Link>

          <Link
            to="/hakkimizda"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <MenuItem>Hakkımızda</MenuItem>
          </Link>

          {/* <Link
            to="/projeler"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <MenuItem>Projeler</MenuItem>
          </Link> */}

          <Link
            to="/hizmetler"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <MenuItem>Projeler</MenuItem>
          </Link>

          {/* <Link
            to="/galeri"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <MenuItem>Galeri</MenuItem>
          </Link> */}

          <Link
            to="/iletisim"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <MenuItem>İletişim</MenuItem>
          </Link>
        </Right>
      </Container>
    </>
  );
};

export default Navbar;
