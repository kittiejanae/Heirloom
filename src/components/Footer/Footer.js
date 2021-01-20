import React from "react";
import {
  FooterContainer,
  FooterTitle,
  FooterSocials,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  FooterLogoWrapper,
} from "./FooterElements";
import socials from "../../images/socials.svg";
import { animateScroll as scroll } from "react-scroll";

const FooterElements = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <FooterContainer>
        <FooterLogoWrapper>
          <FooterTitle to="/" onClick={toggleHome}>
            Heirloom
          </FooterTitle>
          <FooterSocials src={socials} type="image/svg" />
        </FooterLogoWrapper>
        <FooterLinksWrapper>
          <FooterLinkItems>
            <FooterLinkTitle>About Heirloom</FooterLinkTitle>
            <FooterLink to="/about">How It Works</FooterLink>
            <FooterLink to="/demo">Test Drive the App</FooterLink>
            <FooterLink to="/features">Investors</FooterLink>
            <FooterLink to="/contact">Terms of Service</FooterLink>
          </FooterLinkItems>
          <FooterLinkItems>
            <FooterLinkTitle>Contact Us</FooterLinkTitle>
            <FooterLink to="/about">Contact</FooterLink>
            <FooterLink to="/demo">Support</FooterLink>
            <FooterLink to="/features">Partnerships</FooterLink>
            <FooterLink to="/contact">Advertising</FooterLink>
          </FooterLinkItems>
        </FooterLinksWrapper>
        <FooterLinksWrapper>
          <FooterLinkItems>
            <FooterLinkTitle>Our Team</FooterLinkTitle>
            <FooterLink to="/about">Jane Doe</FooterLink>
            <FooterLink to="/demo">John Smith</FooterLink>
            <FooterLink to="/features">Evan Black</FooterLink>
            <FooterLink to="/contact">Natassja Jordan</FooterLink>
          </FooterLinkItems>
          <FooterLinkItems>
            <FooterLinkTitle>Site Map</FooterLinkTitle>
            <FooterLink to="/about">About Us</FooterLink>
            <FooterLink to="/demo">Demo</FooterLink>
            <FooterLink to="/features">Features</FooterLink>
            <FooterLink to="/contact">Contact Us</FooterLink>
          </FooterLinkItems>
        </FooterLinksWrapper>
      </FooterContainer>
    </>
  );
};

export default FooterElements;
