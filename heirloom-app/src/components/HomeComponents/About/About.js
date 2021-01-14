import React from "react";
import AboutImg from "../../../images/about.svg";
import {
  AboutContainer,
  AboutTitle,
  AboutH2,
  AboutInfoWrapper,
  AboutInfo,
  AboutImage,
} from "./AboutElements";

const About = () => {
  return (
    <>
      <AboutContainer className="about">
        <AboutTitle>
          <AboutH2>About</AboutH2>
        </AboutTitle>
        <AboutInfoWrapper>
          <AboutInfo>
            Heirloom was created for home chefs like you. Our goal was to create
            an app that would allow you to experiment with creating your own
            recipes and store & share your favorite recipes. All while keeping
            those top secret recipes safe from those who wish to steal your
            culinary secrets.
          </AboutInfo>
          <AboutImage src={AboutImg} type="image/svg" />
        </AboutInfoWrapper>
      </AboutContainer>
    </>
  );
};

export default About;
