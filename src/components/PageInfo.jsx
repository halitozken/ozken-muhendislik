import React from "react";
import styled from "styled-components";
import banner from "../images/banner1.jpg";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";
import { ImHome3 } from "react-icons/im";
import { mobile } from "../responsive";

const Container = styled.div`
  background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
    url(${banner});
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 140px;
  overflow: hidden;
  box-shadow: rgba(0, 0, 0, 0.99) 0px 5px 15px;
  ${mobile({ height: "120px" })}
`;

const FirstLine = styled.div`
  font-size: 16px;
  padding-bottom: 10px;
  text-transform: capitalize;

  ${mobile({ fontSize: "14px" })}
`;

const SecondLine = styled.div`
  font-size: 45px;
  font-weight: 500;
  ${mobile({ fontSize: "32px" })}
`;

const PageInfo = () => {
  const location = useLocation();

  const [isHover, setIsHover] = useState(false);

  const handleMouseEnter = () => {
    setIsHover(true);
  };

  const handleMouseLeave = () => {
    setIsHover(false);
  };

  let page = "";

  if (location.pathname === "/hakkimizda") {
    page = "Hakkımızda";
  } else if (location.pathname === "/misyon") {
    page = "Misyon";
  } else if (location.pathname === "/vizyon") {
    page = "Vizyon";
  } else if (location.pathname === "/kalite") {
    page = "Kalite Politikamız";
  } else if (location.pathname === "/hizmetler") {
    page = "Hizmetlerimiz";
  } else if (location.pathname === "/galeri") {
    page = "Galeri";
  } else if (location.pathname === "/iletisim") {
    page = "İletişim";
  }

  let pagePath = "";

  if (location.pathname === "/hakkimizda") {
    pagePath = "Hakkımızda";
  } else if (location.pathname === "/misyon") {
    pagePath = "Misyon";
  } else if (location.pathname === "/vizyon") {
    pagePath = "Vizyon";
  } else if (location.pathname === "/kalite") {
    pagePath = "Kalite Politikamız";
  } else if (location.pathname === "/hizmetler") {
    pagePath = "Hizmetlerimiz";
  } else if (location.pathname === "/galeri") {
    pagePath = "Galeri";
  } else if (location.pathname === "/iletisim") {
    pagePath = "İletişim";
  }

  const LinkStyle = {
    textDecoration: "none",
    transition: "0.3s",
    color: isHover ? "#30c4ff" : "white",
  };

  return (
    <Container>
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        exit={{ y: window.innerWidth, transition: { duration: 0.6 } }}
        style={{
          position: "relative",
          top: "25%",
          left: "15%",
          color: "white",
        }}
      >
        <FirstLine>
          <Link
            to="/"
            style={LinkStyle}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <ImHome3 style={{ paddingRight: "4px" }} />
            Anasayfa
          </Link>{" "}
          / {pagePath}
        </FirstLine>
        <SecondLine>{page}</SecondLine>
      </motion.div>
    </Container>
  );
};

export default PageInfo;
