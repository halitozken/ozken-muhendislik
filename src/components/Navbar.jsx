import React, { useState, useContext } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { mobile } from "../responsive";
import Dropdown from "./Dropdown";
import logo from "../images/whlogo.png";
import Hamburger from "hamburger-react";
import { BoxContext } from "../Context";

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

const Navbar = (props) => {
  const context = useContext(BoxContext);

  // const [isOpen, setOpen] = useState(false);

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
          <Hamburger
            toggled={context.isOpen}
            toggle={context.setOpen}
            duration={0.3}
          />
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
    </>
  );
};

export default Navbar;
