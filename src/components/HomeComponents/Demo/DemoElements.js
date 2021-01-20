import styled from "styled-components";
import { Link } from "react-router-dom";

export const DemoContainer = styled.div`
  width: 100%;
  height: 55vw;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 768px) {
    margin-top: 0;
    height: 45vw;
  }
`;

export const DemoTitle = styled.div`
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

export const DemoH2 = styled.h2`
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

export const DemoContentWrapper = styled.div`
  width: 80%;
  height: 70%;
  display: flex;
  align-items: center;
  margin-top: 3vw;
`;

export const DemoContent1 = styled.div`
  width: 45%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 20vw;
  margin-top: 4vw;

  @media screen and (min-width: 768px) {
    width: 65%;
    margin-left: -8vw;
    margin-top: 0;
  }
`;

export const DemoImage = styled.img`
  width: 100%;
  height: 100%;
  margin-top: 8vw;

  @media screen and (min-width: 768px) {
    margin-top: -8vw;
  }
`;

export const DemoContent2 = styled.div`
  height: 100%;
  width: 60%;
  margin-left: 8vw;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const DemoImage2 = styled.img`
  width: auto;
  height: 100%;
`;

export const DemoButtons = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 2vw;
`;

export const MobileDemoBtn = styled.button`
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
  font-size: 12px;
  line-height: 22px;
  text-align: center;
  letter-spacing: 0.035em;
  text-transform: uppercase;
  text-decoration: none;
  margin: 2vw;
  width: auto;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    border: 1px solid #fb7b00;
    color: #fb7b00;
  }

  &:focus {
    outline: none;
  }

  @media screen and (min-width: 768px) {
    width: 14vw;
    font-size: 16px;
    line-height: 28px;
  }
`;

export const DesktopDemoBtn = styled(Link)`
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
  font-size: 12px;
  line-height: 22px;
  text-align: center;
  letter-spacing: 0.035em;
  text-transform: uppercase;
  text-decoration: none;
  margin: 2vw;
  width: auto;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    border: 1px solid #fb7b00;
    color: #fb7b00;
  }

  @media screen and (min-width: 768px) {
    width: 14vw;
    font-size: 16px;
    line-height: 28px;
  }
`;
