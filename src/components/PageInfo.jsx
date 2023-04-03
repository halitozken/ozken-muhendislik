import React from "react";
import styled from "styled-components";
import banner from "../images/banners.jpg";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion/dist/framer-motion";
import { useState } from "react";
import { ImHome3 } from "react-icons/im";
import { mobile } from "../responsive";

const Container = styled.div`
  background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
    url(${banner});
  background-size: cover;
  background-position: center;
  width: 100vw;
  height: 160px;
  ${mobile({ display: "none" })}
`;

const FirstLine = styled.div`
  font-size: 14px;
  padding-bottom: 10px;
  text-transform: capitalize;
`;

const SecondLine = styled.div`
  font-size: 45px;
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
    page = "MİSYON";
  } else if (location.pathname === "/vizyon") {
    page = "VİZYON";
  } else if (location.pathname === "/kalite") {
    page = "KALİTE POLİTİKAMIZ";
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
  }

  const LinkStyle = {
    textDecoration: "none",
    color: "inherit",
    color: isHover ? "#30c4ff" : "white",
  };

  return (
    <Container>
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        exit={{ y: window.innerWidth, transition: { duration: 0.8 } }}
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
