import styled from "styled-components";

export const HeroContainer = styled.div`
  background: #797272;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  margin-bottom: 0;
  height: 800 px;
  position: relative;
  font-family: Arial;
`;

export const HeroBg = styled.div`
  position: relative;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 50vw;
  overflow: hidden;
  font-family: Arial;
`;

export const ImgBg = styled.img`
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  background: #fff;
`;

export const HeroContent = styled.div`
  z-index: 3;
  width: 32vw;
  height: 23vw;
  position: absolute;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-family: Arial;
  margin-right: 68vw;
  background-color: #ffdb0e;

  @media screen and (max-width: 768px) {
    top: 50vw;
    width: 100%;
    margin: 0;
    height: 10vw;
    align-items: center;
  } ;
`;

export const HeroH1 = styled.h1`
  font-family: BalooTamma2-Regular;
  font-style: normal;
  font-weight: normal;
  font-size: 3vw;
  line-height: 3.5vw;
  text-align: left;
  letter-spacing: 0.035em;
  text-transform: uppercase;
  color: black;
  max-width: 38vw;
  margin-left: 1vw;

  @media screen and (max-width: 768px) {
    max-width: 100%;
  } ;
`;

export const HeroP = styled.p`
  text-align: left;
  font-family: Bellefair;
  font-style: normal;
  font-weight: normal;
  font-size: 1.5vw;
  line-height: 1.8vw;
  letter-spacing: 0.0075em;
  color: black;
  margin-top: -0.8vw;
  margin-bottom: 5vw;
  margin-left: 1vw;
  width: 30vw;

  @media screen and (max-width: 768px) {
    margin-top: -1.5vw;
    width: 100%;
    font-size: 1.8vw;
    text-align: center;
  } ;
`;
