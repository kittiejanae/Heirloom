import React, { useState, useEffect } from "react";
import { animateScroll as scroll } from "react-scroll";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  DashMenu,
  DashMenuItem,
  DashNavLinks,
  DashBtn,
  DashBtnLink,
} from "./HeaderElements";

const HomeHeader = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  });

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <Nav scrollNav={scrollNav}>
        <NavbarContainer>
          <NavLogo to="/" onClick={toggleHome}>
            Heirloom
          </NavLogo>
          <DashMenu>
            <DashMenuItem>
              <DashNavLinks
                to="about"
                activeClass="active"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-89}
              >
                About
              </DashNavLinks>
            </DashMenuItem>
            <DashMenuItem>
              <DashNavLinks
                to="demo"
                activeClass="active"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-89}
              >
                Demo
              </DashNavLinks>
            </DashMenuItem>
            <DashMenuItem>
              <DashNavLinks
                to="features"
                activeClass="active"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                Features
              </DashNavLinks>
            </DashMenuItem>
            <DashMenuItem>
              <DashNavLinks
                to="contact"
                activeClass="active"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                Contact
              </DashNavLinks>
            </DashMenuItem>
          </DashMenu>
          <DashBtn>
            <DashBtnLink to="/AppDemo">Try It Out</DashBtnLink>
          </DashBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default HomeHeader;
