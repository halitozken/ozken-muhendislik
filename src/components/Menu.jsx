import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { mobile } from "../responsive";
const Container = styled.div`
  width: 100%;
  height: 65px;
  background-color: #0086bc;
  text-align: center;
  display: flex;
  align-items: center;
`;

const MenuArea = styled.div``;

const MenuItem = styled.a`
  color: white;
  font-size: 14px;
  padding: 18px;
  ${mobile({ fontSize: "12px", padding: "6px", fontWeight: "bold" })}
  &:hover {
    border-bottom: 4px solid white;
  }
`;

const Menu = () => {
  return (
    <Container>
      <MenuArea>
        <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
          <MenuItem>ANASAYFA</MenuItem>
        </Link>

        <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
          <MenuItem>HAKKIMIZDA</MenuItem>
        </Link>

        <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
          <MenuItem>PROJELER</MenuItem>
        </Link>

        <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
          <MenuItem>HİZMETLER</MenuItem>
        </Link>

        <Link
          to="/iletisim"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <MenuItem>İLETİŞİM</MenuItem>
        </Link>
      </MenuArea>
    </Container>
  );
};

export default Menu;
