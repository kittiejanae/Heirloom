import styled from "styled-components";

export const AboutContainer = styled.div`
  width: 100%;
  height: 55vw;
  background-color: #ffdb0e;
  margin-top: 10vw;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 768px) {
    margin-top: 0;
    height: 45vw;
  }
`;

export const AboutTitle = styled.div`
  width: 100%;
  height: 8vw;
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: 768px) {
    justify-content: flex-start;
    margin-top: 0;
  }
`;

export const AboutH2 = styled.h2`
  color: white;
  font-family: Banshee;
  font-style: normal;
  font-weight: normal;
  font-size: 7vw;
  line-height: 7.5vw;

  @media screen and (min-width: 768px) {
    font-size: 5vw;
    line-height: 5.5vw;
    margin-left: 3.5vw;
  }
`;

export const AboutInfoWrapper = styled.div`
  width: 90%;
  height: 40vw;
  margin-top: 3vw;
`;

export const AboutInfo = styled.p`
  color: black;
  float: left;
  width: 30%;
  font-family: Bellefair;
  font-style: normal;
  font-weight: normal;
  font-size: 2.5vw;
  line-height: 2.8vw;
  letter-spacing: 0.0075em;
  color: black;
  margin-left: 15vw;
  text-align: center;

  @media screen and (min-width: 768px) {
    font-size: 1.5vw;
    line-height: 1.8vw;
    width: 40%;
    margin-left: 1vw;
    margin-top: 8vw;
  }
`;

export const AboutImage = styled.img`
  width: 50%;
  height: 100%;
  float: right;

  @media screen and (min-width: 768px) {
    margin-top: -8vw;
    margin-right: 2vw;
  }
`;
