import styled from "styled-components";
import { Link } from "react-router-dom";

export const DesktopMenuContainer = styled.div`
  width: 28vw;
  height: 100%;
  position: fixed;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: #ffdb0e;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const CookBookMenuContainer = styled.div`
  width: 51vw;
  height: 14vw;
  position: absolute;
  top: 13.5vw;
  left: 6vw;
`;

export const CookBookHeader = styled(Link)`
  font-family: Banshee;
  font-style: normal;
  font-weight: normal;
  font-size: 4vw;
  line-height: 4.5vw;
  text-align: left;
  margin-left: -3vw;
  margin-bottom: 0;
  margin-top: 0;
  text-decoration: none;
  color: black;
  display: flex;

  &:hover {
    transform: scale(1.02);
    tranisition: all 0.2 ease-in-out;
    cursor: pointer;
  }
`;

export const CookBookList = styled.ul`
  list-style: none;
  text-align: left;
  margin-left: -6vw;
`;

export const CookbookListItem = styled(Link)`
  font-family: BalooTamma2-Regular;
  font-style: normal;
  font-weight: normal;
  font-size: 1.5vw;
  line-height: 2vw;
  text-align: left;
  letter-spacing: 0.035em;
  text-transform: uppercase;
  color: black;
  max-width: 18vw;
  text-decoration: none;
  display: flex;
  flex-direction: column;

  &:hover {
    background-color: black;
    color: #ffdb0e;
    font-weight: bold;
    text-align: center;
  }
`;

export const FunctionList = styled.ul`
  list-style: none;
  margin-left: -6.25vw;
`;

export const FunctionListItem = styled.li`
  font-family: BalooTamma2-Regular;
  font-style: normal;
  font-weight: normal;
  font-size: 1.5vw;
  line-height: 1.75vw;
  text-align: center;
  letter-spacing: 0.035em;
  text-transform: uppercase;
  color: black;
  display: flex;
  flex-direction: row;
  align-items: center;

  &:hover {
    transform: scale(1.02);
    tranisition: all 0.2 ease-in-out;
    cursor: pointer;
  }
`;

export const FunctionIcon = styled.img`
  width: 3vw;
  height: 3vw;
`;

export const FunctionName = styled.p`
  font-family: BalooTamma2-Regular;
  font-style: normal;
  font-weight: normal;
  font-size: 1.5vw;
  line-height: 1.75vw;
  text-align: center;
  letter-spacing: 0.035em;
  text-transform: uppercase;
  color: black;
`;
