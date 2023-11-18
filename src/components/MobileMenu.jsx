import React, { useContext } from "react";
import styled from "styled-components";
import { BoxContext } from "../Context";
import { Link, useLocation } from "react-router-dom";

const Container = styled.nav`
  z-index: 2;
  width: 100%;
  height: 100vh;
  position: absolute;
  left: 100%;
  top: 162;
  display: flex;
  transition: left 300ms ease;
`;

const MobileMenuArea = styled.div`
  width: 70%;

  background-color: white;
`;

const MobileMenuItem = styled.div`
  font-size: 22px;
  font-weight: 700;
  width: 60%;
  margin: 10%;
  padding-bottom: 5px;
`;

const Overlay = styled.div`
  width: 30%;
  background-color: black;
  opacity: 0.5;
`;

const MobileMenu = () => {
  const context = useContext(BoxContext);
  const params = useLocation().pathname;

  return (
    <Container
      style={{
        position: "absolute",
        left: context.isOpen === true ? "0" : null,
      }}
    >
      <Overlay />
      <MobileMenuArea>
        <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
          <MobileMenuItem
            style={{
              borderBottom: params === "/" ? "5px solid #0086bc" : null,
            }}
          >
            Anasayfa
          </MobileMenuItem>
        </Link>

        <Link
          to="/hakkimizda"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <MobileMenuItem
            style={{
              borderBottom:
                params === "/hakkimizda" ? "5px solid #0086bc" : null,
            }}
          >
            Kurumsal
          </MobileMenuItem>
        </Link>

        <Link to="/misyon" style={{ textDecoration: "none", color: "inherit" }}>
          <MobileMenuItem
            style={{
              borderBottom: params === "/misyon" ? "5px solid #0086bc" : null,
            }}
          >
            Misyon
          </MobileMenuItem>
        </Link>

        <Link to="/vizyon" style={{ textDecoration: "none", color: "inherit" }}>
          <MobileMenuItem
            style={{
              borderBottom: params === "/vizyon" ? "5px solid #0086bc" : null,
            }}
          >
            Vizyon
          </MobileMenuItem>
        </Link>

        <Link to="/kalite" style={{ textDecoration: "none", color: "inherit" }}>
          <MobileMenuItem
            style={{
              borderBottom: params === "/kalite" ? "5px solid #0086bc" : null,
            }}
          >
            Kalite Politikamız
          </MobileMenuItem>
        </Link>

        <Link
          to="/hizmetler"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <MobileMenuItem
            style={{
              borderBottom:
                params === "/hizmetler" ? "5px solid #0086bc" : null,
            }}
          >
            Hizmetlerimiz
          </MobileMenuItem>
        </Link>

        {/* <Link to="/galeri" style={{ textDecoration: "none", color: "inherit" }}>
          <MobileMenuItem
            style={{
              borderBottom: params === "/galeri" ? "5px solid #0086bc" : null,
            }}
          >
            Galeri
          </MobileMenuItem>
        </Link> */}

        <Link
          to="/iletisim"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <MobileMenuItem
            style={{
              borderBottom: params === "/iletisim" ? "5px solid #0086bc" : null,
            }}
          >
            İletişim
          </MobileMenuItem>
        </Link>
      </MobileMenuArea>
    </Container>
  );
};

export default MobileMenu;
