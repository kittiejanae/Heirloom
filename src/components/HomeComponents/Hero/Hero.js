import React from "react";
import Hero4 from "../../../images/Hero4.jpg";
import {
  HeroContainer,
  HeroBg,
  ImgBg,
  HeroContent,
  HeroH1,
  HeroP,
} from "./HeroElements";

const Hero = () => {
  return (
    <>
      <HeroContainer>
        <HeroBg>
          <ImgBg src={Hero4} type="image/jpg" />
        </HeroBg>
        <HeroContent>
          <HeroH1>The Perfect Vault for Your Precious Recipes.</HeroH1>
          <HeroP>
            Designed for all you experimental home chefs, designated family
            event chefs, recipe savers and ingredient perfectionists.{" "}
          </HeroP>
        </HeroContent>
      </HeroContainer>
    </>
  );
};

export default Hero;
