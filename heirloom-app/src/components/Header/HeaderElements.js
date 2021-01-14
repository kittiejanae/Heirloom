import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100px;

  @media screen and (min-width: 768px) {
    width: 72%;
    height: 100px;
  }
`;

export const LogoContainer = styled.div`
  width: auto;
  height: auto;
  left: 34vw;
  top: 3vw;
  pointer: cursor;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 768px) {
  } ;
`;

export const Logo = styled(Link)`
  font-size: 48px;
  line-height: 58px;
  text-align: center;
  color: black;
  font-family: Banshee;
  font-style: normal;
  font-weight: normal;
  pointer: cursor;
  text-decoration: none;

  @media screen and (min-width: 768px) {
    font-size: 64px;
    line-height: 77px;
  }
`;
