import styled from "styled-components";
import { Link } from "react-router-dom";

export const FooterContainer = styled.div`
  width: 100%;
  height: auto;
  background-color: black;
  bottom: 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding-bottom: 4vw;
`;

export const FooterLogoWrapper = styled.div`
  height: auto;
  width: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 768px) {
    margin-right: 8vw;
  }
`;

export const FooterTitle = styled(Link)`
  color: white;
  font-family: Banshee;
  font-style: normal;
  font-weight: normal;
  font-size: 7vw;
  line-height: 7.5vw;
  text-decoration: none;
  padding-bottom: 2vw;
  padding-top: 4vw;

  @media screen and (min-width: 768px) {
    font-size: 5vw;
    line-height: 5.5vw;
    padding-bottom: 0;
    padding-top: 0;
  }
`;

export const FooterSocials = styled.img`
  width: 75%;
  height: 75%;

  @media screen and (min-width: 768px) {
    width: 100%;
    height: 100%;
  }
`;

export const FooterLinksWrapper = styled.div`
  display: flex;
  flex-direction: row;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const FooterLinkItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 16px;
  text-align: center;
  width: 160px;
  box-sizing: border-box;
  color: #000;

  @media screen and (max-width: 420px) {
    margin: 0;
    padding: 10px;
    width: 100%;
  }
`;

export const FooterLinkTitle = styled.h1`
  margin-bottom: 16px;
  color: #fff;
  font-family: Baloo Tamma 2;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 28px;
  text-align: center;
  letter-spacing: 0.035em;
  text-transform: uppercase;
`;

export const FooterLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  margin-bottom: 0.5rem;
  font-family: Bellefair;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 18px;
  text-align: center;

  &:hover {
    color: #ffdb0e;
    transition: 0.3s ease-out;
  }
`;
