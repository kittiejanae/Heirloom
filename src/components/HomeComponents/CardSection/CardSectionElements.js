import styled from "styled-components";

export const SectionContainer = styled.div`
  background-color: black;
  height: auto;
  margin-top: 8vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 4vw;

  @media screen and (min-width: 768px) {
    margin-top: 0;
  }
`;

export const FeatureTitle = styled.div`
  width: 100%;
  height: 8vw;
  background-color: #ffdb0e;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: 768px) {
    justify-content: flex-start;
    margin-top: 0;
  }
`;

export const FeatureH2 = styled.h2`
  color: black;
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

export const FeaturesContentWrapper = styled.div`
  height: 100%;
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 3vw;

  @media screen and (min-width: 768px) {
    width: 85%;
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const FeatureWrapper = styled.div`
  background-color: #ffdb0e;
  height: 17vw;
  width: 90%;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 2vw;
  border-radius: 8px;
  border: 6px solid #ffdb0e;

  @media screen and (min-width: 768px) {
    flex-direction: column;
    width: 25%;
    height: 27vw;
  }
`;

export const FeatureImage = styled.img`
  width: 40%;
  height: 100%;
  margin-left: 3vw;
  margin-right: 3vw;

  @media screen and (min-width: 768px) {
    width: 100%;
    margin: 0;
  }
`;

export const FeatureP = styled.p`
  height: 100%;
  width: 60%;
  color: #ffdb0e;
  background-color: black;
  font-family: Baloo Tamma 2;
  font-style: normal;
  font-weight: normal;
  font-size: 2.5vw;
  line-height: 2.5vw;
  text-align: center;
  letter-spacing: 0.035em;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  padding: 0.5vw;

  @media screen and (min-width: 768px) {
    width: 94%;
    font-size: 1.5vw;
    line-height: 1.8vw;
  }
`;
