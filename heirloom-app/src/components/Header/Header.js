import React from "react";
import { HeaderContainer, LogoContainer, Logo } from "./HeaderElements";

const Header = ({ handleHomeReset }) => {
  return (
    <>
      <HeaderContainer>
        <LogoContainer>
          <Logo to="/AppDemo" onClick={handleHomeReset}>
            Heirloom
          </Logo>
        </LogoContainer>
      </HeaderContainer>
    </>
  );
};

export default Header;
