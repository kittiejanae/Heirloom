import React from "react";
import { HeaderContainer, LogoContainer, Logo } from "./HeaderElements";

const Header = () => {
  return (
    <>
      <HeaderContainer>
        <LogoContainer>
          <Logo to="/AppDemo">Heirloom</Logo>
        </LogoContainer>
      </HeaderContainer>
    </>
  );
};

export default Header;
