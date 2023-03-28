import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { mobile } from "../responsive";
import Dropdown from "./Dropdown";
import logo from "../images/whlogo.png";
import Hamburger from "hamburger-react";
import "./Navbar.css";

const Nav = styled.nav`
  width: 100%;
  height: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  /* background-color: #3d3d3d; */
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  ${mobile({
    textAlign: "center",
    height: "auto",
    fontSize: "12px",
  })};
`;

const Logo = styled.img`
  width: 275px;
  ${mobile({ padding: "12px", width: "200px", height: "70px" })};
`;

const Menu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  list-style-type: none;

  ${mobile({ display: "none" })};
`;

const MenuItem = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80px;
  padding-left: 15px;
  transition: all 0.2s;

  &:hover {
    color: #0086bc;
  }

  ${mobile({ height: "46px", margin: "auto", paddingRight: "12px" })};
`;

const HamburgerMenu = styled.div`
  display: none;
  ${mobile({ display: "block" })};
`;

const Container = styled.div`
  width: 100%;
  height: auto;
  transition: all 0.5s;
`;

const MobileMenu = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const MobileMenuItem = styled.div`
  width: 390px;
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

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);

  const [dropdown, setDropdown] = useState(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  return (
    <>
      <Nav>
        <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
          <Logo src={logo} />
        </Link>

        <HamburgerMenu>
          <Hamburger toggled={isOpen} toggle={setOpen} duration={0.3} />
        </HamburgerMenu>

        <Menu>
          <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
            <MenuItem> Anasayfa</MenuItem>
          </Link>

          <Link
            to="/hakkimizda"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <MenuItem onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
              Kurumsal
              {dropdown && <Dropdown />}
            </MenuItem>
          </Link>

          <Link
            to="/hizmetler"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <MenuItem> Hizmetlerimiz</MenuItem>
          </Link>

          <Link
            to="/galeri"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <MenuItem> Galeri </MenuItem>
          </Link>

          <Link
            to="/iletisim"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <MenuItem>İletişim</MenuItem>
          </Link>
        </Menu>
      </Nav>
      <Container style={{ display: isOpen === true ? true : "none" }}>
        <MobileMenu>
          <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
            <MobileMenuItem>Anasayfa</MobileMenuItem>
          </Link>

          <Link
            to="/hakkimizda"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <MobileMenuItem>Kurumsal</MobileMenuItem>
          </Link>

          <Link
            to="/misyon"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <MobileMenuItem>Misyon</MobileMenuItem>
          </Link>

          <Link
            to="/vizyon"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <MobileMenuItem>Vizyon</MobileMenuItem>
          </Link>

          <Link
            to="/kalite"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <MobileMenuItem>Kalite Politikamız</MobileMenuItem>
          </Link>

          <Link
            to="/hizmetler"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <MobileMenuItem>Hizmetlerimiz</MobileMenuItem>
          </Link>

          <Link
            to="/galeri"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <MobileMenuItem>Galeri</MobileMenuItem>
          </Link>

          <Link
            to="/iletisim"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <MobileMenuItem>İletişim</MobileMenuItem>
          </Link>
        </MobileMenu>
      </Container>
    </>
  );
};

export default Navbar;
