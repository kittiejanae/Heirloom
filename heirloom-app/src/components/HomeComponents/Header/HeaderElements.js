import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";

export const Nav = styled.nav`
  background: #ffdb0e;
  height: 6vw;
  margin-top: 0px;
  justify-content: center;
  align-items: center;
  font-size: 3vw;
  position: sticky;
  top: 0;
  z-index: 10;
  font-family: Banshee;
  border-bottom: 3px solid black;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
    height: 10vw;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 90%;
  height: 4vw;
  z-index: 1;
  padding: 0 24px;

  @media screen and (max-width: 960px) {
    justify-content: center;
    height: 8vw;
  }
`;

export const NavLogo = styled(LinkR)`
  color: #000;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 7vw;
  display: flex;
  align-items: center;
  margin-left: 24px;
  font-weight: bold;
  text-decoration: none;
  font-family: Banshee;
  font-style: normal;
  font-weight: normal;
  line-height: 7.5vw;
  margin-top: 3vw;

  @media screen and (min-width: 960px) {
    font-size: 4vw;
    line-height: 4.5vw;
  }
`;

export const DashMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  font-family: BalooTamma2-Regular;
  font-style: normal;
  font-weight: normal;
  font-size: 1.5vw;
  line-height: 2vw;
  text-align: left;
  letter-spacing: 0.035em;
  text-transform: uppercase;
  color: black;
  height: 6vw;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const DashMenuItem = styled.li`
  height: 2.5vw;
`;

export const DashNavLinks = styled(LinkS)`
  color: #000;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  font-family: BalooTamma2-Regular;

  &:active {
    background-color: black;
    color: #ffdb0e;
    font-weight: bold;
  }

  &:hover {
    background-color: black;
    color: #ffdb0e;
    font-weight: bold;
  }
`;

export const DashBtn = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2vw;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const DashBtnLink = styled(LinkR)`
  background: #fb7b00;
  white-space: nowrap;
  padding: 5px 20px;
  background-color: #fb7b00;
  color: #fff;
  border-radius: 8px;
  border: 1px solid #fb7b00;
  font-family: BalooTamma2-Regular;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 28px;
  text-align: center;
  letter-spacing: 0.035em;
  text-transform: uppercase;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    border: 1px solid #fb7b00;
    color: #fb7b00;
  }
`;
