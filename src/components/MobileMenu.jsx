import React, { useContext } from "react";
import styled from "styled-components";
import { BoxContext } from "../Context";
import { Link } from "react-router-dom";

const Container = styled.div`
  width: 100%;
  height: auto;
  opacity: 0,
  transition: 0.5s ease-in-out;
`;

const MobileMenuArea = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const MobileMenuItem = styled.div`
  width: 100vw;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 12px;
  padding-bottom: 12px;
  border-bottom: 1px solid white;
  color: white;
  font-weight: 600;
  background-color: #0086bc;
  transition: all 0.5s;
`;

const MobileMenu = () => {
  const context = useContext(BoxContext);
  console.log(context.isOpen);

  return (
    <Container
      style={{
        width: "100%",
        display: context.isOpen === true ? "block" : "none",
      }}
    >
      <MobileMenuArea>
        <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
          <MobileMenuItem>Anasayfa</MobileMenuItem>
        </Link>

        <Link
          to="/hakkimizda"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <MobileMenuItem>Kurumsal</MobileMenuItem>
        </Link>

        <Link to="/misyon" style={{ textDecoration: "none", color: "inherit" }}>
          <MobileMenuItem>Misyon</MobileMenuItem>
        </Link>

        <Link to="/vizyon" style={{ textDecoration: "none", color: "inherit" }}>
          <MobileMenuItem>Vizyon</MobileMenuItem>
        </Link>

        <Link to="/kalite" style={{ textDecoration: "none", color: "inherit" }}>
          <MobileMenuItem>Kalite Politikamız</MobileMenuItem>
        </Link>

        <Link
          to="/hizmetler"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <MobileMenuItem>Hizmetlerimiz</MobileMenuItem>
        </Link>

        <Link to="/galeri" style={{ textDecoration: "none", color: "inherit" }}>
          <MobileMenuItem>Galeri</MobileMenuItem>
        </Link>

        <Link
          to="/iletisim"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <MobileMenuItem>İletişim</MobileMenuItem>
        </Link>
      </MobileMenuArea>
    </Container>
  );
};

export default MobileMenu;
